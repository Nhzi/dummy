const object = {
  size: "big",
  weight: "true",
  nomenclature: "Emmanuel",
};

function printObj() {
  console.log("Event Started");
  console.log(object.weight);
  return "done";
}

const strin = printObj();

function printS() {
  console.log(strin);
}

function ofc(param = 1) {
  console.log(param * 16);
  return "OK";
}
const stri = ofc();
printObj();
printS();
ofc();
ofc(2);
ofc(3);
ofc(4);
ofc(5);

console.log(`All files ${stri}`)