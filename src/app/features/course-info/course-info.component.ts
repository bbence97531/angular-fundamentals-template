import { Component } from '@angular/core';
import { mockedCoursesList } from '../../shared/mocks/mocks';

interface Course {
  id: string;
  title: string;
  description: string;
  creationDate: string;
  duration: number;
  authors: string[];
}

@Component({
  selector: 'app-course-info',
  templateUrl: './course-info.component.html',
  styleUrls: ['./course-info.component.scss']
})
export class CourseInfoComponent {
  course: Course;

  constructor() {
    this.course = mockedCoursesList[0];
}
}
