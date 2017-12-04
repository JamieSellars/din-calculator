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

    { description: 'Less or equal to 250', index: 0, value: '< 250' },
    { description: '251 - 270', index: 1, value: '251 - 270' },
    { description: '271 - 290', index: 2, value: '271 - 290' },
    { description: '291 - 310', index: 3, value: '291 - 310' },
    { description: '311 - 330', index: 4, value: '311 - 330' },
    { description: 'Greater than 330', index: 5, value: '> 330' }

  ];

  constructor() { }

  ngOnInit() {
  }

  onUpdate(event: MatSelectChange){
    this.selected.emit(event.value);
  }
}
