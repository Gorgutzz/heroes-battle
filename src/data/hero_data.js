const hero_data = [
  {
    id: 1,
    label: "Pikachu",
    front: require("../assets/images/heroes/pikachu.gif"),
    back: require("../assets/images/heroes/pikachu-back.gif"),
    sprite: require("../assets/images/heroes/pikachu-small.png"),
    moves: [1, 21, 22],
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
    moves: [1, 2, 8, 9, 10, 11, 12, 13],
    type_defenses: {
      normal: 1,
    }
  },
  {
    id: 3,
    label: "Batman",
    front: require(""),
    back: require(""),
    sprite: require(""),
    moves: [1, 2, 6, 7, 8],
    type_defenses: {
      normal: 1,
    }
  },
  {
    id: 4,
    label: "Superman",
    front: require(""),
    back: require(""),
    sprite: require(""),
    moves: [1, 2, 3, 4, 5],
    type_defenses: {
      normal: 1,
    }
  },
  {
    id: 5,
    label: "Darth Vader",
    front: require(""),
    back: require(""),
    sprite: require(""),
    moves: [9, 10, 11],
    type_defenses: {
      normal: 1,
    }
  },
  {
    id: 6,
    label: "Mario",
    front: require(""),
    back: require(""),
    sprite: require(""),
    moves: [1, 2, 12, 13, 14],
    type_defenses: {
      normal: 1,
    }
  },
  {
    id: 7,
    label: "Wolverine",
    front: require(""),
    back: require(""),
    sprite: require(""),
    moves: [1, 2, 15, 16, 17],
    type_defenses: {
      normal: 1,
    }
  },
  {
    id: 8,
    label: "Spiderman",
    front: require(""),
    back: require(""),
    sprite: require(""),
    moves: [1, 2, 18, 19, 20],
    type_defenses: {
      normal: 1,
    }
  },
  {
    id: 9,
    label: "Luke Skywalker",
    front: require(""),
    back: require(""),
    sprite: require(""),
    moves: [1, 9, 10],
    type_defenses: {
      normal: 1,
    }
  },
  {
    id: 10,
    label: "Master Chief",
    front: require(""),
    back: require(""),
    sprite: require(""),
    moves: [1, 2, 23, 24, 25],
    type_defenses: {
      normal: 1,
    }
  },
  {
    id: 11,
    label: "Sub-Zero",
    front: require(""),
    back: require(""),
    sprite: require(""),
    moves: [1, 2, 26, 27, 28],
    type_defenses: {
      normal: 1,
    }
  },
  {
    id: 12,
    label: "Predator",
    front: require(""),
    back: require(""),
    sprite: require(""),
    moves: [1, 2, 15. 29, 30],
    type_defenses: {
      normal: 1,
    }
  },
  {
    id: 13,
    label: "Alien",
    front: require(""),
    back: require(""),
    sprite: require(""),
    moves: [1, 22, 15, 31, 32],
    type_defenses: {
      normal: 1,
    }
  },
  {
    id: 14,
    label: "Scorpion",
    front: require(""),
    back: require(""),
    sprite: require(""),
    moves: [1, 2, 33, 34, 35],
    type_defenses: {
      normal: 1,
    }
  },
  {
    id: 15,
    label: "Wonder Woman",
    front: require(""),
    back: require(""),
    sprite: require(""),
    moves: [1, 2, 36, 37, 38],
    type_defenses: {
      normal: 1,
    }
  },
  {
    id: 16,
    label: "Samus",
    front: require(""),
    back: require(""),
    sprite: require(""),
    moves: [1, 2, 39, 40, 41],
    type_defenses: {
      normal: 1,
    }
  },
  {
    id: 17,
    label: "Sonic",
    front: require(""),
    back: require(""),
    sprite: require(""),
    moves: [1, 41, 42, 43],
    type_defenses: {
      normal: 1,
    }
  },
  {
    id: 18,
    label: "Solid Snake",
    front: require(""),
    back: require(""),
    sprite: require(""),
    moves: [1, 2, 24, 41, 45],
    type_defenses: {
      normal: 1,
    }
  },
  {
    id: 19,
    label: "Rambo",
    front: require(""),
    back: require(""),
    sprite: require(""),
    moves: [1, 2, 24, 46, 47],
    type_defenses: {
      normal: 1,
    }
  },
  {
    id: 20,
    label: "Charzard",
    front: require(""),
    back: require(""),
    sprite: require(""),
    moves: [48, 49, 50, 51, 52],
    type_defenses: {
      normal: 1,
    }
  },
  {
    id: 21,
    label: "T-800",
    front: require(""),
    back: require(""),
    sprite: require(""),
    moves: [1, 2, 40, 41, 46],
    type_defenses: {
      normal: 1,
    }
  },
  {
    id: 22,
    label: "Ken",
    front: require(""),
    back: require(""),
    sprite: require(""),
    moves: [1, 2, 53, 54, 55],
    type_defenses: {
      normal: 1,
    }
  },
  {
    id: 23,
    label: "Ryu",
    front: require(""),
    back: require(""),
    sprite: require(""),
    moves: [1, 2, 53, 54, 55],
    type_defenses: {
      normal: 1,
    }
  },
  {
    id: 24,
    label: "Zangief",
    front: require(""),
    back: require(""),
    sprite: require(""),
    moves: [1, 2, 56, 57, 58],
    type_defenses: {
      normal: 1,
    }
  },
  {
    id: 25,
    label: "Kitana",
    front: require(""),
    back: require(""),
    sprite: require(""),
    moves: [1, 2, 59, 60, 61],
    type_defenses: {
      normal: 1,
    }
  },
  {
    id: 26,
    label: "Mileena",
    front: require(""),
    back: require(""),
    sprite: require(""),
    moves: [1, 2, 62, 63, 64],
    type_defenses: {
      normal: 1,
    }
  },
  {
    id: 27,
    label: "Green Lantern",
    front: require(""),
    back: require(""),
    sprite: require(""),
    moves: [1, 2, 65, 66, 67],
    type_defenses: {
      normal: 1,
    }
  },
  {
    id: 28,
    label: "Princess Peach",
    front: require(""),
    back: require(""),
    sprite: require(""),
    moves: [1, 2, 68, 69, 70],
    type_defenses: {
      normal: 1,
    }
  },
  {
    id: 29,
    label: "Bowser",
    front: require(""),
    back: require(""),
    sprite: require(""),
    moves: [1, 2, 71, 72, 73],
    type_defenses: {
      normal: 1,
    }
  },
  {
    id: 30,
    label: "Luigi",
    front: require(""),
    back: require(""),
    sprite: require(""),
    moves: [1, 2, 12, 74, 75],
    type_defenses: {
      normal: 1,
    }
  }

];

export default hero_data;
