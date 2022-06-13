function p(id, ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(id + " resolved ok!");
    }, ms);
  });
}
console.log("start");
p(1, 3000).then((resolve) => console.log(resolve));
p(2, 2000).then((resolve) => console.log(resolve));
p(3, 1000).then((resolve) => console.log(resolve));
console.log("end");
