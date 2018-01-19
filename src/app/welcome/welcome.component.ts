import { Component, OnInit } from '@angular/core';
import { GolfCourse} from '../golf-course/golf-course';
import { GolfCourseService} from '../golf-course/golf-course-service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  pageTitle = 'Welcome to your golf card';
  description = 'Please choose a golf course to begin.';
  golfCourses: GolfCourse[];


  constructor(private golfCourseService: GolfCourseService) {

  }

  ngOnInit() {

    this.golfCourseService.getGolfCourses(4, 5, 5).subscribe((golfCourses: GolfCourse[]) => {
      this.golfCourses = golfCourses;

    });

  }

}
