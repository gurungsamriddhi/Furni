document.addEventListener("DOMContentLoaded", () => {
    // Load Navbar
    // fetch('navbar.html')
    //     .then(response => response.text())
    //     .then(data => {
    //         document.getElementById('navbar-placeholder').innerHTML = data;

    //         // Reapply the sticky styles after the navbar is added
           
    //     })
    //     .catch(error => console.error('Error loading navbar:', error));

    // Load Footer
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-placeholder').innerHTML = data;
        })
        .catch(error => console.error('Error loading footer:', error));
});


document.getElementById("nl_signupbutton").addEventListener("click", () => {
    const emailInput = document.getElementById("nl_emailinput").value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email format regex
    
    if (!emailPattern.test(emailInput)) {
        alert("Please enter a valid email address.");
    } 
else{
    alert("Email verified successfully!")
}});
