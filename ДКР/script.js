document.getElementById("input").value = localStorage.getItem("form");;

document.getElementById('btn').addEventListener('click', () => {
    localStorage.setItem("form", document.getElementById('input').value)
})