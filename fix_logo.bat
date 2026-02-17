@echo off
"C:\Program Files\Git\cmd\git.exe" checkout main
"C:\Program Files\Git\cmd\git.exe" add .
"C:\Program Files\Git\cmd\git.exe" commit -m "Fix logo visibility and image generation"
"C:\Program Files\Git\cmd\git.exe" push origin main
"C:\Program Files\Git\cmd\git.exe" checkout gh-pages
"C:\Program Files\Git\cmd\git.exe" merge main
"C:\Program Files\Git\cmd\git.exe" push origin gh-pages
"C:\Program Files\Git\cmd\git.exe" checkout main
del fix_logo.bat
