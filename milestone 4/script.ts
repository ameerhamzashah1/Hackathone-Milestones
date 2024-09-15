

// making resume editable

const form  = document.getElementById('resume-form') as HTMLFormElement;

const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement;


form.addEventListener('submit', (event: Event)=>{
   event.preventDefault();  //   prevent page reload

   // collect input
   const name = (document.getElementById('name') as HTMLInputElement).value
   const email = (document.getElementById('email') as HTMLInputElement).value
   const phone = (document.getElementById('phone') as HTMLInputElement).value
   const education = (document.getElementById('education') as HTMLInputElement).value
   const experience = (document.getElementById('experience') as HTMLInputElement).value
   const skills = (document.getElementById('skills') as HTMLInputElement).value


   const resumeHTML = `
   <h2><b>Editable Resume</b></h2>
   <h3>Personal Information</h3>
   <p><b>Name:</b><span contenteditable="type">${name}</span></p>
   <p><b>Email:</b><span contenteditable="type">${email}</span></p>
   <p><b>Phone:</b><span contenteditable="type">${phone}</span></p>

   <h3>Education</h3>
   <p contenteditable="type">${education}</p>

    <h3>Experience</h3>
   <p  contenteditable="type">${experience}</p>

    <h3>Skills</h3>
   <p  contenteditable="type">${skills}</p>
 `;

 // display the genertaed disply 

 if(resumeDisplayElement){
    resumeDisplayElement.innerHTML = resumeHTML;
 }else{
    console.error('Resume display element not found')
 }

})



