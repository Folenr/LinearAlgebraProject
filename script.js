function print(id,bId) {
    if ( document.getElementById(id).innerHTML === null ||  document.getElementById(id).innerHTML.trim().length === 0) {
    pywebview.api.print(id).then(result => {
        result = result.replace(/\n/g, "<br>");
        document.getElementById(id).innerHTML = result;
        document.getElementById(bId).innerHTML = "▼";
    });
} else {
        document.getElementById(id).innerHTML = null;
         document.getElementById(bId).innerHTML = "►";
}
}
document.getElementById("find").style.visibility='hidden';

function select(value){
    if(value=="find"){
        document.getElementById("find").style.visibility='visible';
    }else if(value == "set"){
        document.getElementById("find").style.visibility='hidden';
    }else{
        document.getElementById("find").style.visibility='hidden';
    }
}

document.getElementById("oneMat").style.visibility='hidden';
document.getElementById("twoMat").style.visibility='hidden';

function MatrixSelect(value){
    if(value=="oneMat"){
        document.getElementById("oneMat").style.visibility='visible';
        document.getElementById("twoMat").style.visibility='hidden';
    }else if(value == "twoMat"){
        document.getElementById("oneMat").style.visibility='visible';
        document.getElementById("twoMat").style.visibility='visible';
    }else{
        document.getElementById("oneMat").style.visibility='hidden';
        document.getElementById("twoMat").style.visibility='hidden';
    }
}

function submit(){
    var id = document.getElementById("find").options[document.getElementById("find").selectedIndex].id;
    var mat1= document.getElementById("oneMat").value;
    var mat2= document.getElementById("twoMat").value;
    if(document.getElementById("find").style.visibility=='visible'){
        if(document.getElementById("twoMat").style.visibility=='visible'){
            if(id == "cramer"){
                pywebview.api.findMat2(mat1,mat2,'cramer').then(result => {
                        result = result.replace(/\n/g, "<br>");
                        document.getElementById("output").innerHTML += result + "<br>";
                    });
            }else if(id == "algebra"){
                pywebview.api.findMat2(mat1,mat2,'algebra').then(result => {
                        result = result.replace(/\n/g, "<br>");
                        document.getElementById("output").innerHTML += result + "<br>";
                    });
            }else{
                document.getElementById("output").innerHTML += "no function was called" + "<br>";
            }

        }else{
            switch(id){
                case 'det':
                    pywebview.api.findMat1(mat1,'det').then(result => {
                        result = result.replace(/\n/g, "<br>");
                        document.getElementById("output").innerHTML += result + "<br>";
                    });
                    break;
                case 'linDep':
                    pywebview.api.findMat1(mat1,'linDep').then(result => {
                        result = result.replace(/\n/g, "<br>");
                        document.getElementById("output").innerHTML += result + "<br>";
                    });
                    break;
                case 'ref':
                    pywebview.api.findMat1(mat1,'ref').then(result => {
                        result = result.replace(/\n/g, "<br>");
                        document.getElementById("output").innerHTML += result + "<br>";
                    });
                    break;
                case 'rref':
                    pywebview.api.findMat1(mat1,'rref').then(result => {
                        result = result.replace(/\n/g, "<br>");
                        document.getElementById("output").innerHTML += result + "<br>";
                    });
                    break;
                case 'inverse':
                    pywebview.api.findMat1(mat1,'inverse').then(result => {
                        result = result.replace(/\n/g, "<br>");
                        document.getElementById("output").innerHTML += result + "<br>";
                    });
                    break;
                case 'diagVerify':
                    pywebview.api.findMat1(mat1,'diagVerify').then(result => {
                        result = result.replace(/\n/g, "<br>");
                        document.getElementById("output").innerHTML += result + "<br>";
                    });
                    break;
                case 'diag':
                    pywebview.api.findMat1(mat1,'diag').then(result => {
                        result = result.replace(/\n/g, "<br>");
                        document.getElementById("output").innerHTML += result + "<br>";
                    });
                    break;
                case 'eigen':
                    pywebview.api.findMat1(mat1,'eigen').then(result => {
                        result = result.replace(/\n/g, "<br>");
                        document.getElementById("output").innerHTML += result + "<br>";
                    });
                    break;
                case 'rowSpace':
                    pywebview.api.findMat1(mat1,'rowSpace').then(result => {
                        result = result.replace(/\n/g, "<br>");
                        document.getElementById("output").innerHTML += result + "<br>";
                    });
                    break;
                case 'colSpace':
                    pywebview.api.findMat1(mat1,'colSpace').then(result => {
                        result = result.replace(/\n/g, "<br>");
                        document.getElementById("output").innerHTML += result + "<br>";
                    });
                    break;
                case 'basisDimension':
                    pywebview.api.findMat1(mat1,'basisDimension').then(result => {
                        result = result.replace(/\n/g, "<br>");
                        document.getElementById("output").innerHTML += result + "<br>";
                    });
                    break;
                default:
                    document.getElementById("output").innerHTML += "no function was called" + "<br>";
                

            }
        }
    } 
}