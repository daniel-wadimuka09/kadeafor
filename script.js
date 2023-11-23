document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let phone = document.getElementById('phone').value;
    let group = document.getElementById('group').value;
    let email = document.getElementById('email').value;
    let bio = document.getElementById('bio').value;

    let contactList = document.getElementById('contactList');
    let listItem = document.createElement('li');
    listItem.textContent = `${firstName} ${lastName} - ${group} | Phone: ${phone} | Email: ${email} | Bio: ${bio}`;
    contactList.appendChild(listItem);

    
    this.reset();
});