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
      showSelectionBar: false,
      showTicksValues: true,
      //tickStep: 10,
      tickValueStep: 10,
    

      ticksTooltip: (value) => {
        return `Tooltip: ${value}`;
      }
    }
  };

  var valueHover = 0;
function calcSliderPos(e) {
  return (
    (e.offsetX / e.target.clientWidth) *
    parseInt(e.target.getAttribute('max'), 10)
  );
}

//attach to slider and fire on mousemove
document
  .getElementById('seekslider')
  .addEventListener('mousemove', function(e) {
    valueHover = calcSliderPos(e).toFixed(1);
    document.getElementById('durtimeText').innerHTML = valueHover;
  });
document.getElementById('seekslider').addEventListener('mouseup', function(e) {
  valueHover = calcSliderPos(e).toFixed(2);
  valueHover = valueHover > 100 ? 100 : valueHover;
  valueHover = valueHover < 0 ? 0 : valueHover;
  document.getElementById('seekslider').value = valueHover;
  document.getElementById('seek').innerHTML = valueHover;
});

document.getElementById('seekslider').addEventListener('change', function(e) {
  var valueSeeked = e.target.value;
  document.getElementById('seek').innerHTML = valueSeeked;
  document.getElementById('test').innerHTML = valueSeeked === valueHover;
});


}
