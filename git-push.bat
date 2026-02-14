@echo off
cd /d "%~dp0"
REM Zuerst Git-Identitaet setzen (einmalig):
REM git config --global user.email "deine@email.de"
REM git config --global user.name "Dein Name"
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/seodschinn-rgb/SeoM-nchen.git
git push -u origin main
pause
