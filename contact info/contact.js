document.getElementById('contact-form').addEventListener('submit', function(event) {
    let valid = true;
    
    // Simple validation
    if (!document.getElementById('name').value.trim()) {
        alert('Name is required');
        valid = false;
    } else if (!document.getElementById('email').value.trim()) {
        alert('Email is required');
        valid = false;
    } else if (!document.getElementById('subject').value.trim()) {
        alert('Subject is required');
        valid = false;
    } else if (!document.getElementById('message').value.trim()) {
        alert('Message is required');
        valid = false;
    }

    if (!valid) {
        event.preventDefault();
    }
});
