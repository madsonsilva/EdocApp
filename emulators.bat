@echo off
cls
:menu
cls
color 71

date /t

echo Computador: %computername%        Usuario: %username%
                   
echo            MENU TAREFAS
echo  =====================================
echo * 1. Iniciar Emulador 'Nexus5X'       * 
echo * 2. Iniciar Emulador 'Nexus6'        *
echo * 3. Listar Emuladores e Dispositivos * 
echo * 4. Sair                             * 
echo  =====================================

set /p opcao= Escolha uma opcao: 
echo ------------------------------
if %opcao% equ 1 goto opcao1
if %opcao% equ 2 goto opcao2
if %opcao% equ 3 goto opcao3
if %opcao% equ 4 goto opcao4
if %opcao% GEQ 5 goto opcao5

:opcao1
cls
echo ==================================
echo *      Iniciando Nexus5X ...     *
echo ==================================
C:\Users\madso\AppData\Local\Android\sdk\tools\emulator.exe -avd Nexus5X
pause
goto menu

:opcao2
cls
echo ==================================
echo *      Iniciando Nexus6 ...      *
echo ==================================
C:\Users\madso\AppData\Local\Android\sdk\tools\emulator.exe -avd Nexus6
pause
goto menu

:opcao3
cls
echo ==================================
echo * Listando Dispositivos ...      *
echo ==================================
adb devices
pause
goto menu

:opcao4
cls
exit

:opcao5
echo ==============================================
echo * Opcao Invalida! Escolha outra opcao do menu *
echo ==============================================
pause
goto menu
