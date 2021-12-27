const layersOrder = [
    { name: 'Backgrounds', number: 4 },
    { name: 'Frame', number: 1 },
    { name: 'Ien', number: 1 },
   // { name: 'Pants shoes', number: 2 },
   // { name: 'Shirts', number: 4 },
    { name: 'Hair', number: 1 },
   // { name: 'Beard', number: 1 },
   // { name: 'Guitars', number: 3 },
    { name: 'Hat', number: 2 },
   
];
  
const format = {
    width: 230,
    height: 230
};

const rarity = [
    { key: "", val: "original" },
    { key: "_r", val: "rare" },
    { key: "_sr", val: "super rare" },
];

const defaultEdition = 10;

module.exports = { layersOrder, format, rarity, defaultEdition };