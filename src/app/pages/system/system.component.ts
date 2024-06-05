import { Component } from '@angular/core';
import { EChartsOption } from 'echarts';
import { ECharts } from 'echarts/types/dist/echarts';

@Component({
  selector: 'app-system',
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.scss']
})
export class SystemComponent {
  currentComponent: string = 'temperature';

  showPreviousComponent() {
    if (this.currentComponent === 'temperature') {
      this.currentComponent = 'oxigen';
    } else {
      this.currentComponent = 'temperature';
    }
  }

  showNextComponent() {
    if (this.currentComponent === 'oxigen') {
      this.currentComponent = 'temperature';
    } else {
      this.currentComponent = 'oxigen';
    }
  }

}
