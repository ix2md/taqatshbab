@echo off
"C:\Program Files\Git\cmd\git.exe" checkout main
"C:\Program Files\Git\cmd\git.exe" add .
"C:\Program Files\Git\cmd\git.exe" commit -m "Update logo.png and redeploy"
"C:\Program Files\Git\cmd\git.exe" push origin main
"C:\Program Files\Git\cmd\git.exe" checkout gh-pages
"C:\Program Files\Git\cmd\git.exe" merge main -m "Merge latest changes"
"C:\Program Files\Git\cmd\git.exe" push origin gh-pages
"C:\Program Files\Git\cmd\git.exe" checkout main
del redeploy.bat
