const doriDev = document.querySelector('.dori_dev');
const addDori = document.querySelector('.modal-click-dori');
const divModal = document.querySelector('.div-modal');
const closeModal = document.querySelector('.close-btn-modal');
const form = document.querySelector('.form')

addDori.addEventListener("click", () => {
    divModal.style.display = "block"
})

closeModal.addEventListener("click", () => {
    divModal.style.display = "none"
})

form.addEventListener("submit", (e) => {
    e.preventDefault()
    fetch(`https://proud-decisive-debt.glitch.me/pharmacys/medicines/${e.target.id}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: e.target.name.value
        })
    })
})

doriDev.addEventListener("click", (e) => {
    if (e.target.matches('.edit_btn_dori')) {
        const promtValueDori = prompt("Update qil jiyan", `${e.target.dataset.nameAbc}`)
        console.log(e.target.dataset.nameAbc)

        if (promtValueDori !== null) {
            window.location.reload();
        }
        
        fetch(`/pharmacys/medicines/${e.target.id}`, {
            method: "PUT", 
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: promtValueDori ? promtValueDori : e.target.dataset.nameAbc
            })
        })
    } else if (e.target.matches('.delete_btn_dori')) {
        window.location.reload();
        fetch(`/pharmacys/medicines/${e.target.id}`, { method: "DELETE" })
    }
})