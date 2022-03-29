import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private httpClient: HttpClient) {
  }

  get(cid?: string):Observable<any> {
    return this.httpClient.get(`api/city${!cid ? '' : '/' + cid}`);
  }
}
