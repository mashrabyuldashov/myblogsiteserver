const addPharmacys = document.querySelector('.add-kx-btn');
const divModal = document.querySelector('.div-modal');
const closeModal = document.querySelector('.close-btn-modal');
const btnNav = document.querySelector('.nav')
const link = document.querySelector('.btn-click')

addPharmacys.addEventListener("click", () => {
    divModal.style.display = "block"
})

closeModal.addEventListener("click", () => {
    divModal.style.display = "none"
})

form.addEventListener("submit", (e) => {

    fetch('https://proud-decisive-debt.glitch.me/pharmacys', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: e.target.name.value
        })
    })
})

btnNav.addEventListener("click", (e) => {
    if (e.target.matches('.edit_btn')) {
        const promtValue = prompt("Update qil jiyan", `${e.target.dataset.nameValue}`)

        if (promtValue !== null) {
            window.location.reload();
        }
        
        fetch(`/pharmacys/${e.target.id}`, {
            method: "PUT", 
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: promtValue ? promtValue : e.dataset.nameValue
            })
        })
    } else if (e.target.matches('.delete_btn')) {
        window.location.reload();
        fetch(`/pharmacys/${e.target.id}`, { method: "DELETE" })
    }
});