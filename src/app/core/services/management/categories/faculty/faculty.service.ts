import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UrlConstant } from '../../../../constants/url.constant';
import { Observable } from 'rxjs';
import { Faculty } from '../../../../models/categories/faculty.model';
import { PagedResults } from '../../../../models/common/response-page.model';

@Injectable({
  providedIn: 'root'
})
export class FacultyService {

  private apiUrl: string;

  constructor(
    private http: HttpClient
  ) { 
    this.apiUrl = UrlConstant.API.FACULTY;
  }

  getAll(): Observable<Faculty[]> {
    return this.http.get<Faculty[]>(this.apiUrl);
  }

  getAllPaging(
    page: number,
    size: number,
    search?: string,
    sort?: string,
    column?: string
   ): Observable<PagedResults<Faculty>> {
    let params = new HttpParams()
    .set('page', page)
    .set('size', size)
    .set('search', search ?? '')
    .set('sort', sort ?? '')
    .set('column', column ?? '');

    return this.http.get<PagedResults<Faculty>>(this.apiUrl + '/paging', { params });
   }

   create(model: Faculty): Observable<Faculty> {
    return this.http.post<Faculty>(this.apiUrl, model);
   }

   update(model: Faculty, id: number): Observable<Faculty> {
    return this.http.put<Faculty>(this.apiUrl + `/${id}`, model);
   }

   changeStatus(id: number): Observable<Faculty> {
    return this.http.delete<Faculty>(this.apiUrl + '/change-status' + `/${id}`);
   }

   delete(id: number): Observable<Faculty> {
    return this.http.delete<Faculty>(this.apiUrl + `/${id}`);
   }
}
