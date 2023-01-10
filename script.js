function love(){
    let n = Math.random();
    n = n * 100;
    n = Math.floor(n) + 1;
    
     document.querySelector("h3").innerHTML= n + "%";
}

