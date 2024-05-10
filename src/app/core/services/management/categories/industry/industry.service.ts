import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UrlConstant } from '../../../../constants/url.constant';
import { Industry } from '../../../../models/categories/industry.model';
import { PagedResults } from '../../../../models/common/response-page.model';

@Injectable({
  providedIn: 'root'
})
export class IndustryService {

  private apiUrl: string;

  constructor(
    private http: HttpClient
  ) { 
    this.apiUrl = UrlConstant.API.INDUSTRY;
  }

  getAll(): Observable<Industry[]> {
    return this.http.get<Industry[]>(this.apiUrl);
  }

  getAllPaging(
    page: number,
    size: number,
    search?: string,
    sort?: string,
    column?: string
   ): Observable<PagedResults<Industry>> {
    let params = new HttpParams()
    .set('page', page)
    .set('size', size)
    .set('search', search ?? '')
    .set('sort', sort ?? '')
    .set('column', column ?? '');

    return this.http.get<PagedResults<Industry>>(this.apiUrl + '/paging', { params });
   }

   create(model: Industry): Observable<Industry> {
    return this.http.post<Industry>(this.apiUrl, model);
   }

   update(model: Industry, id: number): Observable<Industry> {
    return this.http.put<Industry>(this.apiUrl + `/${id}`, model);
   }

   changeStatus(id: number): Observable<Industry> {
    return this.http.delete<Industry>(this.apiUrl + '/change-status' + `/${id}`);
   }

   delete(id: number): Observable<Industry> {
    return this.http.delete<Industry>(this.apiUrl + `/${id}`);
   }

}
