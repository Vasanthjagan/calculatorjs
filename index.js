while(true){
    var a=parseInt(prompt("Enter the first number"));
    var b=parseInt(prompt("Enter the second number"));
    var op=prompt("Enter the operator");
    var res;
    if(op==='+'){
        res=a+b;
        document.getElementById('output').innerHTML+='output is '+res;
        break;
    }
    else if(op==='-'){
        res=a-b;
        document.getElementById('output').innerHTML+='output is '+res;
        break;
    }
    else if(op==='*'){
        res=a*b;
        document.getElementById('output').innerHTML+='output is '+res;
        break;
    }
    else if(op==='/'){
        res=a/b;
        document.getElementById('output').innerHTML+='output is '+res;
        break;
    }
    else{
        res='invalid op';
    }
    console.log("output",+res);
}