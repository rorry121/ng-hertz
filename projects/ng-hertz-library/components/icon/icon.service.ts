import { Injectable, SecurityContext } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { shareReplay } from 'rxjs/operators';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class HzIconService {
  iconRequestMap = new Map<string, Observable<string>>([]);
  iconUrl = 'https://rorry.cn/osp/svg/';
  constructor(private http: HttpClient, private sanitizer: DomSanitizer) {}

  getIconRequest(name: string): Observable<string> {
    let obs = this.iconRequestMap.get(name);
    if (!obs) {
      obs = this.generateRequest(name);
      this.iconRequestMap.set(name, obs);
    }
    return obs;
  }

  generateRequest(name: string) {
    const url = `${this.iconUrl.replace(/\/$/g, '')}/${name}.svg`;
    const safeUrl = this.sanitizer.sanitize(SecurityContext.URL, url);
    return this.http
      .get(safeUrl, {
        responseType: 'text'
      })
      .pipe(shareReplay());
  }
}
