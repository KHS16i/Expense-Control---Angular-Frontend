import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './app-footer.component.html',
  styleUrls: ['./app-footer.component.css']
})
export class AppFooterComponent {

  Months: string[] = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
  ];

  date: Date = new Date();

  day: number = this.date.getDate();
  month: string = this.Months[this.date.getMonth()];
  year: number = this.date.getFullYear();

  formatedDate: string = `${this.day} de ${this.month} del ${this.year}`;
}
