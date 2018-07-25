import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
        { id: 11, name: 'Mr. White' },
        { id: 12, name: 'Mr. Orange' },
        { id: 13, name: 'Mr. Blonde' },
        { id: 14, name: 'Mr. Pink' },
        { id: 15, name: 'Mr. Blue' },
        { id: 16, name: 'Mr. Brown' },
        { id: 17, name: 'Dynama' },
        { id: 18, name: 'Dr IQ' },
        { id: 19, name: 'Magma' },
        { id: 20, name: 'Tornado' }
    ];
    return {heroes};
  }
}