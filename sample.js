const obj = {
  count: 5,
  show() {
    console.log(this.count);
  },
};

function debounce(fn, delay) {
  let timer;

  return function (...args) {

    const context = this; // capture the caller's 'this'

    clearTimeout(timer);
    timer = setTimeout(() => {
      console.log(args);

      fn.apply(context, args); // use context, not obj
    }, delay);
  };
}

const debounceLog = debounce(console.log, 300);

obj.show = debounce(obj.show, 300);

// Now this works correctly:
obj.show();   // prints 5 after 300ms

