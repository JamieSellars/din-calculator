import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatSelectChange } from '@angular/material';
import { DINSettingModel } from '../models/dinSettingModel';

@Component({
  selector: 'app-height',
  templateUrl: './height.component.html',
  styleUrls: ['./height.component.scss']
})
export class HeightComponent implements OnInit {

  @Output() selected: EventEmitter<string> = new EventEmitter<string>();
  
  heights: DINSettingModel[] = [
    { description: 'Less or Equal to 148',  value: '148',       skierCode: 'H', index: 7 },
    { description: '149 - 157',             value: '149 - 157', skierCode: 'I', index: 8  },
    { description: '158 - 166',             value: '158 - 166', skierCode: 'J', index: 9  },
    { description: '167 - 178',             value: '167 - 178', skierCode: 'K', index: 10  },
    { description: '179 - 194',             value: '179 - 194', skierCode: 'L', index: 11  },
    { description: 'Greater than 195',      value: '195+',      skierCode: 'M', index: 12  },
  ];

  constructor() { }

  ngOnInit() {
  }

  onUpdate(event: MatSelectChange){
    this.selected.emit(event.value);
  }

}

