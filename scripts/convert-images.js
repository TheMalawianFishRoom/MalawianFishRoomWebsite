const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const dir = "./public/photos/fish/Extra";

fs.readdirSync(dir)
  .filter(file => file.endsWith(".jpg"))
  .forEach(async file => {
    const input = path.join(dir, file);
    const output = path.join(
      dir,
      file.replace(".jpg", ".webp")
    );

    await sharp(input)
      .webp({ quality: 90 })
      .toFile(output);

    console.log(`Converted ${file}`);
  });