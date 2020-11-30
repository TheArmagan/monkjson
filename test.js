(async () => {
    let MJ = require("./index");
    global.MJ = MJ;

    await MJ.setConnection("mongodb://127.0.0.1/monkjson");

    let db = new MJ.MonkJson("db");
    new MJ.MonkJson("db");
    require("./test2");
    require("./test2 copy");
    require("./test2 copy 2");
    await db.set("owsla1", "asd");
})();