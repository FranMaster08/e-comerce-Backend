const config = require("config");
const app = require("./server");
app.listen(config.get("port"), () => {
  console.log(`Server running in PORT: ${config.get("port")}`);
});
