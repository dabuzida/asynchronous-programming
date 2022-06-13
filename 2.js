function p(id, ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(id + " resolved ok!");
    }, ms);
  });
}
// callstack, background, task queue에서 p(1), p(2), p(3)이
// 순서대로 background에 들어가서 진행됨
console.log("start");
p(1, 3000)
  .then((resolve) => {
    console.log(resolve);
    return p(2, 5000);
  })
  .then((resolve) => {
    console.log(resolve);
    return p(3, 1000);
  })
  .then((resolve) => {
    console.log(resolve);
    console.log("end");
  });
console.log("end?");
