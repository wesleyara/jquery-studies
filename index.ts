
import fs from "fs";
import * as readline from "readline";

function askFolderName(): Promise<string> {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise((resolve) => {
    rl.question('Por favor, insira o nome da pasta: ', (answer) => {
      rl.close();
      resolve(answer);
    });
  });
}

const makeFolderName = (name: string, foldersLength: number) => {
  let integer;

  if (foldersLength < 10) {
    integer = `00${foldersLength}`;
  }

  if (foldersLength >= 10 && foldersLength < 100) {
    integer = `0${foldersLength}`;
  }

  if (foldersLength >= 100) {
    integer = foldersLength;
  }

  return `src/${integer}_${name}`;
};

const generateFiles = (path: string) => {
  const copyFile = (file: string) => {
    const fileContent = fs.readFileSync(`./templates/${file}`, "utf8");
    fs.writeFileSync(`${path}/${file}`, fileContent);
  }

  const files = ["app.js", "index.html", "style.css"];

  files.forEach(copyFile);
}

async function makeFolder() {
  const name = await askFolderName();

  if (!name) {
    throw new Error("Please provide a name for the folder");
  }

  const folders = fs.readdirSync("./src");
  const nameWithoutSpaces = name.split(" ").join("_");

  if (folders.includes(nameWithoutSpaces)) {
    throw new Error("Folder already exists");
  }

  const foldersLength = folders.length;
  const folderName = makeFolderName(nameWithoutSpaces, foldersLength);

  fs.mkdirSync(folderName);
  generateFiles(folderName);
}

(async () => {
  await makeFolder();
})();
