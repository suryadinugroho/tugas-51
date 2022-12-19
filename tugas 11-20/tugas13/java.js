let bulansekarang = 5;
let bulankedepan = 7;

function bulanpernikahan(){
  if((bulansekarang + bulankedepan)<= 12){
      let bulanpernikahan = bulansekarang + bulankedepan
      return bulanpernikahan
  }else{
      let bulanpernikahan = (bulansekarang + bulankedepan) % 12
      return bulanpernikahan
  }
}

console.log(bulanpernikahan())