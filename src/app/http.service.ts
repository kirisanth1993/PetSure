import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';

@Injectable()
export class HttpService{
  private server_url: string = "http://localhost:8000/policies"; //Url which handles JSON encoded data

  constructor(private http: Http) {} //Injecting the Http Service


  loaddata(data): Observable<any> {
    let params = new URLSearchParams();

    if (data.policyNumber){
      params.append('policyNumber', data.policyNumber);
    };

    if (data.policyHolder){
      params.append('policyHolder', data.policyHolder);
    };

    if (data.petName){
      params.append('petName', data.petName);
    };

    if (data.vetPractice){
      params.append('vetPractice', data.vetPractice);
    };

    if (data.currentStatus){
      if (data.currentStatus!='Any status'){
        params.append('status', data.currentStatus);
      }
    };

    if (data.vetHubRef){
      params.append('vetHubRef', data.vetHubRef);
    };

    if (data.claimRef){
      params.append('claimRef', data.claimRef);
    };

    if (data.claim){
      params.append('claim', data.claim);
    };

    if (data.submittedDateFrom){
      params.append('dateSubmittedFrom', data.submittedDateFrom);
    };

    if (data.submittedDateTo){
      params.append('dateSubmittedTo', data.submittedDateTo);
    };


    return this.http.get(this.server_url, {
      params: params
    });
  }

}
