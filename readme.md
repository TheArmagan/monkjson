> # 💨 Quick Example
>
> ```js
> let MJ = require("monkjson");
>
> // Connection is global btw.
> MJ.setConnection("mongodb://127.0.0.1/monkjson");
>
> let db = new MJ.MonkJson("db");
>
> (async () => {
>   await db.set("test.hey.baby", Math.random());
>   let d = await db.get("test");
>   console.log(d); //-> { hey: { baby: 0.9972221858216976 } }
>
>   MJ.endConnection(); // Disconnects from the database.
> })();
> ```

> ## API:
>
> `dataPath` is always needs be string type.
>
> - ### `new MonkJon(name: string)`
>
>   - `.name: String` - Name of the database.
>   - `.set(dataPath, data): any | .put(dataPath, data): any`
>   - `.get(dataPath): any`
>   - `.has(dataPath): boolean | .exists(dataPath): boolean`
>   - `.del(dataPath): boolean | .delete(dataPath): boolean | .unset(dataPath): boolean` - It returns a boolean whether the operation was successful or not.
>   - `.push(dataPath, ...values)`
>   - `.add(dataPath, data)`
>   - `.subtract(dataPath, data)`
>   - `.update(dataPath, updater: function(value: any): any)` - Same as lodash's update function.
>
> - ### `setConnection(mongodbURI: string)`
> - ### `endConnection()`
> - ### `getConnection()`

> ## 😎 Update History:
>
> - db.delete aliases added for the db.del
>
> - db.update added.
> - getConnection added.
> - Better documentation.
