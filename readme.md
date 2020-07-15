# Quick Example
```js
let MJ = require("monkjson");

MJ.setConnection("mongodb://127.0.0.1/monkjson");

let db = new MJ.MonkJson("db");

(async ()=>{
    await db.set("test.hey.baby",Math.random());
    let d = await db.get("test");
    console.log(d); //-> { hey: { baby: 0.9972221858216976 } }
    MJ.endConnection();
})();
```