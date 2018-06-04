const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('This is my resolved data.');
  }, 1500);
});

console.log('before');

promise.then((data) => {
  console.log(data);
});

console.log('after');
