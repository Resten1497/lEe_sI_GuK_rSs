let express = require('express');
const request = require('request');
var parseString = require('xml2js').parseString;

let app = express();


const responseTitle = (res) => {
    return function(link) {
        request(`https://news.yahoo.co.jp/pickup/${link}/rss.xml`, function (error, response, body) {
        parseString(body,(err,result)=>{
        res.json(findPPAP(result.rss.channel[0].item,logTitle,checkTitle ))
         }) 
    });
    }
}


function findPPAP(array,iteratee,predicate){
    let result = [];
    for(let i = 0; i < array.length ; i++){
        if(predicate(array[i])) { result.push(iteratee(array[i])) }
    }
    return result;
}

function logTitle(arrayKey){
    return arrayKey.title
}

function checkTitle(arrayKey){

   return !!arrayKey.title
    // 타이틀이있으면 ture, 없으면 false
}



app.get('/', function (req, res) {
    
    responseTitle(res)('computer')
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

