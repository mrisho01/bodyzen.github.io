function submitForm() {
    // Get form data
    const name = document.getElementById("name").value;
    const number = document.getElementById("number").value;
    const email = document.getElementById("email").value;
    const service = document.getElementById("service").value;

    // Send data to Google Doc (You'll need to implement this part)
    // For example, you can use Google Forms or Sheets API

    // Display confirmation message
    const confirmationMessage = document.getElementById("confirmationMessage");
    confirmationMessage.innerHTML = `Thanks for booking, ${name}! We will be in contact with you regarding ${service}.`;
}
