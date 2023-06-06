import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-heroe',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name: string = 'ironMan';
  public age: number = 45;

  changeName(newName: string):void{
    this.name = newName;
  }
}
