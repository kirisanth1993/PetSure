import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class HttpService{
  private _url: string = "http://example.com"; //Url which handles JSON encoded data

  constructor(private _http: Http) {} //Injecting the Http Service

  sendData(data): Observable<Object> {

    let encoded_data = JSON.stringify({ data });
    let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8'})
    let options = new RequestOptions({ headers: headers});

    return this._http.post(encoded_data, this._url, options).map(
      (res: Response) => res.json () || {}
    );

  }
}
