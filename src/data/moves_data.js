const moves_data = [
  {
    id: 1,
    title: "Kick",
    power: 30,
    type: "normal",
    is_first: true
  },
  {
    id: 2,
    title: "Punch",
    power: 30,
    type: "normal"
  },
  {
    id: 3,
    title: "Heat Vision",
    power: 55,
    type: "energy"
  },
  {
    id: 4,
    title: "Inhale Capture",
    power: 45,
    type: "immobilize"
  },
  {
    id: 5,
    title: "Up, Up and Away",
    power: 70,
    type: "flying"
  },
  {
    id: 6,
    title: "Batarang",
    power: 55,
    type: "weapon"
  },
  {
    id: 7,
    title: "Smoke Escape",
    power: 10,
    type: "evade"
  },
  {
    id: 8,
    title: "Grappling Hook",
    power: 40,
    type: "immobilize"
  },
  {
    id: 9,
    title: "Lightsaber Attack",
    power: 50,
    type: "weapon"
  },
  {
    id: 10,
    title: "Force Push",
    power: 35,
    type: "magic"
  },
  {
    id: 11,
    title: "Force Choke",
    power: 75,
    type: "magic"
  },
  {
    id: 12,
    title: "Fireball",
    power: 60,
    type: "fire"
  },
  {
    id: 13,
    title: "Cape",
    power: 40,
    type: "clothing"
  },
  {
    id: 14,
    title: "Super Jump Punch",
    power: 55,
    type: "normal"
  },
  {
    id: 15,
    title: "Claw Slash",
    power: 55,
    type: "weapon"
  },
  {
    id: 16,
    title: "Weapon X",
    power: 80,
    type: "weapon"
  },
  {
    id: 17,
    title: "Berserker Charge",
    power: 75,
    type: "normal"
  },
  {
    id: 18,
    title: "Web Throw",
    power: 30,
    type: "immobilize"
  },
  {
    id: 19,
    title: "Spider Bite",
    power: 60,
    type: "normal"
  },
  {
    id: 20,
    title: "Spider Sting",
    power: 75,
    type: "normal"
  },
  {
    id: 21,
    title: "Thunder Shock",
    power: 80,
    type: "electric"
  },
  {
    id: 22,
    title: "Tail Whip",
    power: 40,
    type: "normal"
  },
  {
    id: 23,
    title: "Burst Fire",
    power: 65,
    type: "weapon"
  },
  {
    id: 24,
    title: "Throw Grenade",
    power: 85,
    type: "weapon"
  },
  {
    id: 25,
    title: "Weapon Bash",
    power: 50,
    type: "weapon"
  },
  {
    id: 26,
    title: "Ice Freeze",
    power: 45,
    type: "immobilize"
  },
  {
    id: 27,
    title: "Ice Ball",
    power: 65,
    type: "ice"
  },
  {
    id: 28,
    title: "Frigid Storm",
    power: 85,
    type: "ice"
  },
  {
    id: 29,
    title: "Shoulder Cannon Blast",
    power: 75,
    type: "weapon"
  },
  {
    id: 30,
    title: "Smart Disc",
    power: 60,
    type: "weapon"
  },
  {
    id: 31,
    title: "Xeno Strike",
    power: 75,
    type: "normal"
  },
  {
    id: 32,
    title: "Acid Spit",
    power: 55,
    type: "acidic"
  },
  {
    id: 33,
    title: "Hellfire",
    power: 65,
    type: "fire"
  },
  {
    id: 34,
    title: "Kunai Throw",
    power: 50,
    type: "weapon"
  },
  {
    id: 35,
    title: "Teleport Punch",
    power: 45,
    type: "normal"
  },
  {
    id: 36,
    title: "Lasso of Truth",
    power: 55,
    type: "weapon"
  },
  {
    id: 37,
    title: "Shield Toss",
    power: 50,
    type: "weapon"
  },
  {
    id: 38,
    title: "Amalthea Bash",
    power: 65,
    type: "weapon"
  },
  {
    id: 39,
    title: "Zero Laser",
    power: 55,
    type: "weapon"
  },
  {
    id: 40,
    title: "Bomb",
    power: 80,
    type: "weapon"
  },
  {
    id: 41,
    title: "Missle",
    power: 60,
    type: "weapon"
  },
  {
    id: 42,
    title: "Homing Attack",
    power: 70,
    type: "normal"
  },
  {
    id: 43,
    title: "Spin Dash",
    power: 60,
    type: "normal"
  },
  {
    id: 44,
    title: "Spring Jump",
    power: 55,
    type: "normal"
  },
  {
    id: 45,
    title: "C4",
    power: 85,
    type: "weapon"
  },
  {
    id: 46,
    title: "Machine Gun",
    power: 65,
    type: "weapon"
  },
  {
    id: 47,
    title: "Bow and Arrow",
    power: 70,
    type: "weapon"
  },
  {
    id: 48,
    title: "Dragon Breath",
    power: 60,
    type: "dragon"
  },
  {
    id: 49,
    title: "Flamethrower",
    power: 90,
    type: "fire"
  },
  {
    id: 50,
    title: "Ember",
    power: 40,
    type: "fire"
  },
  {
    id: 51,
    title: "Inferno",
    power: 100,
    type: "fire"
  },
  {
    id: 52,
    title: "slash",
    power: 70,
    type: "normal"
  },
  {
    id: 53,
    title: "Hadouken",
    power: 70,
    type: "magic"
  },
  {
    id: 54,
    title: "Shoryuken",
    power: 55,
    type: "weapon"
  },
  {
    id: 55,
    title: "Tatsumaki Senpukyaku",
    power: 80,
    type: "normal"
  },
  {
    id: 56,
    title: "Double Lariat",
    power: 70,
    type: "normal"
  },
  {
    id: 57,
    title: "Siberian Express",
    power: 80,
    type: "normal"
  },
  {
    id: 58,
    title: "Borscht Dynamite",
    power: 85,
    type: "normal"
  },
  {
    id: 59,
    title: "Fan Toss",
    power: 60,
    type: "weapon"
  },
  {
    id: 60,
    title: "Cutting Fan",
    power: 70,
    type: "normal"
  },
  {
    id: 61,
    title: "Pretty Kick",
    power: 75,
    type: "normal"
  },
  {
    id: 62,
    title: "Man Eater",
    power: 85,
    type: "normal"
  },
  {
    id: 63,
    title: "Sai Stabs",
    power: 75,
    type: "weapon"
  },
  {
    id: 64,
    title: "Ball Roll",
    power: 70,
    type: "normal"
  },
  {
    id: 65,
    title: "Oa’s Rocket",
    power: 70,
    type: "normal"
  },
  {
    id: 66,
    title: "Lantern’s Might",
    power: 80,
    type: "weapon"
  },
  {
    id: 67,
    title: "Turbine Smash",
    power: 75,
    type: "normal"
  },
  {
    id: 68,
    title: "Peach Blossom",
    power: 75,
    type: "normal"
  },
  {
    id: 69,
    title: "Toad",
    power: 70,
    type: "weapon"
  },
  {
    id: 70,
    title: "Peach Bomber",
    power: 80,
    type: "normal"
  },
  {
    id: 71,
    title: "Fire Breath",
    power: 65,
    type: "fire"
  },
  {
    id: 72,
    title: "Flying Slam",
    power: 75,
    type: "flying"
  },
  {
    id: 73,
    title: "Giga Bowser Punch",
    power: 85,
    type: "normal"
  },
  {
    id: 74,
    title: "Green Missle",
    power: 70,
    type: "fire"
  },
  {
    id: 75,
    title: "Luigi Cyclone",
    power: 85,
    type: "flying"
  }
];

export default moves_data;
