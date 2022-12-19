let n = 5;

for (i = 0 ; i < n ; i++){
    for(j = 0 ; j < n ; j++){
        if( (i = j)|| (i + j == n-1)){
            console.log(j+1)
        }else{
            console.log(" ")
        }
    }
    console.log("\n")
}