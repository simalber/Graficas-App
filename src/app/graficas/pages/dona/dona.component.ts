import { Component } from '@angular/core';
import { ChartData, ChartType, Color } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent {


  public doughnutChartLabels: string[] = [ 'Ventas por descarga', 'Ventas en tienda', 'Ventas por e-mail', 'Otro tipo de ventas' ];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [ 350, 450, 100, 230 ],
        backgroundColor: ['#82FFFC','#7AE680', '#FAF88C', '#E3BD74'] },

    ]
  };
  public doughnutChartType: ChartType = 'doughnut';



}
