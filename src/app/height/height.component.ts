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
    { metric: '< 148',      imperial: '< 4\'10"',  skierCode: 'H', index: 7 },
    { metric: '149 - 157',  imperial: '4\'11" - 5\'1"',  skierCode: 'I', index: 8  },
    { metric: '158 - 166',  imperial: '5\'2" - 5\'5"',  skierCode: 'J', index: 9  },
    { metric: '167 - 178',  imperial: '5\'6" - 5\'10"',  skierCode: 'K', index: 10  },
    { metric: '179 - 194',  imperial: '5\'11" - 6\'4"',  skierCode: 'L', index: 11  },
    { metric: '> 195',      imperial: '> 6\'5"',  skierCode: 'M', index: 12  },
  ];

  constructor() { }

  ngOnInit() {
  }

  onUpdate(event: MatSelectChange){
    this.selected.emit(event.value);
  }

}

