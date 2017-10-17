import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';

@Injectable()
export class HttpService{
  private server_url: string = "http://192.168.200.128:46808/api/vethubclaims"; //Url which handles JSON encoded data

  constructor(private http: Http) {} //Injecting the Http Service


  loaddata(data): Observable<any> {
    let params = new URLSearchParams();
    let paramsArray = ["policyNumber", "policyHolder", "petName", "vetPractice", "vetHubRef", "claimRef", "claim", "dateSubmittedFrom", "dateSubmittedTo", "startIndex", "endIndex","sort"];
    for (let param of paramsArray){
      if(data[param]){
        params.append(param, data[param]);
      }
    }
    if (data.currentStatus){
      if (data.currentStatus!='Any status'){
        params.append('status', data.currentStatus);
      }
    };
    return this.http.get(this.server_url, {
      params: params
    });
  }

}
