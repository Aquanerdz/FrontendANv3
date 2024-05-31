import { Component } from '@angular/core';
import { EChartsOption } from 'echarts';
import { ECharts } from 'echarts/types/dist/echarts';

@Component({
  selector: 'app-system',
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.scss']
})
export class SystemComponent {

  position: number = 0;

  mudarMed(soma: number){
    if(this.position == 1){
      this.position = 0;
    } else {
      this.position += soma;
    }
  }

}
