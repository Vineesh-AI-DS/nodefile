const fs = require('fs');
const filepath = './randomFile.txt';

const createFile = () => {
    fs.writeFileSync(filepath, 'Hello, World!', 'utf8');
    console.log('File Created');
}

const readFile = () => {
    const fileData = fs.readFileSync(filepath, 'utf-8');
    console.log(`Data from file : ${fileData}`);
}

const writeFile = (newContent) => {
    fs.writeFileSync(filepath, newContent, 'utf-8');
    console.log('File rewritten');
}

const updateFile = (appendedContent) => {
    fs.appendFileSync(filepath, appendedContent, 'utf-8');
    console.log('File got appended');
}

createFile();
readFile();
writeFile("Good Morning from fs")
readFile();
updateFile(' Hello World!');
readFile()