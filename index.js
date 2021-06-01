// var char = document.getElementById('#char');
window.addEventListener('keyup', xyz);
//   function xyz(e) {
//     var xyz = `${e.key} ${e.keyCode}`;
//    document.getElementById('char').innerHTML = xyz;
//   // char.innerHTML = xyz;
//   // console.log(e);
// }
const arr = [];
const secretCode = "neha";

function xyz(e) {
  console.log(e.keyCode);
  arr.push(e.key.toLowerCase());
  arr.splice(-secretCode.length - 1, arr.length - secretCode.length);

  if(arr.join('').includes(secretCode)) {
    console.log("Neha Jethwani");
    cornify_add();
  }
  console.log(arr);

}
