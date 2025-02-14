import { singleton } from 'aurelia';

// Interfaces pour plus de clarté
export interface Course {
  id: string;
  name: string;
  description: string;
}

export interface Exam {
  subject: string;
  date: string;
}

export interface Grade {
  student: string;
  course: string;
  grade: string;
}

@singleton()
export class SharedService {
  private courses: Course[] = [
    { id: '1', name: 'Computer Science 101', description: 'Introduction to Computer Science.' },
    { id: '2', name: 'Mathematics 101', description: 'Introduction to Algebra.' },
    { id: '3', name: 'Computer Architecture', description: 'Learn about CPU design and memory hierarchy.' },
  ];

  private exams: Exam[] = [];
  private grades: Grade[] = [];
  private enrollments: string[] = [];  // Liste des cours auxquels l'utilisateur est inscrit

  // Méthodes de gestion des cours
  public getCourses(): Course[] {
    return this.courses;
  }

  public addCourse(course: Course): void {
    this.courses.push(course);
  }

  // Méthodes pour l'enrôlement
  public enrollInCourse(courseId: string): void {
    if (!this.enrollments.includes(courseId)) {
      this.enrollments.push(courseId);  // Ajouter le cours à la liste des cours inscrits
    }
  }

  public getEnrolledCourses(): string[] {
    return this.enrollments;  // Retourne la liste des cours inscrits
  }

  // Méthodes pour les examens
  public addExam(exam: Exam): void {
    this.exams.push(exam);
  }

  public getExams(): Exam[] {
    return this.exams;
  }

  public getExamsByCourses(courses: string[]): Exam[] {
    return this.exams.filter(exam => courses.includes(exam.subject));
  }

  // Méthodes pour les notes
  public addGrade(grade: Grade): void {
    this.grades.push(grade);
  }

  public getGrades(): Grade[] {
    return this.grades;
  }

  public getGradesByStudent(student: string): Grade[] {
    return this.grades.filter(grade => grade.student === student);
  }
}
