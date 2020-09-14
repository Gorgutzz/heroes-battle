const hero_data = [
  {
    id: 1,
    label: "Pikachu",
    front: require("../assets/images/heroes/pikachu.gif"),
    back: require("../assets/images/heroes/pikachu-back.gif"),
    sprite: require("../assets/images/heroes/pikachu-small.png"),
    moves: [1, 2, 3, 4, 5, 6, 7],
    type_defenses: {
      normal: 1,
    }
  },
  {
    id: 2,
    label: "Captain America",
    front: require("../assets/images/heroes/captain-america.gif"),
    back: require("../assets/images/heroes/captain-america-back.gif"),
    sprite: require("../assets/images/heroes/captain-america-small.png"),
    moves: [8, 9, 10, 11, 12, 13],
    type_defenses: {
      normal: 1,
    }
  }
];

export default hero_data;
