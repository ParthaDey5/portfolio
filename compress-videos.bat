@echo off
setlocal enabledelayedexpansion

REM Input and output directories
set INPUT_DIR=video
set OUTPUT_DIR=video\compressed

REM Create output directory if it doesn't exist
if not exist "%OUTPUT_DIR%" mkdir "%OUTPUT_DIR%"

REM Loop through common video formats
for %%F in (%INPUT_DIR%\*.mp4 %INPUT_DIR%\*.webm %INPUT_DIR%\*.mov) do (
    set "filename=%%~nF"
    set "ext=%%~xF"

    REM Skip already compressed files
    echo !filename! | findstr /i "-compressed" >nul
    if errorlevel 1 (
        set "output=%OUTPUT_DIR%\!filename!-compressed!ext!"
        echo Compressing %%F → !output!
        ffmpeg -i "%%F" -vcodec libx264 -crf 28 -preset fast -acodec aac -b:a 128k "!output!"
    ) else (
        echo Skipping already compressed file: %%F
    )
)

echo.
echo ✅ Compression complete. Files saved in %OUTPUT_DIR%
pause
