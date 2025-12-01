// Button interaction on Home Page
const helloBtn = document.getElementById("helloBtn");
if (helloBtn) {
    helloBtn.addEventListener("click", () => {
        alert("Selamat Datang Bos Lekku !!!");
    });
}

// Contact Form Validation
const myForm = document.getElementById("myForm");
const output = document.getElementById("output");

if (myForm) {
    myForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("nameInput").value.trim();
        const email = document.getElementById("emailInput").value.trim();
        const subject = document.getElementById("subjectInput").value.trim();
        const message = document.getElementById("messageInput").value.trim();

        if (!name || !email || !subject || !message) {
            output.style.color = "red";
            output.textContent = "Please complete all fields!";
            return;
        }

        output.style.color = "green";
        output.textContent = "Message sent successfully!";
        myForm.reset();
    });
}