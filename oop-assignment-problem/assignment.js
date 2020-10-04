"use strict";
class Course {
    constructor(title, length, coursePrice) {
        this.title = title;
        this.length = length;
        this.coursePrice = coursePrice;
        this.summary = 0;
        this._price = coursePrice;
        this.setSummary();
    }
    set price(price) {
        this._price = price > 0 ? price : 0;
    }
    get price() {
        return this._price;
    }
    setSummary() {
        this.summary = this._price ? this._price * this.length : 0;
    }
    getMessage4Summaries() {
        return `Course: ${this.title}, length: ${this.length}, price: ${this._price}$, costs: ${this.summary.toFixed(2)}S`;
    }
    printSummaryAboutCourse() {
        this.setSummary();
        console.log(this.getMessage4Summaries());
    }
}
const historyCourse = new Course("history", 5, 10);
const grammarCourse = new Course("grammar", 4.2, 20);
console.log(historyCourse);
console.log(grammarCourse);
console.log(historyCourse.printSummaryAboutCourse());
historyCourse.price = 25;
console.log(historyCourse.printSummaryAboutCourse());
class PracticalCourse extends Course {
    constructor(title, length, coursePrice, numOfExercises) {
        super(title, length, coursePrice);
        this.title = title;
        this.length = length;
        this.coursePrice = coursePrice;
        this.numOfExercises = numOfExercises;
    }
    printSummaryAboutCourse() {
        this.setSummary();
        const summaries = this.getMessage4Summaries() + ` num of Exercises: ${this.numOfExercises}`;
        console.log(summaries);
    }
}
const practicalCource = new PracticalCourse("Practical", 0.3, 12.4, 10);
console.log(practicalCource);
class TheoreticalCourse extends Course {
    constructor(title, length, coursePrice) {
        super(title, length, coursePrice);
        this.title = title;
        this.length = length;
        this.coursePrice = coursePrice;
    }
    publish() {
        this.printSummaryAboutCourse();
    }
}
const theoreticalCourse = new TheoreticalCourse("theory", 13.3, 0);
theoreticalCourse.publish();
