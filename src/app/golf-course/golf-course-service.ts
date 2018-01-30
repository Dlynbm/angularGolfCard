import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {GolfCourse} from './golf-course';
import {catchError} from 'rxjs/operators';
import {map} from 'rxjs/operators/map';
import {ApiReturn} from './api.return';



@Injectable()
export class GolfCourseService {

  url = 'https://golf-courses-api.herokuapp.com';
  constructor(private httpClient: HttpClient) {
  }

  getGolfCourses(): Observable<ApiReturn> {
    return this.httpClient.post<ApiReturn>(`${this.url}`, {
      latitude: 40.396419,
      longitude: -111.9328359,
      radius: 25
    });
  }
  getSelectedCourse(courseId):  Observable<GolfCourse> {
    return this.httpClient.get<any>( `${this.url}/courses/${courseId}`)
      .pipe(map( response => response.course));
  }
}
