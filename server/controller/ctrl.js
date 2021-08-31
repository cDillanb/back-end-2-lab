const houses = require("../db.json");
let houseID = 4;

module.exports = {
  getHouses: (req, res) => {
    res.status(200).send(houses);
  },
  deleteHouse: (req, res) => {
    const { id } = req.params;
    const index = houses.findIndex((house) => {
      return house.id === +id;
    });

    houses.splice(index, 1);
    res.status(200).send(houses);
  },
  createHouse: (req, res) => {
    let { address, price, imageURL } = req.body;
    const newHouse = { id: houseID, address, price, imageURL };

    newHouse.price = +newHouse.price;
    houses.push(newHouse);
    houseID++;
    res.status(200).send(houses);
  },
  updateHouse: (req, res) => {
    const { id } = req.params;
    const { type } = req.body;

    const index = houses.findIndex((house) => {
      return house.id === +id;
    });

    if (type === 'plus') {
        houses[index].price += 10000;
        res.status(200).send(houses);
    } else if (type === 'minus' && houses[index].price >= 10000) {
        houses[index].price -= 10000;
        res.status(200).send(houses);
    } else if (type === 'minus' && houses[index].price > 0){
        houses[index].price = 0;
        res.status(200).send(houses);
    } else {
        res.status(400).send('Something went wrong');
    }
  },
};
