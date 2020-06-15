window.onload = paginaPrincipal
function paginaPrincipal () {
    URL = "http://localhost:3000/api/v1/publicacao"
    fetch(URL)
        .then((res)=>{
            res.json().then((json) => {
                imprimeResultado(json)
            })
            .catch((err)=>{
                console.log(err)
            })
        })
        .catch((err)=>{console.log(err)})
}
function imprimeResultado (log) {
    for (let index = 0; index < log.length; index++) {
        let x = window.document.getElementById("quadro")
        let a = window.document.createElement("div")
        let b = window.document.createElement("div")
        a.setAttribute("name", "barraTitulo")
        b.setAttribute("name", "corpoDepoimento")
        a.setAttribute("class", "barraTitulo")
        b.setAttribute("class", "corpoDepoimento")
        a.style.border = "1px solid black"
        b.style.border = "1px solid black"
        a.style.padding = "15px"
        b.style.padding = "15px"
        a.innerText = `Titulo: ${log[index].titulo} por ${log[index].nome}`
        b.innerText = `${log[index].depoimento}`
        x.appendChild(a)
        a.appendChild(b)
    }
}