import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../services/hero.service';
import { MessageService } from '../services/message.service'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  //(private heroService:HeroService) dependency injection
  constructor(private heroService:HeroService, private messageService:MessageService) {

   }
  heroes: Hero[] ;
  selectedHero: Hero;


  onSelect(hero:Hero):void{
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`)
  }

  ngOnInit(): void {
    //call getHeroes to retrieve heroes data 
    this.getHeroes();
    
  }

  ngDoCheck():void{
    console.log(this.selectedHero)
  }


  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }
  
}
