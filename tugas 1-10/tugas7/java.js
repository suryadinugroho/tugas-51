function kuadran(x , y){
  if (x >= 0){
    if(y >= 0){
      console.log("Kuadran I")
    }else{
      console.log("Kuadran IV")
    }
 }else{
    if(y >= 0){
      console.log("Kuadran II")
    }else{
      console.log("Kuadran III")
    }
 }
 
}
console.log(kuadran(10, -20))