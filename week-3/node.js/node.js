const express = require ("express");
const app = express();

// static files
app.use(express.static("public"));

// root
app.get("/", (req,res) =>{
res.send (`Hello, My Server!`);
});


// get data

app.get("/getData", (req,res) =>{
    let number = req.query.number;
  if(number == undefined){         //沒number時
res.send (`Lack of Parameter`);
}

number= parseInt(number);

 if(isNaN(number)){
  res.send (`Wrong Parameter`);
}else{
    let sum=0; //記錄到目前的總和
    for (let i=1; i<=number; i+=1){  //不用想到n,複雜化了
      sum+=i;   //!!!!!!!!!
    }
    res.send (`${sum}`);
  }});



app.listen(3000);  //伺服器已啟動在http://localhost:3000/
