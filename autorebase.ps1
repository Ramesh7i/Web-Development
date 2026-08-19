param([string]$todoFile)

# Read all lines
$lines = @(Get-Content $todoFile | Where-Object { $_.Trim() -ne '' })
$output = @()

foreach ($line in $lines) {
    # Skip comments and empty lines
    if ($line.StartsWith('#') -or $line.Trim() -eq '') {
        $output += $line
        continue
    }
    
    # Extract command and commit hash
    $parts = $line -split '\s+', 3
    if ($parts.Count -lt 2) {
        $output += $line
        continue
    }
    
    $cmd = $parts[0]
    $hash = $parts[1]
    $msg = if ($parts.Count -gt 2) { $parts[2] } else { '' }
    
    # For merge commits, use 'drop', for others use 'pick'
    if ($msg -match '^Merge' -or $line -match 'Merge') {
        $output += "drop $hash"
    } else {
        $output += "pick $hash"
    }
}

# Write back
Set-Content $todoFile -Value $output -Encoding UTF8
