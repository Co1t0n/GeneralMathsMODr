wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash



# Copy + paste this, without the : ' and the ending quote (that's a multiline comment)

export NVM_DIR="$HOME/.nvm" &&
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" &&
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion" &&

nvm install --lts &&
nvm use --lts