let uid = 0;

export class Subscription {
  constructor(subject, subjectSubscription) {
    this.subject = subject;
    this.subjectSubscription = subjectSubscription;
  }

  unsubscribe() {
    this.subject.unsubscribe(this.subjectSubscription);
  }
}

export class Subject {
  constructor() {
    this.id = uid++;
    this.subscribers = [];
  }

  subscribe(fn) {
    this.subscribers.push(fn);
    return new Subscription(this, fn);
  }

  unsubscribe(fn) {
    const findIndex = this.subscribers.indexOf(fn);
    if (findIndex >= 0) {
      this.subscribers.splice(findIndex, 1);
    }
  }

  notify() {
    const subscribers = this.subscribers.slice();
    subscribers.forEach(subjectSubscription => {
      subjectSubscription.call(null);
    });
  }
}
