var num=5
if(num<0){
    console.log("factorial not found")
}
else if(num==0){
    console.log("factorial is 1")
}
else{
    let fact=1
    for(let i=1;i<=num;i++){
        fact=fact*i
    }
    console.log(fact)
}