import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let cities = [
      {
        flags: [
          'flame',
          'rocket'
        ],
        name: 'Harborton'
      },
      {
        flags: [
          'flame',
          'squirrel',
          'heart'
        ],
        name: 'Barronett'
      },
      {
        flags: [
          'flame',
          'heart'
        ],
        name: 'Homeland'
      },
      {
        flags: [
          'squirrel'
        ],
        name: 'Urie'
      },
      {
        flags: [
          'rocket'
        ],
        name: 'Fairhaven'
      },
      {
        flags: [
          'squirrel',
          'rocket'
        ],
        name: 'Adamstown'
      },
      {
        flags: [
          'flame',
          'rocket'
        ],
        name: 'Dunlo'
      },
      {
        flags: [
          'flame',
          'heart'
        ],
        name: 'Brethren'
      },
      {
        flags: [
          'flame',
          'squirrel',
          'rocket'
        ],
        name: 'Jackpot'
      },
      {
        flags: [
          'squirrel'
        ],
        name: 'Roland'
      },
      {
        flags: [
          'squirrel',
          'heart'
        ],
        name: 'Bodega'
      },
      {
        flags: [
          'rocket'
        ],
        name: 'Onton'
      },
      {
        flags: [
          'squirrel'
        ],
        name: 'Dragoon'
      },
      {
        flags: [],
        name: 'Gouglersville'
      },
      {
        flags: [
          'flame',
          'rocket'
        ],
        name: 'Hiko'
      },
      {
        flags: [
          'heart'
        ],
        name: 'Lynn'
      },
      {
        flags: [
          'flame',
          'squirrel'
        ],
        name: 'Siglerville'
      },
      {
        flags: [
          'flame',
          'squirrel',
          'rocket'
        ],
        name: 'Dola'
      },
      {
        flags: [
          'squirrel',
          'heart'
        ],
        name: 'Lloyd'
      },
      {
        flags: [
          'flame',
          'rocket',
          'heart'
        ],
        name: 'Callaghan'
      },
      {
        flags: [
          'heart'
        ],
        name: 'Boyd'
      },
      {
        flags: [
          'heart'
        ],
        name: 'Caroline'
      },
      {
        flags: [
          'rocket',
          'heart'
        ],
        name: 'Kula'
      },
      {
        flags: [
          'flame',
          'squirrel',
          'heart'
        ],
        name: 'Frystown'
      },
      {
        flags: [
          'flame',
          'squirrel'
        ],
        name: 'Walker'
      },
      {
        flags: [
          'flame',
          'heart'
        ],
        name: 'Jennings'
      },
      {
        flags: [
          'squirrel',
          'rocket'
        ],
        name: 'Yukon'
      },
      {
        flags: [
          'rocket'
        ],
        name: 'Belgreen'
      },
      {
        flags: [
          'flame',
          'squirrel',
          'rocket',
          'heart'
        ],
        name: 'Veguita'
      },
      {
        flags: [
          'squirrel',
          'heart'
        ],
        name: 'Allamuchy'
      },
      {
        flags: [
          'flame',
          'rocket',
          'heart'
        ],
        name: 'Orick'
      },
      {
        flags: [
          'flame',
          'squirrel'
        ],
        name: 'Riner'
      },
      {
        flags: [
          'flame',
          'squirrel'
        ],
        name: 'Snelling'
      },
      {
        flags: [],
        name: 'Dotsero'
      },
      {
        flags: [
          'rocket',
          'heart'
        ],
        name: 'Nile'
      },
      {
        flags: [
          'flame',
          'rocket'
        ],
        name: 'Englevale'
      },
      {
        flags: [
          'flame'
        ],
        name: 'Lutsen'
      },
      {
        flags: [
          'squirrel'
        ],
        name: 'Islandia'
      },
      {
        flags: [],
        name: 'Dyckesville'
      },
      {
        flags: [
          'flame',
          'squirrel',
          'heart'
        ],
        name: 'Hiwasse'
      },
      {
        flags: [
          'squirrel',
          'rocket'
        ],
        name: 'Charco'
      },
      {
        flags: [
          'flame'
        ],
        name: 'Advance'
      },
      {
        flags: [
          'flame',
          'rocket',
          'heart'
        ],
        name: 'Catharine'
      },
      {
        flags: [
          'flame',
          'heart'
        ],
        name: 'Datil'
      },
      {
        flags: [
          'heart'
        ],
        name: 'Cavalero'
      },
      {
        flags: [
          'squirrel',
          'heart'
        ],
        name: 'Sharon'
      },
      {
        flags: [
          'flame',
          'squirrel',
          'heart'
        ],
        name: 'Brogan'
      },
      {
        flags: [
          'flame',
          'heart'
        ],
        name: 'Edinburg'
      },
      {
        flags: [
          'flame',
          'squirrel',
          'heart'
        ],
        name: 'Vincent'
      },
      {
        flags: [
          'squirrel',
          'rocket',
          'heart'
        ],
        name: 'Franklin'
      },
      {
        flags: [
          'rocket'
        ],
        name: 'Whitehaven'
      },
      {
        flags: [
          'flame',
          'rocket',
          'heart'
        ],
        name: 'Dellview'
      },
      {
        flags: [
          'squirrel'
        ],
        name: 'Tolu'
      },
      {
        flags: [
          'flame',
          'squirrel',
          'heart'
        ],
        name: 'Cutter'
      },
      {
        flags: [
          'squirrel'
        ],
        name: 'Lafferty'
      },
      {
        flags: [
          'flame',
          'heart'
        ],
        name: 'Vienna'
      },
      {
        flags: [],
        name: 'Roulette'
      },
      {
        flags: [
          'squirrel',
          'rocket',
          'heart'
        ],
        name: 'Avoca'
      },
      {
        flags: [],
        name: 'Conway'
      },
      {
        flags: [
          'rocket'
        ],
        name: 'Barclay'
      },
      {
        flags: [
          'squirrel',
          'heart'
        ],
        name: 'Spelter'
      },
      {
        flags: [
          'flame',
          'squirrel',
          'heart'
        ],
        name: 'Waumandee'
      },
      {
        flags: [
          'rocket'
        ],
        name: 'Roberts'
      },
      {
        flags: [
          'squirrel',
          'rocket'
        ],
        name: 'Loyalhanna'
      },
      {
        flags: [
          'flame',
          'squirrel',
          'rocket'
        ],
        name: 'Carrsville'
      },
      {
        flags: [
          'flame',
          'rocket'
        ],
        name: 'Woodlands'
      },
      {
        flags: [
          'flame',
          'squirrel',
          'heart'
        ],
        name: 'Emison'
      },
      {
        flags: [
          'flame',
          'squirrel',
          'rocket',
          'heart'
        ],
        name: 'Smock'
      },
      {
        flags: [
          'rocket'
        ],
        name: 'Shrewsbury'
      },
      {
        flags: [],
        name: 'Cassel'
      },
      {
        flags: [
          'squirrel',
          'rocket',
          'heart'
        ],
        name: 'Websterville'
      },
      {
        flags: [
          'flame',
          'heart'
        ],
        name: 'Kipp'
      },
      {
        flags: [
          'flame',
          'rocket',
          'heart'
        ],
        name: 'Cawood'
      },
      {
        flags: [],
        name: 'Devon'
      },
      {
        flags: [
          'heart'
        ],
        name: 'Chamberino'
      },
      {
        flags: [
          'flame',
          'squirrel',
          'heart'
        ],
        name: 'Calpine'
      },
      {
        flags: [
          'flame',
          'rocket'
        ],
        name: 'Churchill'
      },
      {
        flags: [
          'flame',
          'heart'
        ],
        name: 'Bellamy'
      },
      {
        flags: [
          'flame',
          'rocket',
          'heart'
        ],
        name: 'Troy'
      },
      {
        flags: [
          'flame',
          'squirrel',
          'heart'
        ],
        name: 'Vaughn'
      },
      {
        flags: [
          'rocket',
          'heart'
        ],
        name: 'Marbury'
      },
      {
        flags: [
          'heart'
        ],
        name: 'Baden'
      },
      {
        flags: [
          'flame',
          'squirrel'
        ],
        name: 'Shelby'
      },
      {
        flags: [
          'squirrel'
        ],
        name: 'Newkirk'
      },
      {
        flags: [
          'squirrel',
          'rocket'
        ],
        name: 'Oberlin'
      },
      {
        flags: [
          'rocket'
        ],
        name: 'Machias'
      },
      {
        flags: [
          'flame',
          'squirrel'
        ],
        name: 'Chelsea'
      },
      {
        flags: [
          'flame',
          'rocket',
          'heart'
        ],
        name: 'Hampstead'
      },
      {
        flags: [
          'flame'
        ],
        name: 'Century'
      },
      {
        flags: [
          'flame',
          'rocket'
        ],
        name: 'Loma'
      },
      {
        flags: [
          'heart'
        ],
        name: 'Succasunna'
      },
      {
        flags: [
          'heart'
        ],
        name: 'Kohatk'
      },
      {
        flags: [
          'flame',
          'squirrel'
        ],
        name: 'Harviell'
      },
      {
        flags: [
          'heart'
        ],
        name: 'Malo'
      },
      {
        flags: [
          'flame',
          'squirrel',
          'rocket'
        ],
        name: 'Orovada'
      },
      {
        flags: [
          'flame',
          'squirrel',
          'rocket',
          'heart'
        ],
        name: 'Celeryville'
      },
      {
        flags: [
          'rocket',
          'heart'
        ],
        name: 'Ironton'
      },
      {
        flags: [
          'flame',
          'squirrel',
          'heart'
        ],
        name: 'Waverly'
      },
      {
        flags: [
          'squirrel',
          'heart'
        ],
        name: 'Coaldale'
      },
      {
        flags: [],
        name: 'Foscoe'
      }
    ];

    let companies = [
      {
        flags: [
          'squirrel',
          'rocket'
        ],
        name: 'Sultrax'
      },
      {
        flags: [
          'flame',
          'squirrel'
        ],
        name: 'Macronaut'
      },
      {
        flags: [
          'flame',
          'squirrel',
          'rocket'
        ],
        name: 'Isoswitch'
      },
      {
        flags: [
          'squirrel'
        ],
        name: 'Furnitech'
      },
      {
        flags: [
          'heart'
        ],
        name: 'Applideck'
      },
      {
        flags: [
          'rocket',
          'heart'
        ],
        name: 'Koogle'
      },
      {
        flags: [
          'flame',
          'squirrel',
          'heart'
        ],
        name: 'Accruex'
      },
      {
        flags: [
          'flame',
          'squirrel',
          'rocket',
          'heart'
        ],
        name: 'Fuelworks'
      },
      {
        flags: [
          'rocket',
          'heart'
        ],
        name: 'Bytrex'
      },
      {
        flags: [
          'squirrel',
          'rocket',
          'heart'
        ],
        name: 'Eplosion'
      },
      {
        flags: [
          'squirrel',
          'rocket',
          'heart'
        ],
        name: 'Retrack'
      },
      {
        flags: [
          'flame',
          'squirrel',
          'rocket'
        ],
        name: 'Eventix'
      },
      {
        flags: [
          'heart'
        ],
        name: 'Rodeology'
      },
      {
        flags: [
          'squirrel',
          'rocket'
        ],
        name: 'Chorizon'
      },
      {
        flags: [
          'squirrel',
          'rocket'
        ],
        name: 'Radiantix'
      },
      {
        flags: [
          'heart'
        ],
        name: 'Qualitex'
      },
      {
        flags: [
          'squirrel',
          'rocket'
        ],
        name: 'Fossiel'
      },
      {
        flags: [
          'rocket'
        ],
        name: 'Flyboyz'
      },
      {
        flags: [
          'flame',
          'rocket',
          'heart'
        ],
        name: 'Peticular'
      },
      {
        flags: [
          'flame',
          'squirrel',
          'heart'
        ],
        name: 'Poochies'
      },
      {
        flags: [
          'squirrel',
          'rocket',
          'heart'
        ],
        name: 'Isodrive'
      },
      {
        flags: [
          'flame',
          'squirrel',
          'heart'
        ],
        name: 'Hydrocom'
      },
      {
        flags: [],
        name: 'Farmex'
      },
      {
        flags: [
          'flame'
        ],
        name: 'Medcom'
      },
      {
        flags: [
          'rocket',
          'heart'
        ],
        name: 'Comtract'
      },
      {
        flags: [
          'flame',
          'squirrel',
          'heart'
        ],
        name: 'Kage'
      },
      {
        flags: [
          'squirrel',
          'rocket'
        ],
        name: 'Glukgluk'
      },
      {
        flags: [
          'flame',
          'squirrel',
          'rocket'
        ],
        name: 'Spacewax'
      },
      {
        flags: [
          'flame',
          'squirrel',
          'rocket'
        ],
        name: 'Freakin'
      },
      {
        flags: [
          'rocket',
          'heart'
        ],
        name: 'Visalia'
      },
      {
        flags: [
          'flame',
          'squirrel',
          'rocket',
          'heart'
        ],
        name: 'Cofine'
      },
      {
        flags: [
          'flame',
          'squirrel'
        ],
        name: 'Toyletry'
      },
      {
        flags: [
          'squirrel',
          'rocket'
        ],
        name: 'Olympix'
      },
      {
        flags: [
          'rocket',
          'heart'
        ],
        name: 'Rubadub'
      },
      {
        flags: [
          'flame',
          'squirrel',
          'heart'
        ],
        name: 'Veraq'
      },
      {
        flags: [
          'squirrel',
          'rocket'
        ],
        name: 'Digifad'
      },
      {
        flags: [
          'heart'
        ],
        name: 'Dognosis'
      },
      {
        flags: [
          'rocket',
          'heart'
        ],
        name: 'Moreganic'
      },
      {
        flags: [
          'flame',
          'squirrel',
          'rocket',
          'heart'
        ],
        name: 'Cormoran'
      },
      {
        flags: [
          'flame'
        ],
        name: 'Kengen'
      },
      {
        flags: [
          'flame',
          'rocket',
          'heart'
        ],
        name: 'Premiant'
      },
      {
        flags: [
          'flame',
          'squirrel'
        ],
        name: 'Inventure'
      },
      {
        flags: [
          'squirrel',
          'heart'
        ],
        name: 'Vantage'
      },
      {
        flags: [
          'flame'
        ],
        name: 'Comverges'
      },
      {
        flags: [],
        name: 'Danja'
      },
      {
        flags: [
          'rocket'
        ],
        name: 'Kiosk'
      },
      {
        flags: [
          'flame',
          'squirrel',
          'heart'
        ],
        name: 'Quailcom'
      },
      {
        flags: [
          'flame',
          'squirrel'
        ],
        name: 'Pheast'
      },
      {
        flags: [
          'heart'
        ],
        name: 'Koffee'
      },
      {
        flags: [
          'flame',
          'squirrel'
        ],
        name: 'Duoflex'
      },
      {
        flags: [
          'flame',
          'rocket'
        ],
        name: 'Andershun'
      },
      {
        flags: [
          'flame',
          'squirrel',
          'rocket',
          'heart'
        ],
        name: 'Flumbo'
      },
      {
        flags: [
          'rocket'
        ],
        name: 'Quilk'
      },
      {
        flags: [
          'squirrel'
        ],
        name: 'Namegen'
      },
      {
        flags: [
          'squirrel',
          'heart'
        ],
        name: 'Zenthall'
      },
      {
        flags: [
          'squirrel',
          'rocket',
          'heart'
        ],
        name: 'Uplinx'
      },
      {
        flags: [
          'rocket'
        ],
        name: 'Acusage'
      },
      {
        flags: [
          'squirrel',
          'rocket',
          'heart'
        ],
        name: 'Bluplanet'
      },
      {
        flags: [
          'rocket'
        ],
        name: 'Viagreat'
      },
      {
        flags: [
          'flame',
          'squirrel'
        ],
        name: 'Snorus'
      },
      {
        flags: [
          'rocket'
        ],
        name: 'Nurplex'
      },
      {
        flags: [
          'flame',
          'squirrel',
          'rocket'
        ],
        name: 'Exodoc'
      },
      {
        flags: [
          'squirrel',
          'heart'
        ],
        name: 'Opticon'
      },
      {
        flags: [
          'squirrel',
          'rocket',
          'heart'
        ],
        name: 'Inquala'
      },
      {
        flags: [
          'squirrel',
          'rocket',
          'heart'
        ],
        name: 'Gynko'
      },
      {
        flags: [
          'flame',
          'squirrel'
        ],
        name: 'Equitox'
      },
      {
        flags: [
          'flame',
          'rocket'
        ],
        name: 'Hyplex'
      },
      {
        flags: [
          'rocket',
          'heart'
        ],
        name: 'Myopium'
      },
      {
        flags: [
          'flame'
        ],
        name: 'Grupoli'
      },
      {
        flags: [
          'flame',
          'squirrel',
          'rocket',
          'heart'
        ],
        name: 'Netbook'
      },
      {
        flags: [
          'flame'
        ],
        name: 'Geekola'
      },
      {
        flags: [
          'flame',
          'squirrel',
          'rocket'
        ],
        name: 'Tersanki'
      },
      {
        flags: [],
        name: 'Podunk'
      },
      {
        flags: [
          'flame',
          'squirrel',
          'rocket',
          'heart'
        ],
        name: 'Frolix'
      },
      {
        flags: [
          'flame',
          'squirrel',
          'rocket'
        ],
        name: 'Xleen'
      },
      {
        flags: [
          'flame',
          'heart'
        ],
        name: 'Insurety'
      },
      {
        flags: [
          'squirrel'
        ],
        name: 'Uncorp'
      },
      {
        flags: [
          'heart'
        ],
        name: 'Plexia'
      },
      {
        flags: [],
        name: 'Edecine'
      },
      {
        flags: [
          'squirrel'
        ],
        name: 'Interfind'
      },
      {
        flags: [
          'rocket',
          'heart'
        ],
        name: 'Zillan'
      },
      {
        flags: [],
        name: 'Centice'
      },
      {
        flags: [
          'flame',
          'squirrel'
        ],
        name: 'Xyqag'
      },
      {
        flags: [],
        name: 'Cogentry'
      },
      {
        flags: [
          'squirrel',
          'heart'
        ],
        name: 'Neptide'
      },
      {
        flags: [
          'flame',
          'squirrel'
        ],
        name: 'Powernet'
      },
      {
        flags: [
          'flame',
          'squirrel',
          'heart'
        ],
        name: 'Gink'
      },
      {
        flags: [],
        name: 'Newcube'
      },
      {
        flags: [
          'flame',
          'squirrel',
          'rocket',
          'heart'
        ],
        name: 'Xth'
      },
      {
        flags: [
          'flame',
          'squirrel',
          'rocket',
          'heart'
        ],
        name: 'Pyrami'
      },
      {
        flags: [
          'flame',
          'squirrel',
          'rocket'
        ],
        name: 'Medalert'
      },
      {
        flags: [
          'flame',
          'squirrel',
          'heart'
        ],
        name: 'Xylar'
      },
      {
        flags: [
          'squirrel',
          'heart'
        ],
        name: 'Daido'
      },
      {
        flags: [
          'rocket'
        ],
        name: 'Ecstasia'
      },
      {
        flags: [
          'flame',
          'rocket'
        ],
        name: 'Zytrek'
      },
      {
        flags: [
          'flame'
        ],
        name: 'Ewaves'
      },
      {
        flags: [
          'flame',
          'squirrel'
        ],
        name: 'Adornica'
      },
      {
        flags: [
          'squirrel',
          'heart'
        ],
        name: 'Papricut'
      },
      {
        flags: [
          'squirrel',
          'rocket'
        ],
        name: 'Turnling'
      },
      {
        flags: [
          'flame',
          'rocket'
        ],
        name: 'Boilicon'
      }
    ];

    return {cities, companies};
  }
}
