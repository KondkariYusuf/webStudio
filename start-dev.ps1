$ErrorActionPreference = "Stop"

$repoRoot = "C:\Users\kondk\OneDrive\Desktop\Projects\BZTech\webStudio\webstudio"
$preferredNodeDir = "C:\Users\kondk\AppData\Local\nvm\v22.22.1"
$fallbackNodeDir = "C:\Users\kondk\AppData\Local\nvm\v22.14.0"

if (Test-Path (Join-Path $preferredNodeDir "node.exe")) {
  $nodeDir = $preferredNodeDir
} elseif (Test-Path (Join-Path $fallbackNodeDir "node.exe")) {
  $nodeDir = $fallbackNodeDir
} else {
  throw "Node 22 was not found under C:\Users\kondk\AppData\Local\nvm"
}

$env:PATH = "$nodeDir;C:\nvm4w\nodejs;$env:PATH"

Set-Location -LiteralPath $repoRoot

Write-Host "Using Node from: $nodeDir"
Write-Host "Starting dev server from: $repoRoot"

pnpm dev
