var curriedSum = function (a){
   return function(b){
      if (a > b){
        return a;
      }else{
        return b;
      }
   }
}
var result = curriedSum(3)(7);
console.log(result);

var sentence = "hello, is it me you're looking for?"
var array = sentence.split(" ");
console.log(array);
array.map(word => word[0].toUpperCase()+word.substring(1));

var names = ["Johnny Depp", "Lindsay Lohan", "Donald Trump", "joe", "ally"];
names.filter(function(f){
  if(f.length <= 5){
    return true;
  }else{
    return false;
  }
  });
