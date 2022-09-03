FROM node:16.16-slim

RUN corepack enable
RUN pnpm add -g pnpm

ENV HOME="/root"

ARG shell_rc="${HOME}/.bashrc"


# ------------------------------------------------------------------------------
# - System ---------------------------------------------------------------------
# ------------------------------------------------------------------------------
# Create a reasonably decent prompt line.
RUN echo 'PS1="\$(printf \"=%.0s\" \$(seq 1 \${COLUMNS}))\n[\$(TZ=\"America/Sao_Paulo\" date \"+%F %T\")] [\w]\n# "' >> ${shell_rc}

# Update and install essentials.
RUN apt-get update
RUN apt-get install -y wget git tmux ripgrep curl unzip

# Download my .tmux.conf.
RUN wget https://raw.githubusercontent.com/marcelocra/.dotfiles/master/unix/.tmux.conf -P ~


# ------------------------------------------------------------------------------
# - golang ---------------------------------------------------------------------
# ------------------------------------------------------------------------------
# Download, install and configure.
RUN wget https://go.dev/dl/go1.19.linux-amd64.tar.gz
RUN rm -rf /usr/local/go && tar -C /usr/local -xzf go1.19.linux-amd64.tar.gz
ENV PATH="${PATH}:/usr/local/go/bin"


# ------------------------------------------------------------------------------
# - hugo -----------------------------------------------------------------------
# ------------------------------------------------------------------------------
RUN wget https://github.com/gohugoio/hugo/releases/download/v0.102.0/hugo_extended_0.102.0_Linux-64bit.tar.gz
RUN tar -C /usr/local/bin -xzf hugo_extended_0.102.0_Linux-64bit.tar.gz


# ------------------------------------------------------------------------------
# - Node -----------------------------------------------------------------------
# ------------------------------------------------------------------------------
# Install NVM.
RUN wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash