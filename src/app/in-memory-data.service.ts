import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 0,  name: 'Zero' },
      { id: 11, name: 'Mr. Nice' },
      { id: 12, name: 'Narco' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' }
    ];

    const users = [
      { "id": 1, "firstName": "Jignesh", "lastName": "Parekh", "age": 33},
      { "id": 2, "firstName": "Krital", "lastName": "Parekh", "age": 31},
      { "id": 3, "firstName": "Vihaan", "lastName": "Parekh", "age": 2}
    ];

    return { heroes, users };
  }
}