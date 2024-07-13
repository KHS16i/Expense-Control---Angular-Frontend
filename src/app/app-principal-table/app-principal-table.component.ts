import { Component, OnInit, LOCALE_ID } from '@angular/core';
import { DatePipe, registerLocaleData } from '@angular/common';
import { ApiService } from '../service/api.service';
import { Records } from '../models/record-interface';
import localeEs from '@angular/common/locales/es';

@Component({
  selector: 'app-principal-table',
  templateUrl: './app-principal-table.component.html',
  styleUrls: ['./app-principal-table.component.css'],
  providers: [DatePipe, { provide: LOCALE_ID, useValue: 'es' }]
})
export class AppPrincipalTableComponent implements OnInit {

  recordsK: Records[] = [];
  recordsP: Records[] = [];

  constructor(private apiService: ApiService, private datePipe: DatePipe) {
    registerLocaleData(localeEs);
  }

  ngOnInit(): void {
    this.getRecords();

    //Siempre está escuchando si se hace un nuevo insert, para refrescar las tablas.
    this.apiService.newInsert.subscribe(data => {
      if (data) {
        this.getRecords();
      }
    });
  }

  getRecords() {
    this.apiService.GetAllRecords().subscribe(data => {
      this.recordsK = this.formatDates(data.filter((item: { userId: number; }) => item.userId === 1));
      this.recordsP = this.formatDates(data.filter((item: { userId: number; }) => item.userId === 2));

    })
  }

  private formatDates(records: any[]): any[] {
    return records.map(record => {
      // Parsea la fecha original y aplica el formato deseado
      const fecha = new Date(record.date);
      record.date = this.datePipe.transform(fecha, 'EEEE d \'de\' MMMM \'del\' y');
      return record;
    });
  }
}
