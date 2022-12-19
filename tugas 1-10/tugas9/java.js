//let peserta = 8

function minibus(peserta){
  if (peserta > 7){
    let minibus = Math.round (peserta / 7) + 1;
    return minibus
  }else if( peserta > 0){
     let minibus = 1;
     return minibus
  }
}

console.log(minibus(8))
