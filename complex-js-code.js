/*

File: complex-js-code.js
Description: This code demonstrates a complex JavaScript program that manages a virtual university system.

*/

// Define Student class
class Student {
  constructor(id, name, major) {
    this.id = id;
    this.name = name;
    this.major = major;
  }

  enroll(course) {
    if (course.capacity > 0) {
      course.enrollments.push(this);
      course.capacity--;
      return true;
    }
    return false;
  }

  drop(course) {
    const index = course.enrollments.findIndex(enrollment => enrollment.id === this.id);
    if (index !== -1) {
      course.enrollments.splice(index, 1);
      course.capacity++;
      return true;
    }
    return false;
  }
}

// Define Course class
class Course {
  constructor(code, name, capacity) {
    this.code = code;
    this.name = name;
    this.capacity = capacity;
    this.enrollments = [];
  }

  getAvailableSeats() {
    return this.capacity;
  }

  isFull() {
    return this.capacity === 0;
  }

  enrollmentsCount() {
    return this.enrollments.length;
  }
}

// Create university object
const university = {
  name: "My University",
  courses: [],
  students: [],

  addCourse(course) {
    this.courses.push(course);
  },

  removeCourse(courseCode) {
    const index = this.courses.findIndex(course => course.code === courseCode);
    if (index !== -1) {
      this.courses.splice(index, 1);
      return true;
    }
    return false;
  },

  registerStudent(student) {
    this.students.push(student);
  },

  dropStudent(studentID) {
    const index = this.students.findIndex(student => student.id === studentID);
    if (index !== -1) {
      this.students.splice(index, 1);
      return true;
    }
    return false;
  },

  findCourseByCode(courseCode) {
    return this.courses.find(course => course.code === courseCode);
  },

  findStudentByID(studentID) {
    return this.students.find(student => student.id === studentID);
  },

  showCourseEnrollments(courseCode) {
    const course = this.findCourseByCode(courseCode);
    if (course) {
      console.log(`Enrollments for ${course.code} - ${course.name}:`);
      course.enrollments.forEach(enrollment => {
        console.log(`- ${enrollment.name} (${enrollment.id})`);
      });
    }
  },

  showStudentEnrollments(studentID) {
    const student = this.findStudentByID(studentID);
    if (student) {
      console.log(`Enrollments for ${student.name} (${student.id}):`);
      this.courses.forEach(course => {
        const index = course.enrollments.findIndex(enrollment => enrollment.id === studentID);
        if (index !== -1) {
          console.log(`- ${course.code} - ${course.name}`);
        }
      });
    }
  }
};

// Create and add courses
const course1 = new Course("CS101", "Introduction to Computer Science", 30);
const course2 = new Course("MAT202", "Linear Algebra", 25);
const course3 = new Course("ENG301", "Advanced English Writing", 20);

university.addCourse(course1);
university.addCourse(course2);
university.addCourse(course3);

// Create and register students
const student1 = new Student(1001, "John Doe", "Computer Science");
const student2 = new Student(1002, "Jane Smith", "Mathematics");
const student3 = new Student(1003, "David Johnson", "English");

university.registerStudent(student1);
university.registerStudent(student2);
university.registerStudent(student3);

// Enroll students in courses
student1.enroll(course1);
student1.enroll(course2);
student2.enroll(course1);
student2.enroll(course3);
student3.enroll(course2);
student3.enroll(course3);

// Console log university information
console.log(`Welcome to ${university.name}! Following are the course enrollments:`);
university.courses.forEach(course => {
  console.log(`${course.code} - ${course.name}`);
  course.enrollments.forEach(enrollment => {
    console.log(`- ${enrollment.name} (${enrollment.id})`);
  });
});

// Examples of other operations:
university.dropStudent(1002);
university.removeCourse("MAT202");
university.showCourseEnrollments("CS101");
university.showStudentEnrollments(1003);