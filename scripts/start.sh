#!/bin/bash
nvm install node

# nodejs version check after installed
node -e "console.log('Running Node.js ' + process.version)"

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"

# 원래 node 프로세스 종료
sudo kill -9 `ps -ef | grep 'node ./bin/www' | awk '{print $2}'`
nohup npm start >/home/ec2-user/logs 2>&1 </home/ec2-user/errors &