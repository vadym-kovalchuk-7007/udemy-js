class Course {
  protected summary: number = 0;
  protected _price: number = 0;
  constructor(
    public title: string,
    public length: number,
    readonly coursePrice: number
  ) {
    this.price = coursePrice;
    this.setSummary();
  }

  set price(price: number) {
    this._price = price > 0 ? price : 0;
  }

  get price(): number {
    return this._price;
  }
  protected setSummary(): void {
    this.summary = this._price ? this._price * this.length : 0;
  }

  protected getMessage4Summaries(): string {
    return `Course: ${this.title}, length: ${this.length}, price: ${
      this.price
    }$, costs: ${this.summary.toFixed(2)}S`;
  }

  printSummaryAboutCourse(): void {
    this.setSummary();
    console.log(this.getMessage4Summaries());
  }
}

const historyCourse = new Course("history", 5, 10);
const grammarCourse = new Course("grammar", 4.2, 20);

console.log(historyCourse);
console.log(grammarCourse);

console.log(historyCourse.printSummaryAboutCourse());

historyCourse.price = -25;
console.log(historyCourse.printSummaryAboutCourse());

class PracticalCourse extends Course {
  constructor(
    public title: string,
    public length: number,
    readonly coursePrice: number,
    public numOfExercises: number
  ) {
    super(title, length, coursePrice);
  }

  printSummaryAboutCourse(): void {
    this.setSummary();
    const summaries =
      this.getMessage4Summaries() + ` num of Exercises: ${this.numOfExercises}`;
    console.log(summaries);
  }
}

const practicalCource = new PracticalCourse("Practical", 0.3, 12.4, 10);
console.log(practicalCource);

class TheoreticalCourse extends Course {
  constructor(
    public title: string,
    public length: number,
    readonly coursePrice: number
  ) {
    super(title, length, coursePrice);
  }

  publish() {
    this.printSummaryAboutCourse();
  }
}

const theoreticalCourse = new TheoreticalCourse("theory", 13.3, 0);
theoreticalCourse.publish();
