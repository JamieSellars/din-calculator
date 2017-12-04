import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';
import { SimpleChange } from '@angular/core/src/change_detection/change_detection_util';
import { DINSetting } from '../models/dinSetting';
import { DinCalculatorService } from '../services/din-calculator.service';
import { MatDialog } from '@angular/material';
import { ResultDialogComponent } from '../result-dialog/result-dialog.component';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  
  result: number;
  dinSetting: DINSetting;

  constructor(
    private _dinCalculatorService: DinCalculatorService,
    private _matDialog: MatDialog
  ) { 
  }

  ngOnInit() {
    
  }

  calculateDIN(dinSetting: DINSetting) {
    
    // Skier code
    let skierCode = this._dinCalculatorService.getSkierCodeByHeight(dinSetting);
    
    skierCode = this._dinCalculatorService.getSkierCodeByAgeAndSkierType(dinSetting, skierCode);

    this.result = this._dinCalculatorService.getDINBySkierCodeAndSoleLength(dinSetting, skierCode);

    this.displayResult();
    
  }

  displayResult()
  {
    this._matDialog.open(ResultDialogComponent, {
      data: {
        result: this.result
      }
    });
  }

}

