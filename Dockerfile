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
# - Deno -----------------------------------------------------------------------
# ------------------------------------------------------------------------------
# Install and setup.
RUN curl -fsSL https://deno.land/install.sh | sh
ENV DENO_INSTALL="${HOME}/.deno"
ENV PATH="${DENO_INSTALL}/bin:${PATH}"