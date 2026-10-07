function find_edit(){
const firstName_node = document.getElementById("firstname_id")
console.log(firstName_node.innerText)
firstName_node.innerText = "Sofia"
console.log(firstName_node.innerText)

const secondName_node = document.getElementById("last_name_id")
console.log(secondName_node.innerText)
secondName_node.innerText = "Lubina"
console.log(secondName_node.innerText)

const patronymic_node = document.getElementById("patronymic_id")
console.log(patronymic_node.innerText)
patronymic_node.innerText = "Vinodovna"
console.log(patronymic_node.innerText)
}


const node_for_click = document.getElementById("for_click")
node_for_click.addEventListener("click",find_edit)