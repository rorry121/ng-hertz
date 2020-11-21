import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Marked from 'marked';
import Prism from './ng-language';

@Injectable({
  providedIn: 'root'
})
export class MarkedService {
  constructor(private http: HttpClient) {}

  /**
   * 解析 .md 文件
   * @param url 相对于 assets/markdown 文件目录下 md 文件地址
   */
  resolveMdFile(url: string) {
    return this.http.get(`assets/markdown/components/${url}`, { responseType: 'text' });
  }

  /**
   * 将 md 文件内容转为 html
   * @param mdStr 从 md 文件中获取到的内容
   */
  toHtml(mdStr: string) {
    const rendererMD = new Marked.Renderer();
    Marked.setOptions({
      headerPrefix: 'hz-',
      langPrefix: 'language-',
      renderer: rendererMD,
      highlight: (code: string, lang: string) => {
        return this.highlight(code, lang);
      }
    });
    return Marked(mdStr);
  }

  highlight(code: string, lang: string) {
    return Prism.highlight(code, Prism.languages[lang], lang);
  }
}
