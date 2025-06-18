// let list = document.getElementById("list")
// let input = document.getElementById("input").value


function listaTafarefas(){
    let input = document.getElementById("input").value
    let li = document.createElement("li")

    li.innerHTML = `<span>${input}</span>
    <button class="excluir" onclick="deletarTarefa(this)">Excluir</button>`
    document.querySelector("ul").appendChild(li)
    document.getElementById("input").value = ""  
    
    li.addEventListener("click", function(){
        li.classList.add("riscado");
        
    })
    
}

function deletarTarefa(li){
    li.parentElement.remove()

}

