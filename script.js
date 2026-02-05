// Function to update the status text
function updateStatus() {
    // 1. Select the paragraph
    const statusPara = document.getElementById("status-text");

    // 2. Change the text
    statusPara.innerText = "Task completed! Notification sent!";
    statusPara.style.color = "green";
}

// Function to read input and display a greeting
function greetUser() {
    // 1. Get the INPUT element
    const inputField = document.getElementById("user-name");

    // 2. Get the VALUE typed inside it
    const name = inputField.value;

    // 3. Display it in the paragraph
    const msgPara = document.getElementById("greeting-msg");
    msgPara.innerText = "Hello, " + name + "!";
}
