@echo off
cd /d "%~dp0"
chcp 65001 >nul 2>&1
mode con lines=26 cols=120
:menu
cd /d "%~dp0"
chcp 65001  > nul
call cls
echo.
echo                                            ██▒   █▓ ▄▄▄       ██▀███  ▓█████ 
echo                                           ▓██░   █▒▒████▄    ▓██ ▒ ██▒▓█   ▀ 
echo                                           ▓██   █▒░▒██  ▀█▄  ▓██ ░▄█ ▒▒███   
echo                                             ▒██ █░░░██▄▄▄▄██ ▒██▀▀█▄  ▒▓█  ▄ 
echo                                              ▒▀█░   ▓█   ▓██▒░██▓ ▒██▒░▒████▒
echo                                              ░ ▐░   ▒▒   ▓▒█░░ ▒▓ ░▒▓░░░ ▒░ ░
echo                                              ░ ░░    ▒   ▒▒ ░  ░▒ ░ ▒░ ░ ░  ░
echo                                                ░░    ░   ▒     ░░   ░    ░   
echo                                                 ░        ░  ░   ░        ░  ░
echo                                                ░                             
echo.
echo.
echo                                                    [1] Start Installer 
echo                                                     [2] Start Builder 
echo                                                      [3] About Vare 
echo.
set /p secim=:                                                      Choose : 

if /i "%secim%"=="1" (
  goto Installer
) else if /i "%secim%"=="3" (
  goto about
) else if /i "%secim%"=="2" (
   goto builder
)

:Installer
@echo off
cd /d "%~dp0"
chcp 65001  > nul
call cls
echo.
echo                                            ██▒   █▓ ▄▄▄       ██▀███  ▓█████ 
echo                                           ▓██░   █▒▒████▄    ▓██ ▒ ██▒▓█   ▀ 
echo                                           ▓██   █▒░▒██  ▀█▄  ▓██ ░▄█ ▒▒███   
echo                                             ▒██ █░░░██▄▄▄▄██ ▒██▀▀█▄  ▒▓█  ▄ 
echo                                              ▒▀█░   ▓█   ▓██▒░██▓ ▒██▒░▒████▒
echo                                              ░ ▐░   ▒▒   ▓▒█░░ ▒▓ ░▒▓░░░ ▒░ ░
echo                                              ░ ░░    ▒   ▒▒ ░  ░▒ ░ ▒░ ░ ░  ░
echo                                                ░░    ░   ▒     ░░   ░    ░   
echo                                                 ░        ░  ░   ░        ░  ░
echo                                                ░                             
echo.
echo.
echo                                                     Installer Started
echo.
CHCP 437 > nul
call node build.js vareinstaller
chcp 65001  > nul
call cls
chcp 65001  > nul
echo.
echo                                            ██▒   █▓ ▄▄▄       ██▀███  ▓█████ 
echo                                           ▓██░   █▒▒████▄    ▓██ ▒ ██▒▓█   ▀ 
echo                                           ▓██   █▒░▒██  ▀█▄  ▓██ ░▄█ ▒▒███   
echo                                             ▒██ █░░░██▄▄▄▄██ ▒██▀▀█▄  ▒▓█  ▄ 
echo                                              ▒▀█░   ▓█   ▓██▒░██▓ ▒██▒░▒████▒
echo                                              ░ ▐░   ▒▒   ▓▒█░░ ▒▓ ░▒▓░░░ ▒░ ░
echo                                              ░ ░░    ▒   ▒▒ ░  ░▒ ░ ▒░ ░ ░  ░
echo                                                ░░    ░   ▒     ░░   ░    ░   
echo                                                 ░        ░  ░   ░        ░  ░
echo                                                ░                             
echo.
echo.
echo                                                            Done
echo.
pause
goto menu


:about
cd /d "%~dp0"
chcp 65001  > nul
call cls
echo.
echo                                            ██▒   █▓ ▄▄▄       ██▀███  ▓█████ 
echo                                           ▓██░   █▒▒████▄    ▓██ ▒ ██▒▓█   ▀ 
echo                                           ▓██   █▒░▒██  ▀█▄  ▓██ ░▄█ ▒▒███   
echo                                             ▒██ █░░░██▄▄▄▄██ ▒██▀▀█▄  ▒▓█  ▄ 
echo                                              ▒▀█░   ▓█   ▓██▒░██▓ ▒██▒░▒████▒
echo                                              ░ ▐░   ▒▒   ▓▒█░░ ▒▓ ░▒▓░░░ ▒░ ░
echo                                              ░ ░░    ▒   ▒▒ ░  ░▒ ░ ▒░ ░ ░  ░
echo                                                ░░    ░   ▒     ░░   ░    ░   
echo                                                 ░        ░  ░   ░        ░  ░
echo                                                ░                             
echo.
echo.
echo                                                        Vare On Top
echo                                              Vare is a stealer in development
echo                                               Your Stealer Version is 1.0.4
echo.
echo.
echo                                             Telegram : https://t.me/varestealer
echo.
pause
goto menu

:builder
@echo off
cd /d "%~dp0"
chcp 65001  > nul
call cls
echo.
echo                                            ██▒   █▓ ▄▄▄       ██▀███  ▓█████ 
echo                                           ▓██░   █▒▒████▄    ▓██ ▒ ██▒▓█   ▀ 
echo                                           ▓██   █▒░▒██  ▀█▄  ▓██ ░▄█ ▒▒███   
echo                                             ▒██ █░░░██▄▄▄▄██ ▒██▀▀█▄  ▒▓█  ▄ 
echo                                              ▒▀█░   ▓█   ▓██▒░██▓ ▒██▒░▒████▒
echo                                              ░ ▐░   ▒▒   ▓▒█░░ ▒▓ ░▒▓░░░ ▒░ ░
echo                                              ░ ░░    ▒   ▒▒ ░  ░▒ ░ ▒░ ░ ░  ░
echo                                                ░░    ░   ▒     ░░   ░    ░   
echo                                                 ░        ░  ░   ░        ░  ░
echo                                                ░                             
echo.
echo.
echo                                                       Builder Started
echo.
CHCP 437 > nul
call node build.js varebuilder
chcp 65001  > nul
call cls
chcp 65001  > nul
echo.
echo                                            ██▒   █▓ ▄▄▄       ██▀███  ▓█████ 
echo                                           ▓██░   █▒▒████▄    ▓██ ▒ ██▒▓█   ▀ 
echo                                           ▓██   █▒░▒██  ▀█▄  ▓██ ░▄█ ▒▒███   
echo                                             ▒██ █░░░██▄▄▄▄██ ▒██▀▀█▄  ▒▓█  ▄ 
echo                                              ▒▀█░   ▓█   ▓██▒░██▓ ▒██▒░▒████▒
echo                                              ░ ▐░   ▒▒   ▓▒█░░ ▒▓ ░▒▓░░░ ▒░ ░
echo                                              ░ ░░    ▒   ▒▒ ░  ░▒ ░ ▒░ ░ ░  ░
echo                                                ░░    ░   ▒     ░░   ░    ░   
echo                                                 ░        ░  ░   ░        ░  ░
echo                                                ░                             
echo.
echo.
echo                                                            Done
echo.
pause
goto menu