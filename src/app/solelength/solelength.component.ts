import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatSelectChange } from '@angular/material';
import { DINSettingModel } from '../models/dinSettingModel';

@Component({
  selector: 'app-solelength',
  templateUrl: './solelength.component.html',
  styleUrls: ['./solelength.component.scss']
})
export class SolelengthComponent implements OnInit {

  @Output() selected: EventEmitter<string> = new EventEmitter<string>();
  
  soleLengths: DINSettingModel[] = [

    { metric: 'Less or equal to 230', index: 0, value: '< 230' },
    { metric: '231 - 250', index: 1, value: '231 - 250' },    
    { metric: '251 - 270', index: 2, value: '251 - 270' },
    { metric: '271 - 290', index: 3, value: '271 - 290' },
    { metric: '291 - 310', index: 4, value: '291 - 310' },
    { metric: '311 - 330', index: 5, value: '311 - 330' },
    { metric: '331 - 350', index: 6, value: '331 - 350' },    
    { metric: 'Greater than 351', index: 7, value: '> 351' }

  ];

  constructor() { }

  ngOnInit() {
  }

  onUpdate(event: MatSelectChange){
    this.selected.emit(event.value);
  }
}
