import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { environment } from '../../../../environments/environment.prod';
import { Observable } from 'rxjs';

// This class is designed to optimize the code.
@Injectable()
export class BaseApi {

  baseUrl: string = environment.config.baseUrl;
  authUrl: string = environment.config.authUrl;
  authUrlReqres: string = environment.config.authUrlReqres;
  fApi: string = environment.config.fakeApi;
  urlvar: string;

  constructor (public http: HttpClient) {}
  // Method accepts two arguments.
  // The first argument helps determine URL API.
  // The second argument optional specifies the end of the URL address.
  private getUrl (config: boolean, url: string): string {
    return config ? this.urlvar = this.fApi + url : this.urlvar = this.authUrlReqres + url;
  }
  // Method performs a Get request.
  public get (config: boolean, url: string = ''): Observable <any> {
    return this.http.get(this.getUrl(config, url));
  }
  // method executes a Post request
  public post ( config: boolean, url: string = '', params ): Observable <any> {
    console.log(this.http);
    return this.http.post( this.getUrl(config, url), params );
  }
}
