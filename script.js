const confirmer = document.querySelector("#confirmer");
const password = document.querySelector("#password");
const form = document.querySelector("form");
const matchpass = document.querySelector(".matchpass");

//check if password satisfies conditions
password.addEventListener("input", (e) => {
    if (password.value.match(/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&~`])[A-Za-z\d@$!%*?&~`]{8,}$/)) {
        password.style.borderColor = "#596D48";
    } else {
        password.style.borderColor = "red";
    }
})

form.addEventListener("input", (e) => {
    if (password.value === confirmer.value) {
        console.log("right!");
        confirmer.style.borderColor = "#596D48";
        matchpass.textContent = "Passwords match!";
        matchpass.style.color = "#596D48";
    } else {
        confirmer.style.borderColor = "red";
        matchpass.textContent = "Passwords do not match!"
        matchpass.style.color = "red";
    }
})