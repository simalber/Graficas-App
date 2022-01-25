import { Component, Input, ViewChild, OnInit } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
@Component({
  selector: 'app-grafica-barra',
  templateUrl: './grafica-barra.component.html',
  styles: [
  ]
})
export class GraficaBarraComponent implements OnInit {



  @Input () horizontal: boolean = false;
  @Input () bubble: boolean = false;

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
  };
  public barChartType: ChartType = 'bar';

  public barChartData: ChartData<'bar'> = {
    labels: [ '2022', '2023', '2024', '2025', '2026', '2027', '2028' ],
    datasets: [
      { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Serie A', backgroundColor: '#87FAF5', hoverBackgroundColor: 'yellow' },
      { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Serie B', backgroundColor: '#78C7DE', hoverBackgroundColor: 'green' },
      { data: [ 8, 28, 14, 7, 12, 90, 50 ], label: 'Serie C', backgroundColor: '#91C4F5', hoverBackgroundColor: 'white' }
    ]
  };

  ngOnInit(): void {
    if ( this.horizontal ) {
      this.barChartType = 'line';
    }else{ this.barChartType = 'bubble'}
    }
  }



