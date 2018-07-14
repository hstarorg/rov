import { Observer } from './Observer';

export function observe(reactCompIns, value) {
  var ob = new Observer(value);
  return ob.subscribe(() => {
    reactCompIns.forceUpdate();
  });
}
