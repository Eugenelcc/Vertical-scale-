import { Component } from '@angular/core';
import { Options } from '@angular-slider/ngx-slider';

interface SimpleSliderModel {
  value: number;
  options: Options;
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class VerticalSlidersComponent {
  public name = 'EUGENE';
  verticalSlider6: SimpleSliderModel = {
    value: 45,
    options: {
      floor: 0,
      ceil: 100,
      vertical: true,
      showSelectionBar: true,
      showTicksValues: true,
      //tickStep: 10,
      tickValueStep: 10,
      ticksArray: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],

      ticksValuesTooltip: (v: number): string => {
        return 'Tooltip for ' + v;
      }
    }
  };
}
