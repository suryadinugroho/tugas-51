let hariini = 3;
let hari = 3;

if(hariini > hari){
    belakang = hariini - hari;
}else{
    belakang = 7 - (hari - hariini)
}
switch (belakang){
    case 1:
    harilalu = ("senin");
    break;
    case 2:
    harilalu = ( "selasa");
    break;
    case 3:
    harilalu =  ("rabu");
    break;
    case 4:
    harilalu = ("kamis");
    break;
    case 5:
    harilalu = ("jumat");
    break;
    case 6:
    harilalu = ("sabtu")
    break;
    case 7:
    harilalu = ("minggu")
    break;
    default:
    harilalu = ("inputan salah")
  }
  
  
  console.log(harilalu)