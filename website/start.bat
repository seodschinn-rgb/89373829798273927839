@echo off
cd /d "%~dp0"
echo Starte Entwicklungsserver...
echo.
echo Nach dem Start: http://localhost:3000 im Browser oeffnen
echo.
echo Beenden mit Strg+C
echo.
npm run dev
pause
