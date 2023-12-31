// creating for deleting task in list
let nodelist = document.getElementsByTagName("li")

Array.from(nodelist).forEach(e => {
    var span = document.createElement("span")
    var txt = document.createTextNode("\u00D7")
    span.className = "close"
    span.appendChild(txt)
    e.appendChild(span)
});



// modify close button for when a user click this then the task should be deleted
// creating checked and delting task manipulation

var todolist = document.getElementById("todoList")

todolist.addEventListener("click", function(event) {
    event.stopPropagation
    if(event.target.tagName === "LI") {
        event.target.classList.toggle("checked")
    }
    else if(event.target.className === "close") {
        var task = event.target.parentElement
        task.style.display = "none"
    }
})


// creating the input for adding the task

function MYfunction() {
    var li = document.createElement("li")
    var inputValue = document.getElementById("add_input").value
    var txt = document.createTextNode(inputValue)
    li.appendChild(txt)

    if (inputValue === "") {
        alert("you have to enter something for task!")
    }
    else {
        document.getElementById("todoList").prepend(li)
    }
    document.getElementById("add_input").value = ""


let nodelist = document.getElementsByTagName("li")

Array.from(nodelist).forEach(e => {
    var span = document.createElement("span")
    var txt = document.createTextNode("\u00D7")
    span.className = "close"
    span.appendChild(txt)
    e.appendChild(span)
});

var todolist = document.getElementById("todoList")

todolist.addEventListener("click", function(event) {
    event.stopPropagation
     if(event.target.className === "close") {
        var task = event.target.parentElement
        task.style.display = "none"
    }
})
}



// A beautiful header for you in bonous 

function GetRandomColor() {
    let val1 = Math.ceil(0 + Math.random() * 255)
    let val2 = Math.ceil(0 + Math.random() * 255)
    let val3 = Math.ceil(0 + Math.random() * 255)
    return `rgb(${val1},${val2},${val3})`
}
setInterval(() =>{
    document.getElementById("header").style.backgroundColor = GetRandomColor()
    document.getElementById("title").style.color = GetRandomColor()
}, 4000)