@echo off
"C:\Program Files\Git\cmd\git.exe" checkout -b gh-pages
if %errorlevel% neq 0 (
    echo Branch gh-pages might already exist, switching to it...
    "C:\Program Files\Git\cmd\git.exe" checkout gh-pages
)
"C:\Program Files\Git\cmd\git.exe" push -u origin gh-pages
