#!/usr/bin/env pwsh
<#
KubeJS Development Symlink Helper
=================================

This script creates/removes a symlink between a Minecraft instance's
KubeJS folder and the KubeJS folder in a development repository.

USAGE
-----

Link the Minecraft instance's KubeJS folder to the development repository:

    .\kubejs-link.ps1 link

Link the Minecraft instance's config folder to the development repository:

    .\kubejs-link.ps1 link-config

The script will ask for confirmation before deleting the existing
Minecraft folder.

To skip the confirmation:

    .\kubejs-link.ps1 link -Force

Unlink the Minecraft instance's KubeJS folder:

    .\kubejs-link.ps1 unlink

Unlink the Minecraft instance's config folder:

    .\kubejs-link.ps1 unlink-config

#>

param (
    [Parameter(Position = 0, Mandatory = $true)]
    [ValidateSet("link", "unlink", "link-config", "unlink-config")]
    [string]$Command,

    [switch]$Force
)

# Relaunch as Administrator if needed
if (-not ([Security.Principal.WindowsPrincipal] [Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole(
    [Security.Principal.WindowsBuiltInRole]::Administrator
)) {
    $argString = "-ExecutionPolicy Bypass -File `"$PSCommandPath`" -Command $Command"

    if ($Force) {
        $argString += " -Force"
    }

    Start-Process powershell.exe -Verb RunAs -ArgumentList $argString
    exit
}

$ConfigFile = Join-Path $PSScriptRoot ".env"

if (-not (Test-Path $ConfigFile)) {
    Write-Error "Config file not found: $ConfigFile"
    exit 1
}

# Load .env file
$config = @{}

Get-Content $ConfigFile | ForEach-Object {
    $line = $_.Trim()

    if ($line -and -not $line.StartsWith("#")) {
        $key, $value = $line -split "=", 2
        $config[$key.Trim()] = $value.Trim()
    }
}

$MinecraftInstance = $config["MINECRAFT_INSTANCE"]
$DevRepo = $config["DEV_REPO"]

if (-not $MinecraftInstance -or -not $DevRepo) {
    Write-Error "MINECRAFT_INSTANCE and DEV_REPO must be defined in .env"
    exit 1
}

$MinecraftKubeJS = Join-Path $MinecraftInstance "kubejs"
$DevKubeJS = Join-Path $DevRepo "kubejs"
$MinecraftConfig = Join-Path $MinecraftInstance "config"
$DevConfig = Join-Path $DevRepo "config"

function Link-Folder {
    param (
        [string]$MinecraftPath,
        [string]$DevPath,
        [string]$Label
    )

    if (-not (Test-Path $DevRepo -PathType Container)) {
        Write-Error "Dev repository does not exist: $DevRepo"
        exit 1
    }

    if (-not (Test-Path $DevPath -PathType Container)) {
        Write-Error "Dev $Label folder does not exist: $DevPath"
        exit 1
    }

    if (Test-Path $MinecraftPath) {

        if (-not $Force) {
            Write-Host ""
            Write-Host "WARNING: The following folder will be deleted:" -ForegroundColor Yellow
            Write-Host "  $MinecraftPath" -ForegroundColor Yellow
            Write-Host ""

            $confirmation = Read-Host "Continue? [y/N]"

            if ($confirmation -notmatch '^[Yy]$') {
                Write-Host "Operation cancelled."
                exit 0
            }
        }

        Write-Host "Deleting existing $Label folder..."
        Remove-Item $MinecraftPath -Recurse -Force
    }

    New-Item `
        -ItemType SymbolicLink `
        -Path $MinecraftPath `
        -Target $DevPath | Out-Null

    Write-Host ""
    Write-Host "  $Label linked" -ForegroundColor Green
    Write-Host "  Minecraft: $MinecraftPath"
    Write-Host "  Target:    $DevPath"
}

function Unlink-Folder {
    param (
        [string]$MinecraftPath,
        [string]$Label
    )

    if (-not (Test-Path $MinecraftPath)) {
        Write-Host "No $Label folder or symlink exists."
        exit 0
    }

    $item = Get-Item $MinecraftPath -Force

    if ($item.LinkType -ne "SymbolicLink") {
        Write-Host ""
        Write-Host "WARNING: $MinecraftPath is not a symlink." -ForegroundColor Yellow
        Write-Host "The folder will NOT be deleted."
        exit 1
    }

    Remove-Item $MinecraftPath -Force

    Write-Host ""
    Write-Host " $Label symlink removed" -ForegroundColor Green
}

switch ($Command) {

    "link" {
        Link-Folder -MinecraftPath $MinecraftKubeJS -DevPath $DevKubeJS -Label "KubeJS"
    }

    "unlink" {
        Unlink-Folder -MinecraftPath $MinecraftKubeJS -Label "KubeJS"
    }

    "link-config" {
        Link-Folder -MinecraftPath $MinecraftConfig -DevPath $DevConfig -Label "Config"
    }

    "unlink-config" {
        Unlink-Folder -MinecraftPath $MinecraftConfig -Label "Config"
    }
}