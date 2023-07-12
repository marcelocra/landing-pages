# syntax=docker/dockerfile:1
FROM node:18.16.1-slim

ENV HOME="/root"

ARG shell_rc="${HOME}/.bashrc"

# Update and install essentials.
RUN apt-get update
RUN apt-get install -y wget git tmux curl zip

# Create a reasonably decent prompt line.
RUN echo 'PS1="\$(printf \"=%.0s\" \$(seq 1 \${COLUMNS}))\n[\$(TZ=\"America/Sao_Paulo\" date \"+%F %T\")] [\w]\n# "' >> ${shell_rc}

# Install git-lfs.
RUN wget https://github.com/git-lfs/git-lfs/releases/download/v3.3.0/git-lfs-linux-amd64-v3.3.0.tar.gz
RUN tar zxf git-lfs-linux-amd64-v3.3.0.tar.gz
RUN mv git-lfs-3.3.0/git-lfs /usr/bin
RUN rm -f ./git-lfs-linux-amd64-v3.3.0.tar.gz
RUN rm -rf ./git-lfs-3.3.0/

# Download my helpers.
RUN wget https://raw.githubusercontent.com/marcelocra/dev/main/config-files/.tmux.conf -P ~
RUN wget https://raw.githubusercontent.com/marcelocra/dev/main/config-files/.gitconfig -P ~
RUN wget https://raw.githubusercontent.com/marcelocra/dev/main/config-files/.gitconfig.personal.gitconfig -P ~
RUN wget https://raw.githubusercontent.com/marcelocra/dev/main/config-files/init_shell.sh -P ~
RUN echo 'source ~/init_shell.sh' >> ${shell_rc}

RUN corepack enable

# ------------------------------------------------------------------------------
# - Deno -----------------------------------------------------------------------
# ------------------------------------------------------------------------------
# Install and setup.
RUN curl -fsSL https://deno.land/install.sh | sh
ENV DENO_INSTALL="${HOME}/.deno"
ENV PATH="${DENO_INSTALL}/bin:${PATH}"
