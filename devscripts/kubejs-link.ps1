<#
KubeJS Development Symlink Helper
=================================

This script creates/removes a symlink between a Minecraft instance's
KubeJS folder and the KubeJS folder in a development repository.

USAGE
-----

Link the Minecraft instance to the development repository:

    .\kubejs-link.ps1 link

The script will ask for confirmation before deleting the existing
Minecraft kubejs folder.

To skip the confirmation:

    .\kubejs-link.ps1 link -Force

Unlink the Minecraft instance:

    .\kubejs-link.ps1 unlink

#>

param (
    [Parameter(Position = 0, Mandatory = $true)]
    [ValidateSet("link", "unlink")]
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

switch ($Command) {

    "link" {

        if (-not (Test-Path $DevRepo -PathType Container)) {
            Write-Error "Dev repository does not exist: $DevRepo"
            exit 1
        }

        if (-not (Test-Path $DevKubeJS -PathType Container)) {
            Write-Error "Dev kubejs folder does not exist: $DevKubeJS"
            exit 1
        }

        if (Test-Path $MinecraftKubeJS) {

            if (-not $Force) {
                Write-Host ""
                Write-Host "WARNING: The following folder will be deleted:" -ForegroundColor Yellow
                Write-Host "  $MinecraftKubeJS" -ForegroundColor Yellow
                Write-Host ""

                $confirmation = Read-Host "Continue? [y/N]"

                if ($confirmation -notmatch '^[Yy]$') {
                    Write-Host "Operation cancelled."
                    exit 0
                }
            }

            Write-Host "Deleting existing kubejs folder..."
            Remove-Item $MinecraftKubeJS -Recurse -Force
        }

        New-Item `
            -ItemType SymbolicLink `
            -Path $MinecraftKubeJS `
            -Target $DevKubeJS | Out-Null

        Write-Host ""
        Write-Host "  KubeJS linked" -ForegroundColor Green
        Write-Host "  Minecraft: $MinecraftKubeJS"
        Write-Host "  Target:    $DevKubeJS"
    }

    "unlink" {

        if (-not (Test-Path $MinecraftKubeJS)) {
            Write-Host "No kubejs folder or symlink exists."
            exit 0
        }

        $item = Get-Item $MinecraftKubeJS -Force

        if ($item.LinkType -ne "SymbolicLink") {
            Write-Host ""
            Write-Host "WARNING: $MinecraftKubeJS is not a symlink." -ForegroundColor Yellow
            Write-Host "The folder will NOT be deleted."
            exit 1
        }

        Remove-Item $MinecraftKubeJS -Force

        Write-Host ""
        Write-Host " KubeJS symlink removed" -ForegroundColor Green
    }
}