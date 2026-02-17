@echo off
"C:\Program Files\Git\cmd\git.exe" checkout gh-pages
"C:\Program Files\Git\cmd\git.exe" merge main -m "Merge watermark fix"
"C:\Program Files\Git\cmd\git.exe" push origin gh-pages
"C:\Program Files\Git\cmd\git.exe" checkout main
"C:\Program Files\Git\cmd\git.exe" rm deploy_watermark_fix.bat complete_deploy.bat
"C:\Program Files\Git\cmd\git.exe" commit -m "Remove deployment scripts"
"C:\Program Files\Git\cmd\git.exe" push origin main
