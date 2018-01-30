import { Component, OnInit } from '@angular/core';
import { GolfCourse} from '../golf-course/golf-course';
import { GolfCourseService} from '../golf-course/golf-course-service';
import {ApiReturn} from '../golf-course/api.return';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  pageTitle = 'Welcome to your golf card';
  description = 'Please choose a golf course to begin.';
  golfCourses: GolfCourse[];
  selected = 0;
  selectedTeeType: any;
  selectedGolfCourse: any;
  GolfCourse;


  constructor(golfCourseService: GolfCourseService) {

  }

  ngOnInit() {
    this.golfCourseService.getGolfCourse().subscribe((golfCourses: ApiReturn) => {
      this.golfCourses = golfCourses.courses;
      console.log(golfCourses);
    });
  }
}

//   runThis(courseId: Observable<GolfCourse> {
//   return this.golfCourseService.getcourse(this.selected).subscribe(next(golfCourses:GolfCourse) => {
//     console.log(golfCourses);
//     this.golfCourse = golfCourse;
//
// });


