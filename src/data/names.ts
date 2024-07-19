const neutralNames: string[] = [  
  "Applesauce",
  "Bacon",
  "Bagel",
  "Bamboo",
  "Beanie",
  "Beans",
  "Binky",
  "Biscuit",
  "Bologna",
  "Brisket",
  "Brownie",
  "Bubbles",
  "Bug",
  "Bugaboo",
  "Bumbershoot",
  "Burger",
  "Burrito",
  "Butterbean",
  "Cannoli",
  "Cashew",
  "Cat",
  "Catatouille",
  "Catzilla",
  "Charms",
  "Cheddar",
  "Chickie Nuggie",
  "Chickpea",
  "Chiclet",
  "Chopstick",
  "Chorizo",
  "Chunk",
  "Churro",
  "Cilantro",
  "Clover",
  "Coleslaw",
  "Cornbread",
  "Croissant",
  "Crunch",
  "Custard",
  "Deep Dish",
  "Dijon",
  "Dingleberry",
  "Doodle",
  "Doodlebug",
  "Dorito",
  "Drumstick",
  "Dumpling",
  "Ember",
  "Enchilada",
  "Fajita",
  "Fidget",
  "Fishstick",
  "Fluffernutter",
  "Fluffykins",
  "Fluffypants",
  "Fudge",
  "Gadget",
  "Gnocchi",
  "Grumpy",
  "Hibachi",
  "Jellybean",
  "Kerfluffle",
  "Kielbasa",
  "Kitkat",
  "Kitty",
  "Koosh",
  "Koozie",
  "Kumquat",
  "Laravel",
  "Lemon",
  "Lucky",
  "Macaroni",
  "Mango",
  "Marzipan",
  "Meatball",
  "Melon",
  "Mittens",
  "Mochi",
  "Mouser",
  "Muffin",
  "Munch",
  "Noodle",
  "Nugget",
  "Nurdle",
  "Oatmeal",
  "Omelet",
  "PJ",
  "Panda",
  "Papaya",
  "Peanut",
  "Pecan",
  "Pepino",
  "Pepper",
  "Pepperoni",
  "Pickles",
  "Pierogi",
  "Pigeon",
  "Piggy",
  "Pimiento",
  "Pinto",
  "Pistachio",
  "Pizza Roll",
  "Pork Chop",
  "Pretzel",
  "Pringles",
  "Pudding",
  "Puddy",
  "Puffs",
  "Pumpkin",
  "Quark",
  "Quesadilla",
  "Quiche",
  "Quinoa",
  "Quokka",
  "Radicchio",
  "Ramekin",
  "Ramen",
  "Ravioli",
  "Rhubarb",
  "Rigatoni",
  "Riley",
  "Risotto",
  "Sashimi",
  "Scampi",
  "Shank",
  "Shorty",
  "Shrimp",
  "Skillet",
  "Skittles",
  "Snickerdoodle",
  "Snickers",
  "Snoogums",
  "Snuffles",
  "Snuggles",
  "Socks",
  "Sparky",
  "Spot",
  "Squeaker",
  "Sriracha",
  "Strudel",
  "Stuffed Crust",
  "Suds",
  "Sushi",
  "Taco",
  "Tacocat",
  "Tamale",
  "Tapioca",
  "Tater",
  "Tater Salad",
  "Tater Tot",
  "Teriyaki",
  "Tiger",
  "Tiny",
  "Tiramisu",
  "Toad",
  "Tortellini",
  "Tubbs",
  "Turkey",
  "Tweeker",
  "Twinkie",
  "Twinkles",
  "Viper",
  "Voodoo",
  "Waffles",
  "Walnut",
  "Wasabi",
  "Weasel",
  "Whiskers",
  "Widget",
  "Wombat",
  "Wumpus",
  "Xanax",
  "Yam",
  "Yo-Yo",
  "Yodel",
  "Zamboni",
  "Zeppelin",
  "Zipper",
  "Zucchini"
];

const femaleNames: string[] = [  
  "Alanis",
  "Alicent",
  "Alys",
  "Amanda",
  "Amber",
  "Andromeda",
  "Aura",
  "Ariel",
  "Arwen",
  "Arya",
  "Asha",
  "Athena",
  "Baby Cakes",
  "Baby Girl",
  "Baela",
  "Beezus",
  "Bernadette",
  "Bette",
  "Betty",
  "Billie",
  "Bridgette",
  "Brienne",
  "Buffy",
  "Bunny",
  "Calliope",
  "Candy",
  "Caramel",
  "Catelyn",
  "Catrice",
  "Catricia",
  "Cayla",
  "Celeste",
  "Cersei",
  "Chanin",
  "Charlotte",
  "Cheri",
  "Cherry",
  "Chloe",
  "Chonkarella",
  "Christin",
  "Cindy",
  "Clementine",
  "Cleo",
  "Cleocatra",
  "Cookie",
  "Daenerys",
  "Daisy",
  "Daphne",
  "Daria",
  "Diva",
  "Dolly",
  "Dreamfyre",
  "Drizella",
  "Eliana",
  "Ellaria",
  "Feline Dion",
  "Finch",
  "Fiona",
  "Florence",
  "Gaga",
  "Galadriel",
  "Gidget",
  "Gilly",
  "Ginger",
  "Goldie",
  "Goldie",
  "Hazel",
  "Helaena",
  "Hermione",
  "Imogen",
  "Isobel",
  "Jahaera",
  "Janie",
  "Jasmine",
  "Jinja",
  "Jinxie",
  "Jolene",
  "Kanga",
  "Katniss",
  "Khaleesi",
  "Kimberly",
  "Kitana",
  "Kitty",
  "Kiwi",
  "Ladybug",
  "Leeloo",
  "Leia",
  "Lia",
  "Lily",
  "Lizzy",
  "Lucy",
  "Lyanna",
  "Madonna",
  "Maeve",
  "Maleficent",
  "Margaery",
  "Marie",
  "Marigold",
  "Marlette",
  "Medusa",
  "Meera",
  "Meleys",
  "Melisandre",
  "Meowna Lisa",
  "Meownica",
  "Meraxes",
  "Mercedes",
  "Midge",
  "Mileena",
  "Millie",
  "Minnie",
  "Missandei",
  "Missy",
  "Misty",
  "Myrcella",
  "Myssaria",
  "Nala",
  "Nissa",
  "Nutella",
  "Nymeria",
  "Obara",
  "Olenna",
  "Olive",
  "Osha",
  "Pandora",
  "Pawlina",
  "Pele",
  "Penelope",
  "Phoebe",
  "Piper",
  "Pixie",
  "Polly Jean",
  "Pookie",
  "Precious",
  "Purrscilla",
  "Purrsephone",
  "Quaithe",
  "Queenie",
  "Rasputina",
  "Regina",
  "Rhaena",
  "Rhaenyra",
  "Rhaenys",
  "Salchicha",
  "Salsa",
  "Sansa",
  "Sasha",
  "Selyse",
  "Shakira",
  "Sheeva",
  "Shireen",
  "Shishka",
  "Sonya",
  "Stacy",
  "Syrax",
  "Tabbytha",
  "Talula",
  "Tessarion",
  "Tia",
  "Tilly",
  "Tina",
  "Tinkerbell",
  "Tootsie",
  "Tori",
  "Trixie",
  "Uma",
  "Ursula",
  "Venus",
  "Vhagar",
  "Visenya",
  "Willow",
  "Winnie",
  "Xena",
  "Yara",
  "Yasmin",
  "Ygritte",
  "Yuki",
  "Zelda"
];

const maleNames: string[] = [  
  "Ace",
  "Adam",
  "Aegon",
  "Aemond",
  "Alejandro",
  "Anakin",
  "Aragorn",
  "Arrax",
  "Baelon",
  "Baelor",
  "Bagheera",
  "Balerion",
  "Bandit",
  "Banjo",
  "Banksy",
  "Bartholomew",
  "Beavis",
  "Beefaroni",
  "Beric",
  "Bill",
  "Bob",
  "Bobby B",
  "Boomhauer",
  "Bootsy",
  "Boromir",
  "Bowie",
  "Bowser",
  "Boyardee",
  "Brandon",
  "Brynden",
  "Bubba",
  "Bubs",
  "Buddy",
  "Bugsy",
  "Butters",
  "Buttley",
  "Buzz",
  "Caraxes",
  "Carlos",
  "Casper",
  "Catrick",
  "Catt Damon",
  "Catthew",
  "Chairman Meow",
  "Cheech",
  "Cheshire",
  "Chester",
  "Chingy",
  "Cletus",
  "Clifford",
  "Clyde",
  "Corky",
  "Corlys",
  "Cornholio",
  "Cosmo",
  "Crunchwrap",
  "Daario",
  "Daemon",
  "Daeron",
  "Davos",
  "Dewey",
  "Django",
  "Djarin",
  "Dongle",
  "Draco",
  "Drogo",
  "Ducky",
  "Earl",
  "Eddard",
  "Eduardo",
  "Elmo",
  "Elrond",
  "Euron",
  "Falkor",
  "Felix",
  "Frito",
  "Frodo",
  "Gandalf",
  "Garfield",
  "Gary",
  "George",
  "Ghost",
  "Gimli",
  "Gizmo",
  "Goblin",
  "Gonzo",
  "Goober",
  "Grogu",
  "Guppy",
  "Gus",
  "Ham Hock",
  "Hambone",
  "Hamlet",
  "Harley",
  "Heathcliff",
  "Henri",
  "Hobbes",
  "Homer",
  "Hot Pie",
  "Jacaerys",
  "Jackson",
  "Jahaerys",
  "Jaime",
  "Jawn",
  "Jax",
  "Jerry",
  "Jiminy",
  "Jims",
  "Joffrey",
  "Jojen",
  "Jorah",
  "Jorge",
  "Kermit",
  "Kevin",
  "Kubernetes",
  "Larry",
  "Legolas",
  "Leonardo DiCatrio",
  "Lewis",
  "Linus",
  "Little Man",
  "Logan",
  "Louie",
  "Lucerys",
  "Lucifer",
  "Luigi",
  "Mando",
  "Mario",
  "Martell",
  "Marvin",
  "Mason",
  "McChonk",
  "McLovin",
  "Meatwad",
  "Meowtthew",
  "Mongo",
  "Montell",
  "Mufasa",
  "Mushroom",
  "Ned",
  "Nortie",
  "Nutball",
  "O'Malley",
  "Oberyn",
  "Olly",
  "Omar",
  "Otto",
  "Pascal",
  "Pasquale",
  "Pawl",
  "Pedro",
  "Picard",
  "Pico de Gato",
  "Pip",
  "Purrcival",
  "Quentyn",
  "Raiden",
  "Randall",
  "Rasputin",
  "Reebel",
  "Remy",
  "Renly",
  "Reznor",
  "Rhaegar",
  "Rico",
  "Rocky",
  "Roo",
  "Rufus",
  "Salami",
  "Salem",
  "Samwell",
  "Samwise",
  "Sausage",
  "Scooter",
  "Sebastian",
  "Ser Pounce",
  "Simba",
  "Sir Pounce-a-Lot",
  "Sirloin",
  "Smokey",
  "Snoop Catt",
  "Soren",
  "Spock",
  "Spud",
  "Stannis",
  "Stewie",
  "Stuart",
  "Sunfyre",
  "Sylvester",
  "Syrio",
  "T-Bone",
  "Tank",
  "Thom",
  "Tigger",
  "Titan",
  "Titus",
  "Tolkien",
  "Tommen",
  "Tony",
  "Toonces",
  "Toots",
  "Triton",
  "Troy",
  "Tum-Tum",
  "Tyrion",
  "Tyrone",
  "Tywin",
  "Ulysses",
  "Umber",
  "Usher",
  "Vader",
  "Vermax",
  "Vermithor",
  "Viserion",
  "Viserys",
  "Vizzy T",
  "Waldo",
  "Waluigi",
  "Wario",
  "Winston",
  "Woody",
  "Worf",
  "Yoda",
  "Yoshi",
  "Yuri",
  "Zack",
  "Zaldrizes",
  "Ziggy"
];

export { neutralNames, femaleNames, maleNames };
