function descendingOrder(n){
  n=n.toString();
  n=n.split("");
  n=n.sort(function(a,b){
    return b-a;
  });
  return Number(n.join(""));
}
console.log(descendingOrder(0));