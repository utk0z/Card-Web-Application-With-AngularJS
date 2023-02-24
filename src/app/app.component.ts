import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts=[
    {
      title:'Dağ Bisikleti',
      imageUrl:'../assets/biking.jpeg',
      username:'cbdag',
      content:'çok hızlı sürdüm'
    },
    {
      title:'Tırmanış',
      imageUrl:'../assets/mountain.jpeg',
      username:'cbuludag',
      content:'Bugün iyi tırmandım.'
    },
    {
      title:'Doğa yürüyüşü',
      imageUrl:'../assets/tree.jpeg',
      username:'cbdoga',
      content:'Hadi biraz Maçka parkında turlayalım'
    }
  ]
}
