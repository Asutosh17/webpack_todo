import ("./index.css")

import logo from "./logo.png"

const img = document.createElement("img")
img.src = logo

const h1 = document.createElement("h1");
h1.classList.add("title")
h1.innerText = "ToDo List";

const input = document.createElement("input");
input.classList.add("inputbox")

const btn = document.createElement("button")
btn.innerText = "Add to List"
btn.classList.add("save")

btn.onclick = () => {
    let e = input.value;
    let p = document.createElement("p")
    p.innerHTML = e;
    document.getElementById("lists").appendChild(p)
}
document.getElementById("image").appendChild(img)
document.getElementById("root").append(h1)

document.getElementById("container").append(input,btn)