import { observe } from '../lib/observe';
export function observer() {
  return function(target, property, descriptor) {
    let isDecorated = false;
    console.log('ggg', descriptor.value);
    return {
      configurable: true,
      get() {
        if (!isDecorated) {
          isDecorated = true;
          console.log(descriptor.value, target[`_${property}`]);
        } else {
          var a = { count: 1 };
          observe(this, a);
          return a;
        }
      }
    };
  };
}
