import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: 'app/my-app.html',
})

let companies = [
  {
    "name": "Plasmos",
    "flags": [
      "flower",
      "heart",
      "sun",
      "flash"
    ]
  },
  {
    "name": "Automon",
    "flags": [
      "flower",
      "heart",
      "flash"
    ]
  },
  {
    "name": "Permadyne",
    "flags": [
      "flower"
    ]
  },
  {
    "name": "Entropix",
    "flags": []
  },
  {
    "name": "Cyclonica",
    "flags": [
      "flower",
      "sun",
      "flash"
    ]
  },
  {
    "name": "Koogle",
    "flags": [
      "flower",
      "heart",
      "flash"
    ]
  },
  {
    "name": "Exospace",
    "flags": [
      "flower",
      "heart",
      "flash"
    ]
  },
  {
    "name": "Zytrac",
    "flags": [
      "flower",
      "sun",
      "flash"
    ]
  },
  {
    "name": "Essensia",
    "flags": [
      "flower"
    ]
  },
  {
    "name": "Cosmosis",
    "flags": [
      "flower",
      "sun",
      "flash"
    ]
  },
  {
    "name": "Quadeebo",
    "flags": [
      "flower",
      "heart",
      "sun"
    ]
  },
  {
    "name": "Anocha",
    "flags": [
      "sun",
      "flash"
    ]
  },
  {
    "name": "Orbalix",
    "flags": [
      "flower",
      "flash"
    ]
  },
  {
    "name": "Telepark",
    "flags": [
      "flash"
    ]
  },
  {
    "name": "Enquility",
    "flags": [
      "sun"
    ]
  },
  {
    "name": "Avenetro",
    "flags": [
      "flash"
    ]
  },
  {
    "name": "Vidto",
    "flags": []
  },
  {
    "name": "Fuelton",
    "flags": [
      "sun"
    ]
  },
  {
    "name": "Pyramia",
    "flags": [
      "sun",
      "flash"
    ]
  },
  {
    "name": "Proflex",
    "flags": [
      "flower",
      "flash"
    ]
  },
  {
    "name": "Squish",
    "flags": [
      "flower",
      "heart",
      "flash"
    ]
  },
  {
    "name": "Rugstars",
    "flags": [
      "flower",
      "heart",
      "flash"
    ]
  },
  {
    "name": "Boilicon",
    "flags": [
      "flower",
      "sun",
      "flash"
    ]
  },
  {
    "name": "Suremax",
    "flags": [
      "heart",
      "flash"
    ]
  },
  {
    "name": "Zidant",
    "flags": [
      "flower",
      "heart",
      "flash"
    ]
  },
  {
    "name": "Xsports",
    "flags": [
      "heart",
      "flash"
    ]
  },
  {
    "name": "Metroz",
    "flags": [
      "heart",
      "flash"
    ]
  },
  {
    "name": "Conjurica",
    "flags": [
      "flower",
      "heart",
      "sun"
    ]
  },
  {
    "name": "Decratex",
    "flags": [
      "sun"
    ]
  },
  {
    "name": "Calcu",
    "flags": [
      "heart",
      "sun"
    ]
  },
  {
    "name": "Magmina",
    "flags": [
      "flower",
      "heart",
      "flash"
    ]
  },
  {
    "name": "Comvey",
    "flags": [
      "flower",
      "sun"
    ]
  },
  {
    "name": "Lotron",
    "flags": [
      "flower",
      "flash"
    ]
  },
  {
    "name": "Comtrak",
    "flags": [
      "flower",
      "heart",
      "flash"
    ]
  },
  {
    "name": "Terragen",
    "flags": [
      "heart",
      "flash"
    ]
  },
  {
    "name": "Datacator",
    "flags": [
      "flower",
      "flash"
    ]
  },
  {
    "name": "Exotechno",
    "flags": [
      "sun"
    ]
  },
  {
    "name": "Exozent",
    "flags": [
      "flower",
      "flash"
    ]
  },
  {
    "name": "Chorizon",
    "flags": [
      "heart"
    ]
  },
  {
    "name": "Eplosion",
    "flags": [
      "flower",
      "heart",
      "flash"
    ]
  },
  {
    "name": "Tetak",
    "flags": [
      "sun"
    ]
  },
  {
    "name": "Beadzza",
    "flags": [
      "flower"
    ]
  },
  {
    "name": "Aeora",
    "flags": [
      "sun",
      "flash"
    ]
  },
  {
    "name": "Geeknet",
    "flags": [
      "heart",
      "sun"
    ]
  },
  {
    "name": "Quordate",
    "flags": [
      "flower"
    ]
  },
  {
    "name": "Idealis",
    "flags": [
      "heart"
    ]
  },
  {
    "name": "Lunchpad",
    "flags": [
      "flower",
      "flash"
    ]
  },
  {
    "name": "Newcube",
    "flags": [
      "flower"
    ]
  },
  {
    "name": "Wrapture",
    "flags": [
      "flower",
      "sun",
      "flash"
    ]
  },
  {
    "name": "Geekwagon",
    "flags": [
      "flower",
      "heart",
      "flash"
    ]
  },
  {
    "name": "Zaggles",
    "flags": [
      "heart",
      "flash"
    ]
  },
  {
    "name": "Opticom",
    "flags": [
      "sun"
    ]
  },
  {
    "name": "Buzzworks",
    "flags": [
      "flower",
      "flash"
    ]
  },
  {
    "name": "Liquidoc",
    "flags": [
      "flower",
      "heart",
      "sun"
    ]
  },
  {
    "name": "Iplax",
    "flags": [
      "flower",
      "heart",
      "flash"
    ]
  },
  {
    "name": "Quizka",
    "flags": [
      "heart",
      "flash"
    ]
  },
  {
    "name": "Zentix",
    "flags": [
      "flower",
      "heart",
      "sun",
      "flash"
    ]
  },
  {
    "name": "Insource",
    "flags": [
      "flower",
      "sun",
      "flash"
    ]
  },
  {
    "name": "Bezal",
    "flags": [
      "flower",
      "heart"
    ]
  },
  {
    "name": "Zillatide",
    "flags": [
      "flash"
    ]
  },
  {
    "name": "Halap",
    "flags": [
      "flower",
      "heart"
    ]
  },
  {
    "name": "Sonique",
    "flags": [
      "flower",
      "sun",
      "flash"
    ]
  },
  {
    "name": "Combogene",
    "flags": [
      "flower",
      "flash"
    ]
  },
  {
    "name": "Netplax",
    "flags": [
      "sun",
      "flash"
    ]
  },
  {
    "name": "Comvoy",
    "flags": [
      "flower",
      "heart",
      "flash"
    ]
  },
  {
    "name": "Earwax",
    "flags": [
      "heart"
    ]
  },
  {
    "name": "Bytrex",
    "flags": [
      "flower",
      "heart",
      "sun",
      "flash"
    ]
  },
  {
    "name": "Firewax",
    "flags": [
      "flower",
      "flash"
    ]
  },
  {
    "name": "Quizmo",
    "flags": [
      "flower",
      "sun"
    ]
  },
  {
    "name": "Quonk",
    "flags": [
      "heart",
      "flash"
    ]
  },
  {
    "name": "Ohmnet",
    "flags": [
      "sun",
      "flash"
    ]
  },
  {
    "name": "Songlines",
    "flags": [
      "flower",
      "heart"
    ]
  },
  {
    "name": "Marqet",
    "flags": [
      "flash"
    ]
  },
  {
    "name": "Musaphics",
    "flags": [
      "flower",
      "sun",
      "flash"
    ]
  },
  {
    "name": "Rodemco",
    "flags": [
      "heart",
      "sun",
      "flash"
    ]
  },
  {
    "name": "Isoswitch",
    "flags": [
      "flower",
      "sun"
    ]
  },
  {
    "name": "Kenegy",
    "flags": [
      "flower",
      "sun"
    ]
  },
  {
    "name": "Myopium",
    "flags": [
      "flower",
      "sun",
      "flash"
    ]
  },
  {
    "name": "Kongene",
    "flags": [
      "heart",
      "flash"
    ]
  },
  {
    "name": "Gology",
    "flags": []
  },
  {
    "name": "Opticall",
    "flags": [
      "heart",
      "sun",
      "flash"
    ]
  },
  {
    "name": "Bitendrex",
    "flags": [
      "flower"
    ]
  },
  {
    "name": "Tersanki",
    "flags": [
      "heart",
      "flash"
    ]
  },
  {
    "name": "Signity",
    "flags": [
      "sun"
    ]
  },
  {
    "name": "Kongle",
    "flags": []
  },
  {
    "name": "Mediot",
    "flags": [
      "heart",
      "flash"
    ]
  },
  {
    "name": "Mantro",
    "flags": [
      "sun",
      "flash"
    ]
  },
  {
    "name": "Sultrax",
    "flags": []
  },
  {
    "name": "Tsunamia",
    "flags": [
      "heart",
      "sun",
      "flash"
    ]
  },
  {
    "name": "Slax",
    "flags": [
      "flower",
      "heart",
      "sun"
    ]
  },
  {
    "name": "Fortean",
    "flags": [
      "flower",
      "sun"
    ]
  },
  {
    "name": "Geekology",
    "flags": [
      "flower",
      "heart"
    ]
  },
  {
    "name": "Ronelon",
    "flags": [
      "flower",
      "sun",
      "flash"
    ]
  },
  {
    "name": "Buzzopia",
    "flags": [
      "flower",
      "sun",
      "flash"
    ]
  },
  {
    "name": "Tubalum",
    "flags": [
      "flower",
      "heart",
      "flash"
    ]
  },
  {
    "name": "Vertide",
    "flags": [
      "flower",
      "sun"
    ]
  },
  {
    "name": "Stockpost",
    "flags": [
      "flower",
      "heart",
      "sun",
      "flash"
    ]
  },
  {
    "name": "Retrack",
    "flags": []
  },
  {
    "name": "Intergeek",
    "flags": [
      "heart",
      "sun",
      "flash"
    ]
  },
  {
    "name": "Tingles",
    "flags": [
      "flower",
      "sun"
    ]
  }
];

let cities = [
  {
    "name": "Sattley",
    "flags": [
      "flower",
      "sun"
    ]
  },
  {
    "name": "Elizaville",
    "flags": [
      "flower"
    ]
  },
  {
    "name": "Tilden",
    "flags": [
      "sun"
    ]
  },
  {
    "name": "Rockhill",
    "flags": [
      "flower",
      "heart"
    ]
  },
  {
    "name": "Tecolotito",
    "flags": [
      "heart",
      "sun"
    ]
  },
  {
    "name": "Eggertsville",
    "flags": [
      "sun",
      "flash"
    ]
  },
  {
    "name": "Sims",
    "flags": [
      "sun",
      "flash"
    ]
  },
  {
    "name": "Crenshaw",
    "flags": [
      "sun",
      "flash"
    ]
  },
  {
    "name": "Kersey",
    "flags": [
      "flower"
    ]
  },
  {
    "name": "Jamestown",
    "flags": [
      "heart",
      "flash"
    ]
  },
  {
    "name": "Wyoming",
    "flags": [
      "heart"
    ]
  },
  {
    "name": "Aurora",
    "flags": [
      "heart",
      "sun"
    ]
  },
  {
    "name": "Edgar",
    "flags": [
      "flower",
      "sun"
    ]
  },
  {
    "name": "Torboy",
    "flags": [
      "flower",
      "heart"
    ]
  },
  {
    "name": "Clay",
    "flags": [
      "flower",
      "flash"
    ]
  },
  {
    "name": "Venice",
    "flags": [
      "flower",
      "heart",
      "sun",
      "flash"
    ]
  },
  {
    "name": "Malott",
    "flags": [
      "sun"
    ]
  },
  {
    "name": "Gardners",
    "flags": [
      "sun",
      "flash"
    ]
  },
  {
    "name": "Woodlake",
    "flags": [
      "flower",
      "heart",
      "sun",
      "flash"
    ]
  },
  {
    "name": "Mathews",
    "flags": [
      "sun"
    ]
  },
  {
    "name": "Darlington",
    "flags": [
      "sun"
    ]
  },
  {
    "name": "Highland",
    "flags": [
      "flower",
      "heart"
    ]
  },
  {
    "name": "Gulf",
    "flags": [
      "heart"
    ]
  },
  {
    "name": "Blanco",
    "flags": [
      "flower",
      "heart",
      "sun"
    ]
  },
  {
    "name": "Ruffin",
    "flags": [
      "flower",
      "heart",
      "sun"
    ]
  },
  {
    "name": "Kerby",
    "flags": [
      "heart",
      "sun"
    ]
  },
  {
    "name": "Chemung",
    "flags": [
      "flower",
      "sun",
      "flash"
    ]
  },
  {
    "name": "Laurelton",
    "flags": [
      "flash"
    ]
  },
  {
    "name": "Brogan",
    "flags": [
      "flower",
      "sun"
    ]
  },
  {
    "name": "Williams",
    "flags": [
      "heart",
      "flash"
    ]
  },
  {
    "name": "Bawcomville",
    "flags": [
      "flower"
    ]
  },
  {
    "name": "Caledonia",
    "flags": [
      "flower",
      "flash"
    ]
  },
  {
    "name": "Dale",
    "flags": [
      "flower",
      "sun"
    ]
  },
  {
    "name": "Manitou",
    "flags": [
      "flower",
      "sun"
    ]
  },
  {
    "name": "Wildwood",
    "flags": [
      "flower",
      "sun",
      "flash"
    ]
  },
  {
    "name": "Homeworth",
    "flags": [
      "flower",
      "sun"
    ]
  },
  {
    "name": "Lafferty",
    "flags": [
      "sun"
    ]
  },
  {
    "name": "Joppa",
    "flags": []
  },
  {
    "name": "Brandermill",
    "flags": [
      "flower",
      "heart",
      "sun",
      "flash"
    ]
  },
  {
    "name": "Lavalette",
    "flags": [
      "flower",
      "heart",
      "sun",
      "flash"
    ]
  },
  {
    "name": "Linganore",
    "flags": []
  },
  {
    "name": "Saranap",
    "flags": [
      "sun"
    ]
  },
  {
    "name": "Neibert",
    "flags": [
      "sun",
      "flash"
    ]
  },
  {
    "name": "Cobbtown",
    "flags": [
      "flower",
      "heart",
      "sun",
      "flash"
    ]
  },
  {
    "name": "Walton",
    "flags": [
      "flower",
      "sun",
      "flash"
    ]
  },
  {
    "name": "Graball",
    "flags": [
      "sun",
      "flash"
    ]
  },
  {
    "name": "Bowmansville",
    "flags": [
      "flower",
      "heart",
      "sun"
    ]
  },
  {
    "name": "Fresno",
    "flags": [
      "sun"
    ]
  },
  {
    "name": "Chaparrito",
    "flags": [
      "flash"
    ]
  },
  {
    "name": "Berwind",
    "flags": [
      "flower",
      "heart"
    ]
  },
  {
    "name": "Haena",
    "flags": [
      "sun"
    ]
  },
  {
    "name": "Websterville",
    "flags": [
      "flower",
      "heart"
    ]
  },
  {
    "name": "Stagecoach",
    "flags": [
      "flower",
      "heart"
    ]
  },
  {
    "name": "Breinigsville",
    "flags": [
      "flower",
      "sun"
    ]
  },
  {
    "name": "Sparkill",
    "flags": [
      "heart",
      "sun",
      "flash"
    ]
  },
  {
    "name": "Terlingua",
    "flags": [
      "flower",
      "flash"
    ]
  },
  {
    "name": "Faxon",
    "flags": [
      "flower",
      "sun"
    ]
  },
  {
    "name": "Eastvale",
    "flags": [
      "sun",
      "flash"
    ]
  },
  {
    "name": "Cressey",
    "flags": [
      "flower",
      "heart",
      "sun",
      "flash"
    ]
  },
  {
    "name": "Brady",
    "flags": [
      "sun"
    ]
  },
  {
    "name": "Hiko",
    "flags": [
      "flower",
      "flash"
    ]
  },
  {
    "name": "Movico",
    "flags": [
      "flower",
      "heart",
      "flash"
    ]
  },
  {
    "name": "Lupton",
    "flags": [
      "flash"
    ]
  },
  {
    "name": "Fairhaven",
    "flags": [
      "heart",
      "flash"
    ]
  },
  {
    "name": "Wollochet",
    "flags": [
      "flower",
      "heart",
      "flash"
    ]
  },
  {
    "name": "Greenfields",
    "flags": [
      "flower",
      "heart",
      "sun"
    ]
  },
  {
    "name": "Hackneyville",
    "flags": [
      "flower",
      "heart",
      "sun"
    ]
  },
  {
    "name": "Emison",
    "flags": [
      "flower"
    ]
  },
  {
    "name": "Morningside",
    "flags": [
      "sun",
      "flash"
    ]
  },
  {
    "name": "Marenisco",
    "flags": []
  },
  {
    "name": "Clinton",
    "flags": [
      "flower",
      "flash"
    ]
  },
  {
    "name": "Bendon",
    "flags": [
      "flower",
      "sun",
      "flash"
    ]
  },
  {
    "name": "Mayfair",
    "flags": [
      "heart",
      "sun"
    ]
  },
  {
    "name": "Kieler",
    "flags": []
  },
  {
    "name": "Blue",
    "flags": [
      "flower",
      "sun"
    ]
  },
  {
    "name": "Boling",
    "flags": [
      "flower",
      "heart",
      "sun"
    ]
  },
  {
    "name": "Eastmont",
    "flags": [
      "flower"
    ]
  },
  {
    "name": "Dyckesville",
    "flags": [
      "flower",
      "heart"
    ]
  },
  {
    "name": "Sisquoc",
    "flags": [
      "heart",
      "sun",
      "flash"
    ]
  },
  {
    "name": "Brookfield",
    "flags": [
      "flash"
    ]
  },
  {
    "name": "Bartonsville",
    "flags": [
      "heart"
    ]
  },
  {
    "name": "Gratton",
    "flags": [
      "heart",
      "flash"
    ]
  },
  {
    "name": "Nescatunga",
    "flags": [
      "flower",
      "flash"
    ]
  },
  {
    "name": "Helen",
    "flags": [
      "sun",
      "flash"
    ]
  },
  {
    "name": "Brambleton",
    "flags": [
      "flower",
      "heart",
      "flash"
    ]
  },
  {
    "name": "Rockingham",
    "flags": [
      "flash"
    ]
  },
  {
    "name": "Bakersville",
    "flags": []
  },
  {
    "name": "Weeksville",
    "flags": [
      "flower",
      "sun",
      "flash"
    ]
  },
  {
    "name": "Lookingglass",
    "flags": [
      "flower"
    ]
  },
  {
    "name": "Collins",
    "flags": [
      "flower",
      "heart",
      "flash"
    ]
  },
  {
    "name": "Dunlo",
    "flags": [
      "flower",
      "flash"
    ]
  },
  {
    "name": "Winfred",
    "flags": [
      "sun",
      "flash"
    ]
  },
  {
    "name": "Vale",
    "flags": [
      "flower",
      "heart",
      "sun",
      "flash"
    ]
  },
  {
    "name": "Hoagland",
    "flags": [
      "flower"
    ]
  },
  {
    "name": "Savannah",
    "flags": []
  },
  {
    "name": "Nord",
    "flags": [
      "flower",
      "heart"
    ]
  },
  {
    "name": "Lynn",
    "flags": [
      "heart",
      "flash"
    ]
  },
  {
    "name": "Newcastle",
    "flags": []
  },
  {
    "name": "Lowgap",
    "flags": [
      "heart",
      "flash"
    ]
  },
  {
    "name": "Rew",
    "flags": [
      "flash"
    ]
  }
];

export class AppComponent {
  list1 = companies;
  list2 = cities;
}
