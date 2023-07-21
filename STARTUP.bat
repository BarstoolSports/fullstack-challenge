@echo off

echo Starting MongoDB...
start mongod --dbpath=node-api\data
ping 127.0.0.1 -n 5 > nul

echo Starting Node.js API...
start cmd /c "node node-api\index.js"
ping 127.0.0.1 -n 5 > nul

echo Starting React frontend...
start cmd /c "npm run dev"

echo Running...