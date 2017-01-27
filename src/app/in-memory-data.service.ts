import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let cities = [
      {
        flags: [
          "flame",
          "rocket"
        ],
        name: "Harborton"
      },
      {
        flags: [
          "flame",
          "squirrel",
          "heart"
        ],
        name: "Barronett"
      },
      {
        flags: [
          "flame",
          "heart"
        ],
        name: "Homeland"
      },
      {
        flags: [
          "squirrel"
        ],
        name: "Urie"
      },
      {
        flags: [
          "rocket"
        ],
        name: "Fairhaven"
      }
    ];
    return {cities};
  }
}
