#!/usr/bin/env bash
#
# install ubuntu package dependences
#

set -x

DEBIAN_FRONTEND=${DEBIAN_FRONTEND:-noninteractive}
# Hack of Note!
TimeZone=${TimeZone:-"Etc/GMT"}
ln -snf /usr/share/zoneinfo/${TimeZone} /etc/localtime
echo ${TimeZone} > /etc/timezone

# base packages
apt-get install --no-install-recommends --assume-yes \
  apt-transport-https \
  ca-certificates \
  curl \
  gpg \
  bash \
  less \
  openssl \
  libssl-dev \
  pkg-config \
  git \
  cmake \
  dh-autoreconf \
  zip

# Install Dependencies - Linux/tauri
apt-get install --no-install-recommends --assume-yes \
  libwebkit2gtk-4.1-dev \
  libappindicator3-dev \
  librsvg2-dev \
  patchelf \
  libprotobuf-dev \
  protobuf-compiler

# Install Dependencies - Linux/AppImage
apt-get install --no-install-recommends --assume-yes \
  appstream

# Install Dependencies - Linux/OpenCL
apt-get install --no-install-recommends --assume-yes \
  opencl-headers \
  ocl-icd-opencl-dev

# extras
apt-get install --no-install-recommends --assume-yes \
  build-essential \
  wget \
  file \
  libxdo-dev \
  libssl-dev \
  libayatana-appindicator3-dev

# more extras
apt-get install --no-install-recommends --assume-yes \
  lsb-release \
  fuse3 \
  squashfs-tools \
  zsync \
  apt-config-icons \
  apt-utils

## Installing from NodeSource (Recommended for Latest Stable Versions):
# Add the NodeSource repository for the desired Node.js version (e.g., 22.x for the latest LTS)
#curl -sL https://deb.nodesource.com/setup_22.x | sudo bash -
curl -sL https://deb.nodesource.com/setup_22.x | bash -

# Install Node.js and npm
apt-get install --no-install-recommends --assume-yes \
  nodejs

# install rust
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y

export PATH="$HOME/.cargo/bin:$PATH"
source "$HOME/.cargo/env"

#export TARI_NETWORK=esmeralda
export TARI_NETWORK=esme
export ARCH=$(uname -m)

# Prep rust for cross-compile aarch64/arm64 on x86_64
rustup target add ${ARCH}-unknown-linux-gnu
rustup toolchain install stable-${ARCH}-unknown-linux-gnu --force-non-host

# Pre nodeJS modules
npm --version
npm install

npm install -D @tauri-apps/cli@latest

cd src-tauri
cargo install tauri-cli
cargo tauri --version
cargo tauri info
