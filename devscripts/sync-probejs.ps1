<#
ProbeJS Development File Sync
=============================

Copies development files from a Minecraft instance into the
development repository.

The following folders are copied:

    Minecraft Instance\.probe
        -> DEV_REPO\.probe

    Minecraft Instance\.vscode
        -> DEV_REPO\.vscode

USAGE
-----

Sync files from the Minecraft instance to the development repository:

    .\sync-probejs.ps1

The script will ask for confirmation before replacing existing
folders in the development repository.

To skip the confirmation:

    .\sync-probejs.ps1 -Force

#>

param (
    [switch]$Force
)

# Relaunch as Administrator if needed
if (-not ([Security.Principal.WindowsPrincipal] [Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole(
    [Security.Principal.WindowsBuiltInRole]::Administrator
)) {
    $argString = "-ExecutionPolicy Bypass -File `"$PSCommandPath`""

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

$MinecraftProbe = Join-Path $MinecraftInstance ".probe"
$MinecraftVSCode = Join-Path $MinecraftInstance ".vscode"

$DevProbe = Join-Path $DevRepo ".probe"
$DevVSCode = Join-Path $DevRepo ".vscode"

# Validate source folders
if (-not (Test-Path $MinecraftProbe -PathType Container)) {
    Write-Error "Minecraft .probe folder does not exist: $MinecraftProbe"
    exit 1
}

if (-not (Test-Path $MinecraftVSCode -PathType Container)) {
    Write-Error "Minecraft .vscode folder does not exist: $MinecraftVSCode"
    exit 1
}

# Check which destination folders already exist
$ProbeExists = Test-Path $DevProbe
$VSCodeExists = Test-Path $DevVSCode

# Confirmation
if (($ProbeExists -or $VSCodeExists) -and -not $Force) {

    Write-Host ""
    Write-Host "The following changes will be made:" -ForegroundColor Yellow

    if ($ProbeExists) {
        Write-Host "  Replace: $DevProbe" -ForegroundColor Yellow
    }
    else {
        Write-Host "  Create:  $DevProbe" -ForegroundColor Yellow
    }

    if ($VSCodeExists) {
        Write-Host "  Merge:   $DevVSCode" -ForegroundColor Yellow
    }
    else {
        Write-Host "  Create:  $DevVSCode" -ForegroundColor Yellow
    }

    Write-Host ""

    $confirmation = Read-Host "Continue? [y/N]"

    if ($confirmation -notmatch '^[Yy]$') {
        Write-Host "Operation cancelled."
        exit 0
    }
}

# Replace .probe
if (Test-Path $DevProbe) {
    Write-Host "Removing existing .probe..."
    Remove-Item $DevProbe -Recurse -Force
}

Write-Host "Copying .probe..."
Copy-Item `
    -Path $MinecraftProbe `
    -Destination $DevProbe `
    -Recurse -Force

# Merge .vscode
if (-not (Test-Path $DevVSCode)) {
    New-Item -ItemType Directory -Path $DevVSCode | Out-Null
}

Write-Host "Copying .vscode files..."
Copy-Item `
    -Path (Join-Path $MinecraftVSCode "*") `
    -Destination $DevVSCode `
    -Recurse -Force

Write-Host ""
Write-Host "  Development files copied successfully" -ForegroundColor Green
Write-Host ""
Write-Host "  .probe:"
Write-Host "    $MinecraftProbe"
Write-Host "      -> $DevProbe"
Write-Host ""
Write-Host "  .vscode:"
Write-Host "    $MinecraftVSCode"
Write-Host "      -> $DevVSCode"