@echo off
set GRYPE_DB_CACHE_DIR=D:\grype-cache
set TEMP=D:\tmp
set TMP=D:\tmp
"D:\tool-bins\grype.exe" dir:. %*
