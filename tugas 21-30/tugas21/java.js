var input = 9 ;
var k = input / 2;
var l = input % 2;
var tengah = k + l;
var output = ' ';

for(var i = 0 ; i <= input; i++ ){
    
    for(var j = input; j >= i ; j--){
      output += ' ';
    }
    for(var m = 1 ; m <= i + (i -1); m++){
      output += '*';
    }
    output += '\n';
}
for(var i = 1 ; i <= input; i++ ){
    
    for(var j = 1; j <= i ; j++){
      output += ' ';
    }
    for(var m = input ; m >= (2*i - input); m--){
      output += '*';
    }
    output += '\n';
}

console.log(output)