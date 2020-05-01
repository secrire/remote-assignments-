const express = require ("express");
const app = express();

app.get("/", (req,res) =>{
res.send (`Hello, My Server!`);
});

app.listen(3000);  //伺服器已啟動在http://localhost:3000/
