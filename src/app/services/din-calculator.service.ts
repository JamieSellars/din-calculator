import { Injectable } from '@angular/core';
import { DINSetting } from '../models/dinSetting';

@Injectable()
export class DinCalculatorService {

  private _dinSettings: DINSetting;
  private _dins: any[] = [];
  
  private _skierCodes: any = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','0'];

  constructor() {
    this.setDINs();
  }

  // Height or Weight determins whether the Skier code should be demoted or promoted.
  // If weight has a lower index than height, use the weight
  // If height has a lower index than weight, use the height
  getSkierCodeByHeight(dinSetting: DINSetting) : string
  {
      
      let heightSkierCode = dinSetting.height.index;
      let weightSkierCode = dinSetting.weight.index;

      if ( heightSkierCode > weightSkierCode )
        return dinSetting.weight.skierCode;

      if ( weightSkierCode > heightSkierCode )
        return dinSetting.height.skierCode;

      // they're equal return either
      return dinSetting.height.skierCode;
      
  }

  getSkierCodeByAgeAndSkierType(dinSetting: DINSetting, skierCode: string)
  {

    let skierCodeIndex = this._skierCodes.indexOf(skierCode);

    // if skier type 1 (cautious) remain (DO NOTHING)

    // if skier type 2 (moderate) move index up one skier code
    if( dinSetting.skill.index == 1 )
      skierCodeIndex = skierCodeIndex + 1;
    
    // if skier type 3 (aggresive) move index up two skier codes
    if( dinSetting.skill.index == 2 )
      skierCodeIndex = skierCodeIndex + 2;

    // If age > 50 years move up demote skier code
    if( dinSetting.age.index == 2 ) 
      skierCodeIndex = skierCodeIndex - 1;    

    return skierCode = this._skierCodes[skierCodeIndex];
    
  }

  getDINBySkierCodeAndSoleLength(dinSetting: DINSetting, skierCode)
  {
    let skierCodeIndex = this._skierCodes.indexOf(skierCode);

    return this._dins[skierCodeIndex][dinSetting.soleLength.index];

  }
 

  setDINs(){

    // A
    this._dins.push([0.75,0.75,null,null,null,null]);

    // B
    this._dins.push([1,1,0.75,null,null,null]);

    // C 
    this._dins.push([1.25,1.25,1,null,null,null]);

    // D
    this._dins.push([1.75,1.25,1,null,null,null]);

    // E
    this._dins.push([2,2,1.75,null,null,null]);
    
    // F 
    this._dins.push([2.5,2.5,2.25,2,1.75,1.75]);

    // G
    this._dins.push([null,3,2.5,2.5,2.25,2]);    

    // H 
    this._dins.push([null,3.5,3,3,2.5,2.5]);    
    
    // I
    this._dins.push([null,4.25,4,3.5,3.25,3.25]);

    // J
    this._dins.push([null,5,4.75,4.5,4,4]);

    // K
    this._dins.push([null,6,5.5,5.25,5,4.75]);

    // L 
    this._dins.push([null,7,6.75,6.25,6,5.75]);

    // M
    this._dins.push([null,8.5,8,7.5,7,6.75]);

    // N 
    this._dins.push([null,10,9.5,9.0,8.5,8.25]);

    // 0
    this._dins.push([null,12,11.25,10.75,10.25,10]);
  }
    


}
