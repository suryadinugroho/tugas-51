const expr ='1/Rgab=1/R1+1/R2+1/R3';
switch (expr) {
  case 'Rgab=R1+R2+R3':
    console.log('Seri');
    break;
  case '1/Rgab=1/R1+1/R2+1/R3':
    console.log('Paralel');
    break;
  default:
    console.log(`${expr} Pilihan salah!!.`);
}

