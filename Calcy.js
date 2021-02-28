window.addEventListener("DOMContentLoaded", function() {
    var input = document.getElementById("input");
    document.getElementById("clr").addEventListener("click", function() {
        input.value = null;
    });      
         
                            document.getElementById("del").addEventListener("click", function() {
        var str = input.value;
        input.value = str.slice(0, str.length-1);
    });
})

function put(put) {
    input.value += put;
}

function calc() {
    input.value = eval(input.value)
}













