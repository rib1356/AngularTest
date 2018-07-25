import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
// import { HEROES} from '../mock-heroes';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {

  heroes: Hero[];

  //Constructer shouldnt do anything (such as calling functions)
  constructor(private heroService: HeroService) { } //Defines private heroService property and identifies it as an injection site

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }

  ngOnInit() {
    this.getHeroes(); //method is called in here as it will call at an appropriate time after constructing the heroesComponent instance
  }

  add(name: string): void {
    name = name.trim();
    if(!name) { return; }
    this.heroService.addHero({ name } as Hero)
    .subscribe(hero => {this.heroes.push(hero);});
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }

}
