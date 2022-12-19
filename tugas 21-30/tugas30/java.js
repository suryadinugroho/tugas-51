let nilai = 11;
let x = 2;

function input(){
    let penanda = 0;
  for(let x = 2 ; x <= nilai ; x++){
    if(nilai % x == 0){
        penanda++;
    }
  }
  if(penanda == 1){
    console.log("prima")
  }else{
    console.log("bukan prima")
  }
}

(input(nilai))


