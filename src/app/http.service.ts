import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';

@Injectable()
export class HttpService {
  private server_url: string = "http://192.168.200.128:46808/api/vethubclaims"; //Url which handles JSON encoded data
  private server_url_claim: string = "http://192.168.200.128:46808/api/vethubclaims"; //Url which handles JSON encoded data
  // private server_url: string = "http://localhost:8000/policies"; //Url which handles JSON encoded data
  // private server_url_claim: string = "http://localhost:8000/claimdetails"; //Url which handles JSON encoded data

  constructor(private http: Http) { } //Injecting the Http Service


  loaddata(data): Observable<any> {
    let params = new URLSearchParams();
    let paramsArray = [
      "policyNumber",
      "policyHolder",
      "petName",
      "vetPractice",
      "vetHubRef",
      "claimRef",
      "claim",
      "dateSubmittedFrom",
      "dateSubmittedTo",
      "startIndex",
      "endIndex",
      "sort"
    ];
    for (let param of paramsArray) {
      if (data[param]) {
        params.append(param, data[param]);
      }
    }
    if (data.currentStatus) {
      if (data.currentStatus != 'Any status') {
        params.append('status', data.currentStatus);
      }
    };
    return this.http.get(this.server_url, {
      params: params
    });
  }

  loadclaimData(claimsData): Observable<any> {
    let params = new URLSearchParams();
    let claimsParamsArray = [
      "policyNum",
      "info"
    ];
    for (let param of claimsParamsArray) {
      params.append(param, claimsData[param]);
    }
    return this.http.get(this.server_url_claim, {
      params: params
    });
  }
  loadAttachmentData(attachmentData): Observable<any> {
    let params = new URLSearchParams();
    let attachmentParamsArray = [
      "policyNum",
      "info"
    ];
    for (let param of attachmentParamsArray) {
      params.append(param, attachmentData[param]);
    }
    return this.http.get(this.server_url, {
      params: params
    });
  }
}
