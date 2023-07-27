# Boxscore-Challenge ⚾ 🏀 🏈 ⚽ 🏒 
Barstool Full Stack Challenge (https://github.com/BarstoolSports/fullstack-challenge)

- Support for all sporting events with 2 teams :running_shirt_with_sash:
- Support for pregame, live, and postgame displays (including overtime/extra innings)
- Displays player stats :baseball: :basketball:
- Displays team logos / player headshots if provided in format: "$FIRST_NAME $LAST_NAME.gif"
    - Example: "New York Knicks.gif"
    - Example: "Kevin Durant.png"
 
# Easy-to-use STARTUP.bat file :zap:
Pre-Requisites: Node 18+, MongoDB (localhost)

Windows startup file to handle running the frontend, backend, and database. Executes the commands below

- mongod --dbpath=node-api\data
- node node-api\index.js
- npm run dev
