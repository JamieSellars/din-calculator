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
    { metric: '10 - 13', imperial: '22 - 29', skierCode: 'A', index: 0 },
    { metric: '14 - 17', imperial: '30 - 38',  skierCode: 'B', index: 1 },
    { metric: '18 - 21', imperial: '39 - 47',  skierCode: 'C', index: 2 },
    { metric: '22 - 25', imperial: '48 - 56',  skierCode: 'D', index: 3 },
    { metric: '26 - 30', imperial: '57 - 66',  skierCode: 'E', index: 3 },    
    { metric: '31 - 35', imperial: '67 - 78',  skierCode: 'F', index: 4 },
    { metric: '36 - 41', imperial: '79 - 91',  skierCode: 'G', index: 5 },
    { metric: '42 - 48', imperial: '92 - 107',  skierCode: 'H', index: 6 },
    { metric: '49 - 57', imperial: '108 - 125',  skierCode: 'I', index: 7 },
    { metric: '58 - 66', imperial: '126 - 147',  skierCode: 'J', index: 8 },
    { metric: '67 - 78', imperial: '148 - 174',  skierCode: 'K', index: 9 },
    { metric: '79 - 94', imperial: '175 - 209',  skierCode: 'L', index: 10 },
    { metric: '95+',     imperial: '210+',   skierCode: 'M', index: 11 },

  ];

  constructor() { }

  ngOnInit() {
  }

  onUpdate(event: MatSelectChange){
    this.selected.emit(event.value);
  }
  
}
