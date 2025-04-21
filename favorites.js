// login and currency
let loginElement=document.querySelector(".three");
let outLet=document.querySelector(".out-let");
let login=document.querySelector(".login-page");
let borderForLogin=document.querySelector(".three-1");
loginElement.addEventListener("click",function(){
    login.style.display="flex";
    outLet.style.display="flex";
});
borderForLogin.addEventListener("click",()=>{
    document.styleSheets[0].cssRules[11].style.setProperty("border","dotted 1px rgba(0,0,0,0.7)");
});
outLet.addEventListener("click",()=>{
    outLet.style.display="none";
    if(login.style.display!="none"){
        login.style.display="none";
        if(login.style.display=="none"){
            document.styleSheets[0].cssRules[11].style.setProperty("border","none");
        }
    }
    if(document.styleSheets[0].cssRules[15].style.getPropertyValue("display")!="none"){
        document.styleSheets[0].cssRules[15].style.setProperty("display","none");
    }
});
let currencyAndLanguage=document.querySelector(".language-and-currency");
let En=document.querySelector(".two-1");
En.addEventListener("click",function(){
    document.styleSheets[0].cssRules[15].style.setProperty("display","flex");
    document.styleSheets[0].cssRules[15].style.setProperty("z-index","4");
    if(outLet.style.display=="none"){
        outLet.style.display="flex";
    }
});
// click on the back button to come back to the home page
let back=document.querySelector(".back");
back.addEventListener("click",function(){
    window.location.href="home.html";
});