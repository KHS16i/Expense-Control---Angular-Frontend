import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { newRecord } from '../models/record-interface'
import { Records } from '../models/record-interface'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private BASE_URL = 'https://localhost:7140'

  //Variable para verificar si se hizo una nueva insercion
  public newInsert = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) { }

  public GetAllRecords(): Observable<any>{
    const url = `${this.BASE_URL}/api/Records`;
    return this.http.get<Records>(url)
  }

  public GetUsersBalance(){
    const url = `${this.BASE_URL}/${"api/Users/GetUsersBalance"}`;
    return this.http.get<any>(url)
  }

  public PostNewRecord(newRecord: newRecord): Observable<any> {
    const url = `${this.BASE_URL}/api/Records`;
    return this.http.post<newRecord>(url, newRecord);
  }
}
