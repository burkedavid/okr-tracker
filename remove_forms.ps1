# PowerShell script to remove inline forms from manage page
$filePath = "src/app/dashboard/manage/page.tsx"
$content = Get-Content $filePath -Raw

# Remove the three inline forms and replace with comments
$content = $content -replace '        {/\* Objective Form \*/}[\s\S]*?{/\* Key Result Form \*/}', '        {/* Objective Form - Now using Modal */}

        {/* Key Result Form - Now using Modal */}'

$content = $content -replace '        {/\* Key Result Form \*/}[\s\S]*?{/\* Progress Update Form \*/}', '        {/* Key Result Form - Now using Modal */}

        {/* Progress Update Form - Now using Modal */}'

$content = $content -replace '        {/\* Progress Update Form \*/}[\s\S]*?{/\* Current Objectives List \*/}', '        {/* Progress Update Form - Now using Modal */}

        {/* Current Objectives List */}'

# Write the modified content back to the file
Set-Content $filePath $content

Write-Host "Successfully removed inline forms and replaced with modal comments" 