import * as fs from "fs";
fs.writeFile("user.txt", "text here", (err) => {
  !!err ? console.log(err) : console.log("Ok");
});
