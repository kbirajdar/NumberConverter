
var getValue1;
var getValue2;
var value;
let digit;
function convert(){
    getValue1 = document.getElementById('getForm').selectedOptions[0].value;
    getValue2 = document.getElementById('getTo').selectedOptions[0].value;
    value=document.getElementById("input1").value;
    digit=" ";
 
    if(getValue1==="Binary"){
        if(getValue2==="Decimal"){
            digit=parseInt(value,2);
        }
        else if(getValue2==="Hexadecimal"){
            digit = parseInt(value, 2).toString(16).toUpperCase();

        }else if(getValue2==="Octal"){
            digit = parseInt(value, 2).toString(8);
            
        }

    }
    console.log(digit);
    // Octal to Other ;
    if(getValue1==="Octal"){
        if(getValue2==="Decimal"){
            digit=parseInt(value,8).toString(10);

        }
        else if(getValue2==="Hexadecimal"){
            digit=parseInt(value,8).toString(16).toUpperCase();

        }else if(getValue2==="Binary"){
            digit=parseInt(value,8).toString(2);
            
        }

    }

    // hexadecimal To Other
    if(getValue1==="Hexadecimal"){
        if(getValue2==="Decimal"){
            digit=parseInt(value,16).toString(10);

        }    
        else if(getValue2==="Binary"){
            digit=parseInt(value, 16).toString(2);

        }else if(getValue2==="Octal"){
            digit=parseInt(value, 16).toString(8);
            
        }

    }

    // Decimal To Other
    if(getValue1==="Decimal"){
        if(getValue2==="Hexadecimal"){
            dight=parseInt(value).toString(16).toUpperCase();

        }
        else if(getValue2==="Binary"){
            digit=parseInt(value).toString(2);

        }else if(getValue2==="Octal"){
            digit=parseInt(value).toString(8);
            
        }

    }

    document.getElementById("input2").value=digit;
    
}


function swap() {
    let inputBase = document.getElementById('getForm');
    let outputBase = document.getElementById('getTo');

    swapStart(inputBase, outputBase);
    

    // swap the values
    let temp = inputBase.value;
    inputBase.value = outputBase.value;
    outputBase.value = temp;


    let tempvar=value;
    document.getElementById("input1").value=digit;
    document.getElementById("input2").value=tempvar;

}

//for swap animation
function swapStart(inputBase, outputBase) {
    inputBase.style.transform = 'translateX(70%)'
    outputBase.style.transform = 'translateX(-70%)'
    setTimeout(() => {
        swapEnd(inputBase, outputBase);
    }, 100);
}

function swapEnd(inputBase, outputBase) {
    inputBase.style.transform = 'translateX(0%)'
    outputBase.style.transform = 'translateX(0%)'
}




