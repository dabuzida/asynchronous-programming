async function run() {
  function p(id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(id + " resolved ok!");
      }, 1000);
    });
  }
  console.log("start");
  let r1 = await p("r1");
  console.log(r1);
  let r2 = await p("r2");
  console.log(r2);
  console.log("end");
}
run();
