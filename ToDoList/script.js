let addButton = document.getElementById("toDoAddButton");
let content = document.getElementById("toDoContent");
let inputText = document.getElementById("toDoInputText");
let deleteAllButton = document.getElementById("toDoDeleteButton");

addButton.addEventListener("click", function(){
    let contentList = document.createElement("li");
    
    content.appendChild(contentList);

    contentList.classList.add("list-group-item");

    contentList.innerHTML = inputText.value;
    inputText.value = "";

    contentList.addEventListener("dblclick", function(){
        content.removeChild(contentList);
    })

    contentList.addEventListener("click", function(){
        contentList.style.textDecoration = "line-through";
    })
  
    deleteAllButton.addEventListener("click", function(){
        contentList.remove();
    })
})


