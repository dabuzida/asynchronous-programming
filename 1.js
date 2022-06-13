let p = new Promise((resolve, reject) => {
  //   setTimeout(resolve, 1000);
  //   setTimeout(resolve(121), 1000);
  setTimeout(() => resolve(121), 1000);
});
console.log(p);
p.then((resolve) => console.log(resolve));
