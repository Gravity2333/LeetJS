(async () => {
  const interface = require("readline").createInterface({
    input: process.stdin,
  });
  const iterator = interface[Symbol.asyncIterator]();
  const readLine = async () => (await iterator.next())?.value;

  while (1) {
    console.log(await readLine());
  }
})();
