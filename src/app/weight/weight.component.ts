import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatRadioButton, MatSelectChange } from '@angular/material';
import { DINSettingModel } from '../models/dinSettingModel';

@Component({
  selector: 'app-weight',
  templateUrl: './weight.component.html',
  styleUrls: ['./weight.component.scss']
})
export class WeightComponent implements OnInit {

  @Output() selected: EventEmitter<string> = new EventEmitter<string>();
  
  weights: DINSettingModel[] = [
    { description: '10 - 13',  value: '10 - 13',  skierCode: 'A', index: 0 },
    { description: '14 - 17', value: '14 - 17',   skierCode: 'B', index: 1 },
    { description: '18 - 21', value: '18 - 21',   skierCode: 'C', index: 2 },
    { description: '22 - 25', value: '22 - 25',   skierCode: 'D', index: 3 },
    { description: '26 - 30', value: '26 - 30',   skierCode: 'E', index: 3 },    
    { description: '31 - 35', value: '31 - 35',   skierCode: 'F', index: 4 },
    { description: '36 - 41', value: '36 - 41',   skierCode: 'G', index: 5 },
    { description: '42 - 48', value: '42 - 48',   skierCode: 'H', index: 6 },
    { description: '49 - 57', value: '49 - 57',   skierCode: 'I', index: 7 },
    { description: '58 - 66', value: '58 - 66',   skierCode: 'J', index: 8 },
    { description: '67 - 78', value: '67 - 78',   skierCode: 'K', index: 9 },
    { description: '79 - 94', value: '79 - 94',   skierCode: 'L', index: 10 },
    { description: '95+',     value: '95+',       skierCode: 'M', index: 11 },

  ];

  constructor() { }

  ngOnInit() {
  }

  onUpdate(event: MatSelectChange){
    this.selected.emit(event.value);
  }
  
}
