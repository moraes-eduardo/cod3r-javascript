// var tem escopo global e função

{
  {
    {
      var sera = "sera???";
      console.log(sera);
    }
  }
}
console.log(sera);

//Visível apenas dentro da função
function teste() {
  var local = 123;
  console.log(local);
}
teste();
console.log(local);
