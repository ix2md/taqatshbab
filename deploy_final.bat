@echo off
"C:\Program Files\Git\cmd\git.exe" checkout main
"C:\Program Files\Git\cmd\git.exe" add .
"C:\Program Files\Git\cmd\git.exe" commit -m "Update decorations: img/2.png top right, img/1.png top left"
"C:\Program Files\Git\cmd\git.exe" push origin main
"C:\Program Files\Git\cmd\git.exe" checkout gh-pages
"C:\Program Files\Git\cmd\git.exe" merge main -m "Merge decorations update"
"C:\Program Files\Git\cmd\git.exe" push origin gh-pages
"C:\Program Files\Git\cmd\git.exe" checkout main
del deploy_final.bat
