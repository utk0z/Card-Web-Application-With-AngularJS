import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-com-card',
  templateUrl: './com-card.component.html',
  styleUrls: ['./com-card.component.css']
})
export class ComCardComponent implements OnInit {

  @Input() title : string='';
  @Input() imageUrl : string='';
  @Input() content : string='';
  @Input() username : string='';

  constructor() { }

  ngOnInit(): void {
  }

}
