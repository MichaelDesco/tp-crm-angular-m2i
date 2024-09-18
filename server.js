const jsonServer = require("json-server");
const fs = require("fs");
const path = require("path");

const server = jsonServer.create();
const router = jsonServer.router("api/db.json"); // Point to your JSON file
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);

// Custom middleware to auto-increment IDs
server.use((req, res, next) => {
  if (req.method === "POST") {
    const db = JSON.parse(
      fs.readFileSync(path.join(__dirname, "api/db.json"), "utf-8")
    );
    const collectionName = req.path.slice(1); // Extract collection name from path

    if (db[collectionName]) {
      // Get the highest ID in the collection
      const maxId = db[collectionName].reduce(
        (max, item) => (item.id > max ? item.id : max),
        0
      );
      req.body.id = maxId + 1; // Assign the next ID
    } else {
      req.body.id = 1; // Start ID from 1 if the collection is empty
    }
  }
  next();
});

server.use(router);

// Start the server
server.listen(3000, () => {
  console.log("JSON Server is running");
});
