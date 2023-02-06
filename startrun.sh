# DO NOT RENAME THIS FILE
NVM_HOME = "$PWD/nvm"
export NVM_DIR="$NVM_HOME/.nvm" &&
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" &&
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion" &&

nvm install --latest-npm
bash run.sh
