# Install notes for this project

Follow these steps on macOS to avoid the `sharp` / `node-gyp` build errors and deprecated Node issues.

1) Install Xcode Command Line Tools (GUI prompt)

```bash
xcode-select --install
```

2) Install Homebrew (if you don't have it) and Python 3

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
brew update
brew install python@3.11
```

3) Ensure `python3` is on your PATH and point npm/node-gyp to it

```bash
which python3
npm config set python "$(which python3)"
```

4) Use `nvm` to switch to Node LTS (project includes `.nvmrc`)

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.6/install.sh | bash
export NVM_DIR="$HOME/.nvm" && [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
nvm install --lts
nvm use --lts
```

5) Install libvips (helps `sharp` use system lib instead of building)

```bash
brew install vips
```

6) Clean and reinstall dependencies

```bash
rm -rf node_modules package-lock.json
npm cache verify
npm run check-node
npm install --legacy-peer-deps
```

If `npm run check-node` exits with a non-zero code, switch Node versions (see step 4) and retry.

If you still hit `sharp` build errors, paste the verbose install output here and I'll help debug further.
