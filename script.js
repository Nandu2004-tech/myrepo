document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message, ' + document.getElementById('name').value + '!');
    this.reset(); // Reset the form fields
});
