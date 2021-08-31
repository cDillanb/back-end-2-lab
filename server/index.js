const express = require("express");
const cors = require("cors");
const ctrl = require("./controller/ctrl");
const app = express();
const SERVER_PORT = 4004;

app.use(express.json());
app.use(cors());

app.get("/api/houses", ctrl.getHouses);
app.post("/api/houses", ctrl.createHouse);
app.put("/api/houses/:id", ctrl.updateHouse);
app.delete("/api/houses/:id", ctrl.deleteHouse);

app.listen(SERVER_PORT, (req, res) => console.log(`Server up and running on port ${SERVER_PORT}`));
