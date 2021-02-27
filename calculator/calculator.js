let s="";
let input = document.getElementById("input");

function clk(that){
    const n = that.innerHTML;
    display(n);
}
function display(n){
    s+=n;
    input.value = s;
}

function equal(){
    let k="";
    try{
    k = eval(s);
    s=k;
    input.value=k;
    }
    catch(err){
        input.value="Wrong Input";
    }
    
}

function clr(){
    s="";
    input.value=s;
}
clr();