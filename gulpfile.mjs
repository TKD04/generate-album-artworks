/* eslint-disable import/no-extraneous-dependencies */
import { existsSync } from "fs";
import { mkdir, readdir } from "fs/promises";
import path from "path";
import sharp from "sharp";

const SRC_DIR_PATH = path.resolve("./src");
const DIST_DIR_PATH = path.resolve("./dist");
const RESIZE_OPSTION = {
  fit: "cover",
  width: 600,
  height: 600,
  position: sharp.strategy.attention,
};
const FORMAT_OPTION = { quality: 75, mozjpeg: true };

/**
 * @param {string} fileName
 */
const convertToMozjpeg = (fileName) => {
  const srcFilePath = path.resolve(SRC_DIR_PATH, fileName);
  const fileNameWithoutExt = fileName.replace(/\.[^.]+$/, "");
  const distFilePath = path.resolve(DIST_DIR_PATH, `${fileNameWithoutExt}.jpg`);

  sharp(srcFilePath)
    .resize(RESIZE_OPSTION)
    .jpeg(FORMAT_OPTION)
    .toFile(distFilePath);
};

/**
 * @param {Function} cb the callback Gulp uses to check whether async task is compoleted
 */
export default async (cb) => {
  const allDirents = await readdir(SRC_DIR_PATH, { withFileTypes: true });
  const files = allDirents.filter(
    (file) => file.isFile() && !file.name.includes(".DS_Store")
  );

  if (!existsSync(DIST_DIR_PATH)) {
    await mkdir(DIST_DIR_PATH);
  }
  files.forEach(async (file) => {
    convertToMozjpeg(file.name);
  });

  cb();
};
