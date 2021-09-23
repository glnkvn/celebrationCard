const inputForm=document.querySelector("form");
inputForm.addEventListener("submit",handleFormSubmit);


function handleFormSubmit(e){
    e.preventDefault();
    const sec =document.getElementById("card");
    const greeting=e.target.greeting.value;
    const event=e.target.eventType.value;
    const message = e.target.message.value;
    inputForm.className="hideForm";
    sec.innerHTML=generateCard(greeting,event,message);
}

function generateCard(greeting,event,message){
    const greetingText=`<h1>${greeting}</h1>\n`;
    const eventText=`<h2>Congraguation on your ${event}</h3>\n`;
    const messageText=`<p>${message}</p>\n`;
    return greetingText+eventText+messageText;
}