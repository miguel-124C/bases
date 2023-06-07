import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';

@NgModule({
  declarations: [
    MainComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
  ],
  exports:[
    MainComponent,
  ]
})

export class DbzModule {  }