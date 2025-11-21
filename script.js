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

function select(value){
    document.getElementById("find").style.display = "none";
    document.getElementById("set").style.display = "none";
    document.getElementById("oneMat").style.display = "none";
    document.getElementById("twoMat").style.display = "none";
    document.getElementById("rows").style.display = "none";
    document.getElementById("cols").style.display = "none";
    document.getElementById("matrixInput").style.display = "none";
    document.getElementById("opr").style.display = "none";
    if(value=="find"){
        document.getElementById("find").style.display = "inline";
        document.getElementById("set").style.display = "none";
        document.getElementById("setMat").style.display = "none";
    }else if(value == "set"){
        document.getElementById("find").style.display = "none";
        document.getElementById("set").style.display = "inline";
        document.getElementById("setMat").style.display = "inline";
    }else{
        document.getElementById("find").style.display = "none";
        document.getElementById("set").style.display = "none";
        document.getElementById("setMat").style.display = "none";
    }
}

document.getElementById("find").style.display = "none";
document.getElementById("set").style.display = "none";
document.getElementById("setMat").style.display = "none";
document.getElementById("oneMat").style.display = "none";
document.getElementById("twoMat").style.display = "none";
document.getElementById("rows").style.display = "none";
document.getElementById("cols").style.display = "none";
document.getElementById("matrixInput").style.display = "none";
document.getElementById("opr").style.display = "none";
document.getElementById("setFun").style.display = "none";

function funSelect(value){
    document.getElementById("rows").style.display = "none";
    document.getElementById("cols").style.display = "none";
    document.getElementById("matrixInput").style.display = "none";
    if(value=="oneMat"){
        document.getElementById("oneMat").style.display = "inline";
        document.getElementById("twoMat").style.display = "none";
    }else if(value == "twoMat"){
        document.getElementById("oneMat").style.display = "inline";
        document.getElementById("twoMat").style.display = "inline";
    }else{
        document.getElementById("oneMat").style.display = "none";
        document.getElementById("twoMat").style.display = "none";
    }
}
function setSelect(value){
    if(value == "set"){
        document.getElementById("oneMat").style.display = "none";
        document.getElementById("rows").style.display = "inline";
        document.getElementById("cols").style.display = "inline";
        document.getElementById("matrixInput").style.display = "inline";
        document.getElementById("twoMat").style.display = "none";
    }else if(value == "setFun"){
        document.getElementById("setFun").style.display = "inline";
        document.getElementById("oneMat").style.display = "none";
        document.getElementById("twoMat").style.display = "none";
        document.getElementById("rows").style.display = "none";
        document.getElementById("cols").style.display = "none";
        document.getElementById("matrixInput").style.display = "none";
    }else{
        document.getElementById("oneMat").style.display = "none";
        document.getElementById("twoMat").style.display = "none";
        document.getElementById("rows").style.display = "none";
        document.getElementById("cols").style.display = "none";
        document.getElementById("matrixInput").style.display = "none";
    }
}

function setFunSelect(value){
    if(value == "twoMat"){
        document.getElementById("oneMat").style.display = "inline";
        document.getElementById("opr").style.display = "inline";
        document.getElementById("twoMat").style.display = "inline";
    }else{
        document.getElementById("oneMat").style.display = "inline";
        document.getElementById("opr").style.display = "none";
        document.getElementById("twoMat").style.display = "none";
    }
}

function opration(){
    if(document.getElementById("find").options[document.getElementById("find").selectedIndex].id=="algebra"){
        document.getElementById("opr").style.display = "inline";
    }else{
        document.getElementById("opr").style.display = "none";
}
}

function submit(){
    var id = document.getElementById("find").options[document.getElementById("find").selectedIndex].id;
    var mat1 = document.getElementById("oneMat").value;
    var mat2 = document.getElementById("twoMat").value;
    var opr = document.getElementById("opr").value;
    if(document.getElementById("find").style.display == "inline"){
        if(document.getElementById("twoMat").style.display == "inline"){
            if(id == "cramer"){
                pywebview.api.findMat2(mat1,mat2,'cramer',opr).then(result => {
                        result = result.replace(/\n/g, "<br>");
                        document.getElementById("output").innerHTML += result + "<br>";
                    });
            }else if(id == "algebra"){
                pywebview.api.findMat2(mat1,mat2,'algebra',opr).then(result => {
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
    } else if(document.getElementById("set").style.display == "inline"){
        if(document.getElementById("set").value == "set"){
            setMat(document.getElementById("setMat").value)
        }else if(document.getElementById("set").value == "setFun"){
            var id = document.getElementById("setFun").options[document.getElementById("setFun").selectedIndex].id;
            var mat = document.getElementById("setMat").value;
            switch(id){
                case 'ref':
                    pywebview.api.setMat(mat,'ref',mat1).then(response => {
                    response = response.replace(/\n/g, "<br>");
                    document.getElementById("output").innerHTML += response;
                    });;
                    break;
                case 'rref':
                    pywebview.api.setMat(mat,'rref',mat1).then(response => {
                    response = response.replace(/\n/g, "<br>");
                    document.getElementById("output").innerHTML += response;
                    });;
                    break;
                case 'inverse':
                    pywebview.api.setMat(mat,'inverse',mat1).then(response => {
                    response = response.replace(/\n/g, "<br>");
                    document.getElementById("output").innerHTML += response;
                    });;
                    break;
                case 'algebra':
                    pywebview.api.setMat(mat,'algebra',mat1,mat2,opr).then(response => {
                    response = response.replace(/\n/g, "<br>");
                    document.getElementById("output").innerHTML += response;
                    });;
                    break;
                }
        }
    }
}

function setMat(mat1) {
    let row = parseInt(document.getElementById("rows").value);
    let col = parseInt(document.getElementById("cols").value);
    let text = document.getElementById("matrixInput").value.trim();
    let values = text.split("\n").map(line =>
        line.split(" ").map(Number)
    );
    window.pywebview.api.createMatrix(col, row, values,mat1).then(response => {
        response = response.replace(/\n/g, "<br>");
        document.getElementById("output").innerHTML += response;
    });
}
