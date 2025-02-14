import { customElement } from '@aurelia/runtime-html';
import { IRouteableComponent } from '@aurelia/router';
import { inject } from 'aurelia';
import template from './course-manager.html';
import { SharedService, Course } from '../../resources/shared-service';

@inject(SharedService)
@customElement({
  name: 'course-manager',
  template
})
export class CourseManager implements IRouteableComponent {
  public showAvailableCourse: boolean = false;
  gradingAssignmentsVisible: boolean = false;
  scheduleClassesVisible: boolean = false;

  public newCourse: Course = { id: '', name: '', description: '' };
  public courses: Course[] = [];
  public enrolledCourses: Course[] = [];

  constructor(private sharedService: SharedService) {}

  // Méthode pour charger les cours disponibles et ceux auxquels l'utilisateur est inscrit
  async loading(): Promise<void> {
    this.courses = this.sharedService.getCourses();
    this.enrolledCourses = this.sharedService.getEnrolledCourses().map(courseId =>
      this.courses.find(c => c.id === courseId)
    ).filter(Boolean) as Course[];
  }

  // Méthode pour s'inscrire à un cours
  enroll(course: Course): void {
    this.sharedService.enrollInCourse(course.id); // Juste l'ID du cours
    this.enrolledCourses.push(course);
    alert(`You have enrolled in: ${course.name}`);
  }

  // Afficher les cours disponibles
  public showAvailableCourses() {
    this.showAvailableCourse = true;
  }

  // Ajouter un nouveau cours
  addCourse(): void {
    if (this.newCourse.name && this.newCourse.description) {
      this.newCourse.id = (this.courses.length + 1).toString(); // Attribution d'un ID
      this.sharedService.addCourse({ ...this.newCourse });
      this.newCourse = { id: '', name: '', description: '' }; // Réinitialiser le formulaire
      alert('New course added successfully!');
    } else {
      alert('Please provide both a course name and description.');
    }
  }

  // Méthode pour gérer les évaluations
  gradeAssignments(course: Course): void {
    this.gradingAssignmentsVisible = true;
    alert(`Grading assignments for ${course.name}`);
  }

  // Méthode pour planifier des cours
  scheduleClass(course: Course): void {
    this.scheduleClassesVisible = true;
    alert(`Scheduling classes for ${course.name}`);
  }
}
