let inp = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let lis = [];

function addTask(task){
    if(task=="") return;
    else if(lis.includes(task)){
        alert("Task already added!");
        return;
    } 
    let li = document.createElement("li");
    li.innerText = task;
    lis.push(task);
    ul.append(li);
}

btn.addEventListener("click", function(){
    let inp = document.querySelector("input");
    addTask(inp.value);
});

inp.addEventListener("keypress",function(event){
    if(event.code=='Enter'){
        addTask(inp.value);
        inp.value = "";
    }
});