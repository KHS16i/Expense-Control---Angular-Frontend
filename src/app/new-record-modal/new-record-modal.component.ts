import { Component, ViewChild } from '@angular/core';
import { ApiService } from '../service/api.service';
import { newRecord } from '../models/record-interface'
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-new-record-modal',
  templateUrl: './new-record-modal.component.html',
  styleUrls: ['./new-record-modal.component.css']
})
export class NewRecordModalComponent {

  @ViewChild('recordForm')
  recordForm!: NgForm;

  constructor(private apiService: ApiService) { }

  newRecord: newRecord = {
    userId: 1,
    description: "",
    userPaid: null,
    unitPrice: null
  };

  createNewRecords() {

    if (this.newRecord.description === "") {

      Swal.fire({
        title: "Atención",
        text: "Debe agregar una descripción",
        icon: "warning",
        confirmButtonText: 'Oh, se me olvidó'
      });

    } else if (this.newRecord.unitPrice === null || this.newRecord.userPaid === null) {

      Swal.fire({
        title: "Atención",
        text: "Debe agregar los montos solicitados",
        icon: "warning",
        confirmButtonText: 'De inmediato lo agrego!'
      });

    }
    else {
      this.apiService.PostNewRecord(this.newRecord).subscribe(
        response => {
          this.apiService.newInsert.next(true);

          Swal.fire({
            title: "Bien!",
            text: response.message,
            icon: "success",
            confirmButtonText: 'Excelente!'
          });

          this.recordForm.reset();
        },
        error => {

          Swal.fire({
            title: "Error al realizar la solicitud",
            text: error.message,
            icon: "error"
          });

        }
      );
    }
  }

  getHalf(){
    if (this.newRecord.userPaid != null) {
      this.newRecord.unitPrice = (this.newRecord.userPaid / 2)
    }
  }

  resetForm(){
    this.recordForm.reset();
  }
}

