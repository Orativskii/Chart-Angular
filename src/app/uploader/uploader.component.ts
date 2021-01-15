import {Component, OnInit} from '@angular/core';
import {UploadService} from '../upload.service';
import {Country} from '../arrayInterface';
import {Observable} from 'rxjs';
import {Chart} from 'chart.js';

@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.css'],
  providers: [UploadService]
})
export class UploaderComponent implements OnInit {
  public chart: any = null;
  constructor(private uploadService: UploadService) {
  }

  ngOnInit(): void {
  }

  fileChange(event): void {
    this.uploadService.fileChange(event);
  }

  drawChart(): void {
    this.chart = new Chart('canvas', {
      type: 'bar',
      data: {
        labels: this.uploadService.country.map(element => element.countryName),
        datasets: [{
          label: 'Rating country',
          data: this.uploadService.country.map(element => element.rating),
          borderWidth: 5
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
    console.log('The diagram is drawn');

  }
}
