import { Component, OnInit } from '@angular/core';
import {GolfCourseService} from '../golf-course/golf-course-service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  golfObject;
  pageTitle = 'Welcome to your golf card!';
  description = 'Please choose a golf course to begin';
  cardCourses;
  selectedCourse;
  teeType;

  constructor(private golfData: GolfCourseService) {
  }

  ngOnInit() {
    this.golfObject = this.golfData.getGolfData().subscribe(data => {
      this.golfObject = data;
      this.cardCourses = this.golfObject.courses;
    });

  }

  setCourse(course) {
    this.golfData.setCurrentCourse(course);
    this.golfData.getCourse().subscribe(p => {
      this.selectedCourse = p;
      this.golfData.setCurrentCourse(p);
      console.log(this.selectedCourse);
    });
    this.pageTitle = course.name;

  }
  setTeeType(tee) {
    this.teeType = tee;
    this.golfData.getSetTeeType(tee);
  }

}
