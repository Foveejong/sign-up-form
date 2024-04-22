const confirmer = document.querySelector("#confirmer");
const password = document.querySelector("#password");
const form = document.querySelector("form");

//check if password satisfies conditions
password.addEventListener("input", (e) => {
    if (password.value.match(/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&~`])[A-Za-z\d@$!%*?&~`]{8,}$/)) {
        password.style.borderColor = "#596D48";
    } else {
        password.style.borderColor = "red";
    }
})