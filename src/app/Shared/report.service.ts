import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ReportService {
  reportServer: string | null = environment.url;
  svrURL: string = '';

  constructor(private httpClient: HttpClient) {}

  getMemberReport() {
    this.svrURL = this.reportServer + '/Reports/Member/Member';
    return this.httpClient.get(this.svrURL, { responseType: 'blob' });
  }
}
