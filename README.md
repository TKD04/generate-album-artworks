# Generate Album Artworks

A simple Node.js app to generate appropriate images for album artworks.

## Default Settings

- Encoder: mozjpeg
- Quality: 75
- maxWidth: 600px
- maxHeight: 600px

You can change these settings by changing `RESIZE_OPTION` and `FORMAT_OPTION` in the `gulpfile.mjs`.

## Install

**NOTE**: You will need to install [Git](https://git-scm.com/) and [Node.js](https://nodejs.org/en) if you don't already have them.

1. Open a terminal and change to the directory where you want to install this app.
2. Type `git clone https://github.com/TKD04/generate-album-artworks.git`.
3. Type `cd generate-album-artworks`.
4. Type `npm i`.

## Usage

1. Create `src` directory in this directory.
2. Copy the images you want to generate into the `src` directory.
3. Open the terminal.
4. Type `npm run generate`.
5. Wait a few seconds.

After these operations, you'll see the generated images in the `dist` directory.
