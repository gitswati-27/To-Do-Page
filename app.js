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
    let textSpan = document.createElement("span"); 
    textSpan.innerText = task;
    li.appendChild(textSpan); 
    lis.push(task);
    ul.appendChild(li);
    let checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    // console.dir(checkbox);
    li.append(checkbox);
    checkbox.addEventListener("change", function(){
        if(checkbox.checked){
            textSpan.classList.add('strike');
        }
        else{
           textSpan.classList.remove('strike');
        }
    });
    let i = document.createElement("i");
    i.setAttribute("class", "fa-solid fa-trash-can");
    i.setAttribute("type", "button");
    i.addEventListener("click", function(){
        ul.removeChild(li);
        let val = li.innerText;
        let x = lis.indexOf(val);
        lis.splice(x,1);
    });
    li.append(i);
}

btn.addEventListener("click", function(){
    let inp = document.querySelector("input");
    addTask(inp.value);
    inp.value = "";
});

inp.addEventListener("keypress",function(event){
    if(event.code=='Enter'){
        addTask(inp.value);
        inp.value = "";
    }
});