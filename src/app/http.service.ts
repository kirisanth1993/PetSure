import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';

@Injectable()
export class HttpService{
  private server_url: string = "http://localhost:8000/policies"; //Url which handles JSON encoded data

  constructor(private http: Http) {} //Injecting the Http Service


  loaddata(data): Observable<any> {
    let params = new URLSearchParams()
    params.append('policyNumber', data.policyNumber);
    params.append('policyHolder', data.policyHolder);
    params.append('petName', data.petName);
    params.append('vetPractice', data.vetPractice);
    params.append('status', data.currentStatus);
    params.append('vetHubRef', data.vetHubRef);
    params.append('claimRef', data.claimRef);
    params.append('claim', data.claim);
    params.append('dateSubmittedFrom', data.submittedDateFrom);
    params.append('dateSubmittedTo', data.submittedDateTo);

    return this.http.get(this.server_url, {
      params: params
    });
  }

}
