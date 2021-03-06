import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { ImageItem } from '../../model/image-item';

@Injectable({
  providedIn: 'root'
})
export class ImageDataService {

  private imageDataUrl = 'https://picsum.photos/v2/list';


  constructor(private http: HttpClient) { }

  getImages(pageNo: number, itemLimit: number) : Observable<ImageItem[]> {
    const endpoint = `${this.imageDataUrl}?random=1&page=${pageNo}&limit=${itemLimit}`;

    return this.http.get<ImageItem[]>(endpoint)
      .pipe(
        tap(_ => console.log('fetched images')),
        catchError(this.handleError<ImageItem[]>('getImages', []))
      );
  }

/**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }  

}
