@echo off
setlocal
cd /d "%~dp0"
set "PATH=C:\Users\nrnr8\.gemini\antigravity\scratch\node-v20.18.0-win-x64;C:\Users\nrnr8\.gemini\antigravity\scratch\mingit\cmd;%PATH%"

echo ========================================================
echo  Deploying Rahul Nandan Reddy's Portfolio to GitHub
echo ========================================================
echo.

if "%~1"=="" (
    set /p REPO="Enter your GitHub Repository URL (e.g. https://github.com/RahulNandanReddy/portfolio.git): "
) else (
    set "REPO=%~1"
)

if "%REPO%"=="" (
    echo [ERROR] No repository URL provided. Aborting.
    pause
    exit /b 1
)

echo.
echo [*] Linking git remote 'origin' to %REPO%...
git remote remove origin 2>nul
git remote add origin %REPO%

echo [*] Staging and committing any recent changes...
git add .
git commit -m "Update portfolio and resume content" 2>nul

echo [*] Pushing main branch to GitHub...
git branch -M main
git push -u origin main

echo.
echo ========================================================
echo  Success! Code pushed to GitHub.
echo  The included GitHub Actions workflow (.github/workflows/deploy.yml)
echo  will automatically build and deploy your site to GitHub Pages!
echo ========================================================
echo.
pause
