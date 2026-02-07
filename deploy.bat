@echo off
REM OpportunityX Deployment Script for Render (Windows)

echo.
echo ========================================
echo OpportunityX - Render Deployment Helper
echo ========================================
echo.

REM Check if git is initialized
if not exist .git (
    echo Initializing Git repository...
    git init
    echo Git initialized
) else (
    echo Git repository already initialized
)

echo.
echo Adding files to git...
git add .

echo.
echo Committing changes...
git commit -m "Prepare for Render deployment"

echo.
echo Current Git Status:
git status

echo.
echo ========================================
echo Next Steps:
echo ========================================
echo.
echo 1. Create GitHub repository at:
echo    https://github.com/new
echo.
echo 2. Connect your repository:
echo    git remote add origin https://github.com/YOUR_USERNAME/opportunityx.git
echo.
echo 3. Push to GitHub:
echo    git push -u origin main
echo.
echo 4. Deploy on Render:
echo    https://dashboard.render.com/
echo    - Click 'New +' - 'Static Site'
echo    - Connect your GitHub repo
echo    - Click 'Create Static Site'
echo.
echo 5. Your app will be live in 2-3 minutes!
echo.
echo ========================================
echo For detailed instructions, see:
echo    DEPLOYMENT_GUIDE.md
echo ========================================
echo.
pause
