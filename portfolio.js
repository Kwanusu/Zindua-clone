
    var tablinks = document.getElementsByClassName("tab-links");
    var tabcontents = document.getElementsByClassName("tab-contents");

    function opentab(tabname){
        for(tablink of tablinks){
        tablink.classlist.remove("active-link");
    }

        for(tabcontent of tabcontents){
        tabcontent.classlist.remove("active-tab");
    }

        event.currentTarget.classlist.add("active-link");
        document.getElementById("tabname").classList.add("active-tab")
    } 
    var sidemenu = document.getElementById("sidemenu");
    function openmenu(){
        sidemenu.style.right ="0";
}
    function closemenu(){
        sidemenu.style.right ="-200px";
}
    const scriptURL = 'https://script.google.com/macros/s/'
    const form =documents.forms['submit-to-google-sheet']
    const msg = document.getElementById("msg")

    form.addEventListener('submit', e => {
        e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            msg.innerHTML = "Message sent successfully"
            setTimeout(function(){
              msg.innerHTML = ""  
            },5000)
            form.reset()
        })
        form.reset()
        .catch(error => console.error('Error!', error.message))
    })
/* var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
    tablink.classlist.remove("active-link");
}

    for(tabcontent of tabcontents){
    tabcontent.classlist.remove("active-tab");
}

    event.currentTarget.classlist.add("active-link");
    document.getElementById(tabname).classList.add("active-tab")
} 
var sidemenu = document.getElementById("sidemenu");
function openmenu(){
    sidemenu.style.right ="0";
}
function closemenu(){
    sidemenu.style.right ="-200px";
}
const scriptURL = 'https://script.google.com/macros/s/'
const form = documents.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Message sent successfully"
        setTimeout(function(){
          msg.innerHTML = ""  
        },5000)
        form.reset()
    })
    form.reset()
    .catch(error => console.error('Error!', error.message))
})
alert('HELLO AND WELCOME TO INNOVET TECHNOLOGIES LIMITED');*/