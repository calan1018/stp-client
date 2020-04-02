#!/bin/bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"

cd $PROJECT_ROOT

# ���� node ���μ��� ����
sudo kill -9 `ps -ef | grep 'node ./bin/www' | awk '{print $2}'`
nohup npm start >/home/ec2-user/logs 2>&1 </home/ec2-user/errors &