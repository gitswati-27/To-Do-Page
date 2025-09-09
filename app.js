let inp = document.querySelector("input");
let addBtn = document.querySelector("button");
let ul = document.querySelector("ul");
let lis = [];

let taskCount = document.querySelector("#task-count");
let clearAllBtn = document.querySelector("#clear-all");
let filterPending = document.querySelector("#filter-pending");
let filterCompleted = document.querySelector("#filter-completed");
let showAll = document.querySelector("#show-all");

function updateCount() {
    taskCount.innerText = `${lis.length} task${lis.length !== 1 ? "s" : ""} total`;
}

function addTask(task) {
    if (task === "") return;
    else if (lis.includes(task)) {
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
    li.prepend(checkbox);

    checkbox.addEventListener("change", function () {
        if (checkbox.checked) {
            textSpan.classList.add("strike");
        } else {
            textSpan.classList.remove("strike");
        }
        applyFilter(); // update view when filtering
    });

    let i = document.createElement("i");
    i.setAttribute("class", "fa-solid fa-trash-can");
    i.setAttribute("type", "button");
    i.addEventListener("click", function () {
        ul.removeChild(li);
        let val = textSpan.innerText; // use only task text
        let x = lis.indexOf(val);
        if (x > -1) lis.splice(x, 1);
        updateCount();
    });
    li.append(i);

    updateCount();
}

addBtn.addEventListener("click", function () {
    addTask(inp.value.trim());
    inp.value = "";
});

inp.addEventListener("keypress", function (event) {
    if (event.code === "Enter") {
        addTask(inp.value.trim());
        inp.value = "";
    }
});

clearAllBtn.addEventListener("click", function () {
    ul.innerHTML = "";
    lis = [];
    updateCount();
});

function applyFilter(type = "all") {
    let items = ul.querySelectorAll("li");
    items.forEach((li) => {
        let checkbox = li.querySelector("input[type='checkbox']");
        if (type === "pending" && checkbox.checked) {
            li.style.display = "none";
        } else if (type === "completed" && !checkbox.checked) {
            li.style.display = "none";
        } else {
            li.style.display = "flex";
        }
    });
}

filterPending.addEventListener("click", () => applyFilter("pending"));
filterCompleted.addEventListener("click", () => applyFilter("completed"));
showAll.addEventListener("click", () => applyFilter("all"));

updateCount();
