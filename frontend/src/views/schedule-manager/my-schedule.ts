import { customElement } from '@aurelia/runtime-html';
import template from './my-schedule.html';
import '@aurelia-mdc-web/all';
import { inject } from 'aurelia';
import { SharedService, Course } from '../../resources/shared-service';

@inject(SharedService)
@customElement({
  name: 'my-schedule',
  template,
})
export class MySchedule {
  public title: string = 'My Schedule';
  public schedule: { day: string; time: string; course: string }[] = [];

  private weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

  constructor(private sharedService: SharedService) {}

  attached() {
    const timeSlots = ['08:00 AM', '10:00 AM', '01:00 PM', '03:00 PM'];

    // On récupère les cours inscrits en utilisant uniquement les IDs de cours
    const enrolledCourseIds = this.sharedService.getEnrolledCourses(); 

    const courses = this.sharedService.getCourses();

    // Automatiquement assigner les cours au planning
    this.schedule = enrolledCourseIds
      .map(courseId => this.sharedService.getCourses().find(course => course.id === courseId)) // Récupérer les objets Course complets
      .filter((course): course is Course => !!course) // Filtrer les valeurs indéfinies
      .map((course, index) => ({
        day: this.weekDays[index % this.weekDays.length], // Répartition des jours de la semaine
        time: timeSlots[index % timeSlots.length],       // Répartition des créneaux horaires
        course: course.name,
      }));
  } 
}
