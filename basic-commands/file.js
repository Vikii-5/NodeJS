const fs = require('fs');

// const data = "Hello World";
// fs.writeFile("note.txt", data, err =>{
//     console.log("Completed Writing!!")
// })

// const quote = "Live More, Worry Less !!";
// const [, , num] = process.argv;

// for(let i =1; i <= num; i++){
//     fs.writeFile(`./backup/text-${i}.html`, quote, err =>{
//         console.log("Completed Writing!!", `text-${i}.html`)
//     })
// }

// fs.readFile("./note.txt", "utf-8", (err, data) =>{
//     if(err){
//         console.log("Error", err);
//         return;
//     }
//     console.log(data);
// })

// const newQuote = "Welcome to the world of Node.js";
// fs.appendFile("./note.txt", "\n" + newQuote, err =>{
//   console.log("Completed Writing!! ❤")  
// })

fs.readdir("./backup", (err, files) => {
    files.forEach((fileName) => fs.unlink(`./backup/${fileName}`, err => {
            console.log("All files were deleted")
        }))
    
    
})