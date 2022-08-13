FROM node:lts

RUN corepack enable
RUN pnpm add -g pnpm

# Create a reasonably decent prompt line.
RUN echo 'PS1="\$(printf \"=%.0s\" \$(seq 1 \${COLUMNS}))\n[\$(TZ=\"America/Sao_Paulo\" date \"+%F %T\")] [\w]\n# "' >> /root/.bashrc

# Update and install essentials.
RUN apt-get update
RUN apt-get install -y wget git tmux ripgrep curl

# Download my .tmux.conf.
RUN wget https://raw.githubusercontent.com/marcelocra/.dotfiles/master/unix/.tmux.conf -P ~