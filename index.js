// var char = document.getElementById('#char');
window.addEventListener('keyup', xyz);
  function xyz(e) {
    var xyz = `${e.key} ${e.keyCode}`;
   document.getElementById('char').innerHTML = xyz;
  // char.innerHTML = xyz;
  // console.log(e);
}
