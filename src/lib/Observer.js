import { Subject } from './Subject';
import { defineReactive } from './defineReactive';

export class Observer {
  constructor(value) {
    this.subject = new Subject();
    this._walk(value);
  }

  _walk(obj) {
    const keys = Object.keys(obj);
    for (let i = 0; i < keys.length; i++) {
      defineReactive(this.subject, obj, keys[i]);
    }
  }

  subscribe(fn) {
    return this.subject.subscribe(fn);
  }
}
