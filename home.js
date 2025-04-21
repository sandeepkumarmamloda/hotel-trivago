// hotels,destination,landmark(loop)
let p=document.querySelector(".fp-2>p");
setInterval(function(){
    if(p.innerText==="Hotel"){
        p.innerText="Landmark";
    }
    else if(p.innerText==="Landmark"){
        p.innerText="Destination";
    }
    else if(p.innerText==="Destination"){
        p.innerText="Hotel";
    }
},1000);
// function for recently
let array=["hello"];
function recently(event){
    let firstCart=document.querySelector(".recently-1");
    let secondCart=document.querySelector(".recently-2");
    let thirdCart=document.querySelector(".recently-3");
    let container=document.querySelector(".recently-container");
    if((input.value==="delhi")||(input.value==="Delhi")&&(array[array.length-2]!=array[array.length-1])){
        if(firstCart.style.display==="none"){
            container.style.display="flex";
            firstCart.style.display="flex";
            array[array.length]+=input.value;
        }
        else if((secondCart.style.display==="none")&&(input.value=array[array.length-1])){
            secondCart.style.display="flex";
            array[array.length]+=input.value;
        }
        else{
            thirdCart.style.display="flex";
        }
    }
    else if((input.value==="surat")||(input.value==="Surat")&&(array[array.length-2]!=array[array.length-1])){
        if(firstCart.style.display==="none"){
            firstCart.style.display="flex";
            container.style.display="flex";
            array[array.length]+=input.value;
        }
        else if((secondCart.style.display==="none")&&(array[array.length-2]!=array[array.length-1])){
            secondCart.style.display="flex";
            array[array.length]+=input.value;
        }
        else{
            thirdCart.style.display="flex";
        }
    }
    else if((input.value==="jaipur")||(input.value==="jaipur")&&(array[array.length-2]!=array[array.length-1])){
        if(firstCart.style.display==="none"){
            firstCart.style.display="flex";
            container.style.display="flex";
            array[array.length]+=input.value;
        }
        else if((secondCart.style.display==="none")&&(array[array.length-2]!=array[array.length-1])){ 
            secondCart.style.display="flex";
            array[array.length]+=input.value;
        }
        else{
            thirdCart.style.display="flex";
        }
    }
}
// cites vise hotels
let input=document.querySelector(".fp>.fp-2>input");
<<<<<<< HEAD
let search=document.querySelector(".search");
=======
let search=document.querySelector("button");
>>>>>>> 484988805157280201d8186d7ac4537307e3993f
function forHotels(event){
    if((input.value==="delhi")||(input.value==="Delhi")){
        firstCart();
        secondCart();
        thirdCart();
        fourthCart();
    }
<<<<<<< HEAD
=======

>>>>>>> 484988805157280201d8186d7ac4537307e3993f
}
// code for first cart
function firstCart(){
    let carts=document.querySelector(".carts");
        let firstCart=document.querySelector(".carts>.first-cart");
        firstCart=firstCart.classList.replace("first-cart","first-cart-1");
        let h2=document.querySelector(".first-cart-1>.sp>h2");
        h2.innerHTML="Golden Tulip Candolim, Goa";
        let p=document.querySelector(".first-cart-1>.sp>p");
        p.innerHTML=`<b>8.2 - very good</b> (6400)
                                <span  class="material-symbols-outlined"
                                        style="font-size:15px;
                                        padding-left:10px;
                                        display:inline-block;">
                                location_on
                                </span> Delhi, India</p>`;
        let usual=document.querySelector(".less-than-usal");
        usual.style=`height:18px;
                                        display:flex;
                                        flex-direction:row;
                                        justify-content:flex-start;
                                        width:40%;
                                        margin:0px auto;
                                        border:1px solid red;
                                        border-radius:5px;
                                        background-color:white;
                                        transform:translateY(28px);`;
        let usual1=document.querySelector(".less-than-usal-1");
        usual1.innerHTML="20%";
        let b=document.querySelector(".first-cart-1>.tp>p>b");
        b.innerHTML="Algotels";
        b.style="margin-right:20px;";
        let rupees=document.querySelector(".first-cart-1>.tp>p+p+p");
        rupees.innerHTML="₹8,000";
        let time=document.querySelector(".first-cart-1>.tp>p+p+p+p");
        time.innerHTML=`per night <span style="font-weight:700;
                                                            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, Noto Sans, Apple Color Emoji, Segoe UI Emoji, sans-serif;
                                                            padding-left:133px;
                                                            font-size:12px;">22 May - 15 june</span>`;

}
// code for second cart(for Delhi)
function secondCart(){
    let carts=document.querySelector(".carts");
        let firstCart=document.querySelector(".carts>.second-cart");
        firstCart=firstCart.classList.replace("second-cart","second-cart-1");
        let h2=document.querySelector(".second-cart-1>.sp>h2");
        h2.innerHTML="Fairfield by Marriott Goa Anjuna";
        let p=document.querySelector(".second-cart-1>.sp>p");
        p.innerHTML=`<b>8.7 - Excellent</b> (8400)
                                <span  class="material-symbols-outlined"
                                        style="font-size:15px;
                                        padding-left:10px;
                                        display:inline-block;">
                                location_on
                                </span> Delhi, India</p>`;
        let usual=document.querySelector(".second-cart-1>.sp>.less-than-usal");
        usual.style=`height:18px;
                                        display:flex;
                                        flex-direction:row;
                                        justify-content:flex-start;
                                        width:40%;
                                        margin:0px auto;
                                        border:1px solid red;
                                        border-radius:5px;
                                        background-color:white;
                                        transform:translateY(28px);`;
        let usual1=document.querySelector(".less-than-usal-1");
        usual1.innerHTML="16%";
        let b=document.querySelector(".second-cart-1>.tp>p>b");
        b.innerHTML="Algotels";
        b.style="margin-right:20px;";
        let rupees=document.querySelector(".second-cart-1>.tp>p+p+p");
        rupees.innerHTML="₹15,000";
        let time=document.querySelector(".second-cart-1>.tp>p+p+p+p");
        time.innerHTML=`per night <span style="font-weight:700;
                                                            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, Noto Sans, Apple Color Emoji, Segoe UI Emoji, sans-serif;
                                                            padding-left:120px;
                                                            font-size:12px;">22 March - 15 Apr</span>`;

}
// code for third cart(for delhi)!
function thirdCart(){
    let carts=document.querySelector(".carts");
        let firstCart=document.querySelector(".carts>.third-cart");
        firstCart=firstCart.classList.replace("third-cart","third-cart-1");
        let h2=document.querySelector(".third-cart-1>.sp>h2");
        h2.innerHTML="Grand Mercure Bali Seminyak";
        let p=document.querySelector(".third-cart-1>.sp>p");
        p.innerHTML=`<b>7.0 - Good</b> (8400)
                                <span  class="material-symbols-outlined"
                                        style="font-size:15px;
                                        padding-left:10px;
                                        display:inline-block;">
                                location_on
                                </span> Delhi, India</p>`;
        let usual=document.querySelector(".third-cart-1>.sp>.less-than-usal");
        usual.style=`height:18px;
                                        display:flex;
                                        flex-direction:row;
                                        justify-content:flex-start;
                                        width:40%;
                                        margin:0px auto;
                                        border:1px solid red;
                                        border-radius:5px;
                                        background-color:white;
                                        transform:translateY(28px);`;
        let usual1=document.querySelector(".less-than-usal-1");
        usual1.innerHTML="13%";
        let b=document.querySelector(".third-cart-1>.tp>p>b");
        b.innerHTML="Hotel.com";
        b.style="margin-right:20px;";
        let rupees=document.querySelector(".third-cart-1>.tp>p+p+p");
        rupees.innerHTML="₹18,000";
        let time=document.querySelector(".third-cart-1>.tp>p+p+p+p");
        time.innerHTML=`per night <span style="font-weight:700;
                                                            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, Noto Sans, Apple Color Emoji, Segoe UI Emoji, sans-serif;
                                                            padding-left:128px;
                                                            font-size:12px;">2 june - 15 july</span>`;
}
function fourthCart(){
    let carts=document.querySelector(".carts");
        let firstCart=document.querySelector(".carts>.fourth-cart");
        firstCart=firstCart.classList.replace("fourth-cart","fourth-cart-1");
        let h2=document.querySelector(".fourth-cart-1>.sp>h2");
        h2.innerHTML="Sheraton Grand Seattle";
        let p=document.querySelector(".fourth-cart-1>.sp>p");
        p.innerHTML=`<b>8.0 - Very good</b> (8400)
                                <span  class="material-symbols-outlined"
                                        style="font-size:15px;
                                        padding-left:10px;
                                        display:inline-block;">
                                location_on
                                </span> Delhi, India</p>`;
        let usual=document.querySelector(".fourth-cart-1>.sp>.less-than-usal");
        usual.style=`height:18px;
                                        display:flex;
                                        flex-direction:row;
                                        justify-content:flex-start;
                                        width:40%;
                                        margin:0px auto;
                                        border:1px solid red;
                                        border-radius:5px;
                                        background-color:white;
                                        transform:translateY(28px);`;
        let usual1=document.querySelector(".less-than-usal-1");
        usual1.innerHTML="12%";
        let b=document.querySelector(".fourth-cart-1>.tp>p>b");
        b.innerHTML="MakeMyTrip";
        b.style="margin-right:20px;";
        let rupees=document.querySelector(".fourth-cart-1>.tp>p+p+p");
        rupees.innerHTML="₹12,000";
        let time=document.querySelector(".fourth-cart-1>.tp>p+p+p+p");
        time.innerHTML=`per night <span style="font-weight:700;
                                                            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, Noto Sans, Apple Color Emoji, Segoe UI Emoji, sans-serif;
                                                            padding-left:128px;
                                                            font-size:12px;">12 May - 28 Apr</span>`;
}
// search button
search.addEventListener("click",function(event){
    event.preventDefault();
    forHotels();
    recently();
});
// functionality of login element and EN-rupees element
let loginElement=document.querySelector(".three");
<<<<<<< HEAD
=======

>>>>>>> 484988805157280201d8186d7ac4537307e3993f
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
    if(document.styleSheets[0].cssRules[93].style.getPropertyValue("display")!="none"){
        document.styleSheets[0].cssRules[93].style.setProperty("display","none");
    }
});
// functionality of menu element of menu!
let menuElement=document.querySelector(".fourth");
let menu=document.querySelector(".menu");
let borderOfMenu=document.querySelector(".fourth-1");
menuElement.addEventListener("mouseenter",()=>{
    if(menu.style.display=="none"){
        menu.style.display="flex";
    }
    document.styleSheets[0].cssRules[14].style.setProperty("border","dotted 1px rgba(0,0,0,0.7)");
});
menu.addEventListener("mouseover",function(){
        menu.style.display="flex";
        document.styleSheets[0].cssRules[14].style.setProperty("border","dotted 1px rgba(0,0,0,0.7)");
});
menu.addEventListener("mouseleave",()=>{
        if(menu.style.display=="flex"){
            menu.style.display="none";
        }
});
menuElement.addEventListener("mouseleave",function(){
    let colorOfMenu=document.styleSheets[0].cssRules[12].style.getPropertyValue("background-color");
    if(colorOfMenu=="transparent"){
        menu.style.display="none";
    }
});
document.addEventListener("click",function(){
    document.styleSheets[0].cssRules[14].style.setProperty("border","none");
});
// functionality of rupees and currency
let currencyAndLanguage=document.querySelector(".language-and-currency");
let En=document.querySelector(".two-1");
En.addEventListener("click",function(){
    document.styleSheets[0].cssRules[93].style.setProperty("display","flex");
    document.styleSheets[0].cssRules[93].style.setProperty("z-index","4");
    if(outLet.style.display=="none"){
        outLet.style.display="flex";
    }
});
// functionality of insider elements
// second button of insider
let secondButtonOfInsider=document.querySelector(".insider-2-1");
secondButtonOfInsider.addEventListener("click",function(){
    document.styleSheets[0].cssRules[34].style.setProperty("border","solid 2.5px #0079c2");
    document.styleSheets[0].cssRules[99].style.setProperty("background-color","rgba(0,0,0,0.06)");
    document.styleSheets[0].cssRules[100].style.setProperty("border","dotted 1px rgba(0,0,0,0.7)");
    setTimeout(function(){
        document.styleSheets[0].cssRules[99].style.setProperty("background-color","transparent");
        document.styleSheets[0].cssRules[100].style.setProperty("border","transparent");
    },300);
    document.styleSheets[0].cssRules[35].style.setProperty("border","none");
    document.styleSheets[0].cssRules[31].style.setProperty("border","none");
});
document.addEventListener("dblclick",function(){
    document.styleSheets[0].cssRules[34].style.setProperty("border","none");
    document.styleSheets[0].cssRules[35].style.setProperty("border","none");
    document.styleSheets[0].cssRules[31].style.setProperty("border","none");
});
// third button of insider
let thirdButtonOfInsider=document.querySelector(".insider-2-2");
thirdButtonOfInsider.addEventListener("click",function(){
    document.styleSheets[0].cssRules[35].style.setProperty("border","solid 2.5px #0079c2");
    document.styleSheets[0].cssRules[101].style.setProperty("background-color","rgba(0,0,0,0.06)");
    document.styleSheets[0].cssRules[102].style.setProperty("border","dotted 1px rgba(0,0,0,0.7)");
    setTimeout(function(){
        document.styleSheets[0].cssRules[101].style.setProperty("background-color","transparent");
        document.styleSheets[0].cssRules[102].style.setProperty("border","transparent");
    },300);
    document.styleSheets[0].cssRules[34].style.setProperty("border","none");
    document.styleSheets[0].cssRules[31].style.setProperty("border","none");
});
// first button of insider
let firstButton=document.querySelector(".insider-1-1");
let innerPartOfFirstButton=document.querySelector(".fp");
firstButton.addEventListener("click",function(){
    document.styleSheets[0].cssRules[31].style.setProperty("border","solid 2.5px #0079c2");
    document.styleSheets[0].cssRules[31].style.setProperty("border-radius","10px");
    document.styleSheets[0].cssRules[32].style.setProperty("border","dotted 3.5px rgba(0,0,0,0.2)");
    document.styleSheets[0].cssRules[34].style.setProperty("border","none");
    document.styleSheets[0].cssRules[35].style.setProperty("border","none");
<<<<<<< HEAD
});
// page change when click on favorites button
let favoritesPage=document.querySelector(".one-1");
favoritesPage.addEventListener("click",function(){
    window.location.href="favorites.html";
=======
>>>>>>> 484988805157280201d8186d7ac4537307e3993f
});