function print(id) {
    if ( document.getElementById(id).innerHTML === null ||  document.getElementById(id).innerHTML.trim().length === 0) {
    pywebview.api.print(id).then(result => {
        result = result.replace(/\n/g, "<br>");
        document.getElementById(id).innerHTML = result;
    });
} else {
        document.getElementById(id).innerHTML = null;
}
}
