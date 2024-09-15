// making resume editable
var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
form.addEventListener('submit', function (event) {
    event.preventDefault(); //   prevent page reload
    // collect input
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    var resumeHTML = "\n   <h2><b>Editable Resume</b></h2>\n   <h3>Personal Information</h3>\n   <p><b>Name:</b><span contenteditable=\"type\">".concat(name, "</span></p>\n   <p><b>Email:</b><span contenteditable=\"type\">").concat(email, "</span></p>\n   <p><b>Phone:</b><span contenteditable=\"type\">").concat(phone, "</span></p>\n\n   <h3>Education</h3>\n   <p contenteditable=\"type\">").concat(education, "</p>\n\n    <h3>Experience</h3>\n   <p  contenteditable=\"type\">").concat(experience, "</p>\n\n    <h3>Skills</h3>\n   <p  contenteditable=\"type\">").concat(skills, "</p>\n ");
    // display the genertaed disply 
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('Resume display element not found');
    }
});
