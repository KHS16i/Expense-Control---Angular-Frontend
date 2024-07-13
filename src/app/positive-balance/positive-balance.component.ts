import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-positive-balance',
  templateUrl: './positive-balance.component.html',
  styleUrls: ['./positive-balance.component.css']
})
export class PositiveBalanceComponent {

  userName: string = "";
  positiveBalance: string = "₡ 0";

  constructor(private apiService: ApiService) { }
  
  getUserBalance(){
    this.apiService.GetUsersBalance().subscribe(data => {
      this.userName = data.name;
      this.positiveBalance = "₡ " +  data.positiveBalance;
    })
  }
}
