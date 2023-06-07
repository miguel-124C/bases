import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public heroNames: string[] = ['Spiderman','Ironman','Hulk','Thor'];
  public heroDelete?: string;

  deleteLastHero(): void{
    this.heroDelete = this.heroNames.pop();
    console.log(this.heroDelete);
    
  }
}
