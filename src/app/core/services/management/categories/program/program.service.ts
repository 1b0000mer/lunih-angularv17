import { Injectable } from '@angular/core';
import { Program } from '../../../../models/categories/program.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UrlConstant } from '../../../../constants/url.constant';
import { PagedResults } from '../../../../models/common/response-page.model';

@Injectable({
  providedIn: 'root'
})
export class ProgramService {

  private apiUrl: string;

  constructor(
    private http: HttpClient
  ) { 
    this.apiUrl = UrlConstant.API.PROGRAM;
  }

  getAll(): Observable<Program[]> {
    return this.http.get<Program[]>(this.apiUrl);
  }

  getAllPaging(
    page: number,
    size: number,
    search?: string,
    sort?: string,
    column?: string
   ): Observable<PagedResults<Program>> {
    let params = new HttpParams()
    .set('page', page)
    .set('size', size)
    .set('search', search ?? '')
    .set('sort', sort ?? '')
    .set('column', column ?? '');

    return this.http.get<PagedResults<Program>>(this.apiUrl + '/paging', { params });
   }

   create(model: Program): Observable<Program> {
    return this.http.post<Program>(this.apiUrl, model);
   }

   update(model: Program, id: number): Observable<Program> {
    return this.http.put<Program>(this.apiUrl + `/${id}`, model);
   }

   changeStatus(id: number): Observable<Program> {
    return this.http.delete<Program>(this.apiUrl + '/change-status' + `/${id}`);
   }

   delete(id: number): Observable<Program> {
    return this.http.delete<Program>(this.apiUrl + `/${id}`);
   }

}
