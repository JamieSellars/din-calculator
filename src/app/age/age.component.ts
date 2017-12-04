import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MatRadioButton } from '@angular/material';
import { DINSettingModel } from '../models/dinSettingModel';

@Component({
  selector: 'app-age',
  templateUrl: './age.component.html',
  styleUrls: ['./age.component.scss']
})
export class AgeComponent implements OnInit {

  @Output() selected: EventEmitter<string> = new EventEmitter<string>();
  
  ages: DINSettingModel[] = [
    { description: 'Under 16 Years', value: 'Under 16 Years', index: 0 },
    { description: '16 - 50 Years', value: '16 - 50 Years', index: 1 },
    { description: 'Over 50 Years', value: 'Over 50 Years', index: 2 }
  ];

  constructor() { }

  ngOnInit() {
  }

  onUpdate($event: MatRadioButton){
    this.selected.emit($event.value);
  }

}
