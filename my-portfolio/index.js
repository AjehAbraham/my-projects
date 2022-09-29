/*
 my javascript code are arrange from top to bottom fot easy understanding i.e from header to side bar all the way to footer so that it can be very easy to study*/


 //side bar open and close javascript code

    document.getElementById("openbtn").addEventListener("click",openSidebar);
function openSidebar()
{
    var a=document.getElementById("sidebarMenu");
    if (a.style.display=="none"){
        a.style.display="block";
    }
    else
    {
        a.style.display="none";
    }
}

//javascript code to close side bar


document.getElementById("closebtn").addEventListener("click",closeSidebar)
function closeSidebar()
{
    var b=document.getElementById("sidebarMenu");
    if(b.style.display=="block"){
        b.style.display="none";
    }
}
//javascript code to open sub-menu i.e projects dropdown


document.getElementById("subMenubtn").addEventListener("click",openSubmenu);
function openSubmenu()
{
    a=document.getElementById("sub-menu");
    if(a.style.display=="none"){
        a.style.display="block";
    }
    else
    {
        a.style.display="none";
    }
}
// code to scroll from side bar option to About details


document.querySelector("#move-to-about").addEventListener("click",BackTobottom)
function BackTobottom()
{
    document.querySelector(".about").scrollIntoView({
        behavior:'smooth'
    })
    document.getElementById("sidebarMenu").style.display="none";
}

//javascript using api to create pdf and also btn to downlaod plus show popup confirmation message


document.getElementById("Mycv").addEventListener("click",Download);
function Download()
{
    var b = document.querySelector(".introduction-container").innerText;
const doc = new jsPDF();
doc.text(b,10,10)
doc.save("document.pdf");
document.getElementById("Mycv").style.backgroundColor="rgba(210,0,0,0.6";
document.querySelector(".download-confirmation-overlay").style.display="block";
}
//code to close download confirmation message


document.getElementById("close-confirmation").addEventListener("click",close_confirmation);
function close_confirmation()
{
document.querySelector(".download-confirmation-overlay").style.display="none";
}
/*
//code to open live chat menu

document.getElementById("open-Livechat-btn").addEventListener("click",openLive_chat);
function openLive_chat(){
    a = document.getElementById("Livechat-container").style.display="block";
    var myMessage =setTimeout(show_bot_message,5000);
}

//code to close live-chat menbu/container


document.getElementById("close-Livechat-container").addEventListener("click",closelive_chat);

function closelive_chat(){
    document.getElementById("Livechat-container").style.display="none";
}
//code to show date and time in live chat


var MyTimer=setInterval(LoadDate,1000);

function LoadDate(){
    var b=new Date().getDay();
    const days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
 let CurrentDay=days[b];

    document.querySelector(".date-time-day").innerHTML=CurrentDay +" " + new Date().toLocaleString();
}

//code to play animation and display welcome message

function show_bot_message()
{
    var z =document.querySelector(".Livechat-container");
  
 a = document.querySelector(".set-chat-animation1").style.display="none";
  b = document.querySelector(".set-chat-animation2").style.display="none";
  c = document.querySelector(".set-chat-animation3").style.display="none";
  d =document.querySelector(".set-chat-animation-container").innerHTML="Hi,i'm Abraham how may i help you?";

    
}
/*
document.querySelector(".Live-chat-submit").addEventListener("click",show_message_reply);
function show_message_reply(){
    
var a = document.querySelector(".bolt_message_send").value;
let b =document.getElementById("message");
for(b = 0; b < a; b++){
    b={a};
}

}*/

// code to open cookies and also play animation for the cookie,accept cookies and also reject cookies

function closeOverrlay()
{
document.getElementById("overlay").style.display="none"
}
window.onload=setTimeout(closeOverrlay,3000);

function loadcookie(){
    document.getElementById("cookies").style.display="block";
}
window.onload=setTimeout(loadcookie,8000)

document.getElementById("AcceptCookie").addEventListener("click",AcceptCookies);
function AcceptCookies()
{
document.getElementById("cookies").style.display="none";
document.getElementById("cookies").add("closecookie");
}

document.getElementById("RejectCokkie").addEventListener("click",RejectCookie);
function RejectCookie()
{
document.getElementById("cookies").style.display="none"
}

//code to open social media page and also play animation


document.querySelector(".social-media-btn").addEventListener("click",openSocial);
function openSocial(){
   a = document.querySelector(".social-media-dropdown");
   if(a.style.display="none"){
    a.style.display="block";
   }else{
    a.style.display="none";
   }
}
//form validation code and also validation message and confirmation pop up message


function validateMail()
{
    var h = document.getElementById("validationName").value;
    var g = document.getElementById("validationName");
    var animatiom = document.getElementById("validation-animation-message");
    if(g.value <= 0){
      
        document.getElementById("validationMessage").style.display="block";
        document.getElementById("validationMessage").innerHTML="Name cannot be blank";
        document.getElementById("validationMessage").style.color="rgba(210, 0, 0, 0.9)";
        document.getElementById("validationMessage").style.backgroundColor="pink";
        document.getElementById("validationMessage").style.width="70%";
        document.getElementById("validationMessage").style.padding="10px 10px"; 
        document.getElementById("validationMessage").style.marginLeft="auto";
        document.getElementById("validationMessage").style.marginRight="auto";
        document.getElementById("validationMessage").style.borderRadius="2rem";
        g.classList.add("animation");
    }else{
        document.getElementById("validationMessage").style.display="none";
        localStorage.setItem("Visitors_Full_Name",h);
    }
    var message2= document.getElementById("validationMessage1");
  const validate = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
    var a = document.getElementById("validation");

    if(a.value.match(validate)){
        document.getElementById("validationMessage1").style.display="none";
    }
    else{
       
        document.getElementById("validationMessage1").style.display="block";
        document.getElementById("validationMessage1").innerHTML="Invalid mail address";
        document.getElementById("validationMessage1").style.color="rgba(210, 0, 0, 0.9)";
        document.getElementById("validationMessage1").style.backgroundColor="pink";
        document.getElementById("validationMessage1").style.width="70%";
        document.getElementById("validationMessage1").style.padding="10px 10px"; 
        document.getElementById("validationMessage1").style.marginLeft="auto";
        document.getElementById("validationMessage1").style.marginRight="auto";
        document.getElementById("validationMessage1").style.borderRadius="2rem";
        message2.classList.add("animation");
    }
    
    var b =document.getElementById("validateTextarea");
    var message3=document.getElementById("validationMessage2");

    if(b.value.length <=0){
   
        document.getElementById("validationMessage2").style.display="block";
        document.getElementById("validationMessage2").innerHTML="Please enter the description of job or suggestion.";
        document.getElementById("validationMessage2").style.color="rgba(210, 0, 0, 0.9)"; 
        document.getElementById("validationMessage2").style.backgroundColor="pink";
        document.getElementById("validationMessage2").style.width="70%";
        document.getElementById("validationMessage2").style.padding="10px 10px";
        document.getElementById("validationMessage2").style.padding="10px 10px"; 
        document.getElementById("validationMessage2").style.marginLeft="auto";
        document.getElementById("validationMessage2").style.marginRight="auto";
        document.getElementById("validationMessage2").style.borderRadius="2rem";
        message3.classList.add("animation");   
    }
    else{
        document.getElementById("validationMessage2").style.display="none";
    }
}
//code form onsumit to stop page from refreshing and also show confirmation message


function openFormMessage(event){
event.preventDefault();
document.querySelector(".form-overlay").style.display="block";

document.getElementById("visitors-name").innerHTML= localStorage.getItem("Visitors_Full_Name");

var g = document.getElementById("validationName").value=" ";
var a = document.getElementById("validation").value=" ";
var b =document.getElementById("validateTextarea").value=" ";
 
}
/*
function open_form_status_message()
{
    document.querySelector("form_status_message").style.display="block";
}
*/
//code to close form overlay i.e pop up confirmation message


document.querySelector(".close-form_status-message").addEventListener("click",close_form_message);
    function close_form_message(){
        document.querySelector(".form-overlay").style.display="none"
    }
//code use to chnage to verious themes and their message container 


    document.querySelector(".themes").addEventListener("change",changeBodyTheme);
    function changeBodyTheme()
    {
       theme = document.body;
       selectoptions = document.querySelector(".themes");
       if(selectoptions.value == "Theme 1"){
        document.querySelector(".overlay").style.display="block";
        document.querySelector(".type").innerHTML="Theme 1(Dark-Mode)";
        theme.classList.add("Theme-one");
        theme.classList.remove("Theme-two");
        theme.classList.remove("Theme-three");
        theme.classList.remove("Theme-four");
        theme.classList.remove("original-theme");

       }else if(selectoptions.value == "Theme 2"){
        document.querySelector(".overlay").style.display="block";
        document.querySelector(".message").innerHTML="Always remember life isn't just about working very hard it also requires working smart too.";
        document.querySelector(".type").innerHTML="Work Smart(Classic-Theme)";
        theme.classList.add("Theme-two");
        theme.classList.remove("Theme-one");
        theme.classList.remove("Theme-three");
        theme.classList.remove("Theme-four");
        theme.classList.remove("original-theme");

       }else if(selectoptions.value == "Theme 3"){
        document.querySelector(".overlay").style.display="block";
        document.querySelector(".message").innerHTML="Life is a fury road/journey,but with the right mindset and consistency we're going to make it together.";
        document.querySelector(".type").innerHTML="Fury-Road(Theme 3).";
        theme.classList.add("Theme-three");
        theme.classList.remove("Theme-two");
        theme.classList.remove("Theme-one");
        theme.classList.remove("Theme-four");
        theme.classList.remove("original-theme");
       }
       
       else if(selectoptions.value == "Theme 4"){
        document.querySelector(".overlay").style.display="block";
        document.querySelector(".message").innerHTML="Just incase you're tired of life just remember how far you've been,never give up.";
        document.querySelector(".type").innerHTML="Life-journey(Classic-Theme)";
        theme.classList.add("Theme-four");
        theme.classList.remove("Theme-two");
        theme.classList.remove("Theme-three");
        theme.classList.remove("Theme-one");
        theme.classList.remove("original-theme");
       }
    
      else{
        alert("original theme");
        theme.classList.add("original-theme");
        theme.classList.remove("Theme-one");
        theme.classList.remove("Theme-two");
        theme.classList.remove("Theme-three");
        theme.classList.remove("Theme-four");
       }
}
//remove theme pop up box for all the themes


document.querySelector(".remove-pop-up-box").addEventListener("click",remove_popup);
function remove_popup()
{
    document.querySelector(".overlay").style.display="none";
}
//code to scrool back to form conatiner 


document.querySelector("#HireMe").addEventListener("click",BackToForm)
function BackToForm()
{
    document.querySelector("#form-container").scrollIntoView({
        behavior:'smooth'
    })
}
//code to scroll to form but this time the hire button at the button of the page


document.querySelector("#scroll").addEventListener("click",BackToForm2)
function BackToForm2()
{
    document.querySelector(".form-container").scrollIntoView({
        behavior:'smooth'
    })
}

//code to scroll to about


document.querySelector("#scroll-to-about").addEventListener("click",BackToAbout)
function BackToAbout()
{
    document.querySelector(".about").scrollIntoView({
        behavior:'smooth'
    })
}
// code to scrool from bottom of page to the topm of the page


document.querySelector("#back-to-top-btn").addEventListener("click",BackToTop)
function BackToTop()
{
    document.querySelector("#openbtn").scrollIntoView({
        behavior:'smooth'
    })
}

//the above codes containe script to open and close privacy menue,view code details and also rating 


document.querySelector(".open-privacy-btn").addEventListener("click",open_privacy_policy);

function open_privacy_policy(){
    document.querySelector(".privacy-policy-overlay").style.display="block";
}
document.querySelector(".privacy-close-btn").addEventListener("click",close_privacy_policy);

function close_privacy_policy(){
    document.querySelector(".privacy-policy-overlay").style.display="none";
}
document.querySelector(".view-details").addEventListener("click",openDetails);
function openDetails()
{
    document.querySelector("#web-details").style.display="block";
}

document.querySelector(".close-details-btn").addEventListener("click",closeDetails);
function closeDetails()
{
    document.querySelector("#web-details").style.display="none";
}
// happy coding/studying please note that i try to make sure this codes are easy to read and understand by everyone even novice student to make sure everyone understand my code.
