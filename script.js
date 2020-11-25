/* We Need to create Html Elements and set it's class attribute in Javascript itself as the chrome extension doesn't accept HTML Code*/
//Create a Container Element
const extensionMain = document.createElement("div");
extensionMain.setAttribute("class","ReadR-extension-main");

//Create a Div for The Highlighter
const mousePointer = document.createElement("div");
mousePointer.setAttribute("class","ReadR-extension-pointer");


//Set parent children relationship
extensionMain.appendChild(mousePointer);
document.body.appendChild(extensionMain);

//add event listeners
window.addEventListener("mousemove",mouseMove);
window.addEventListener("keydown",onKeyDownPress);

//Code for the pointer to chase the mouse
function mouseMove(event) {
    let X = event.clientX;
    let Y = event.clientY;
    mousePointer.style.left = X + "px";
    mousePointer.style.top = Y + "px";
}


//Additional Functionalities
function onKeyDownPress(event){
    
    const mousePointerHeight = mousePointer.clientHeight;
    const mousePointerWidth = mousePointer.clientWidth;
    
    if (event.shiftKey && event.code === "KeyS"){       //Remove the highliter when "Shift + S" is pressed
        extensionMain.style.display = "none";
    } else if (event.shiftKey && event.code === "KeyR") {    //Show the highliter when "Shift + R" is pressed
        extensionMain.style.display = "block";
    } else if (event.shiftKey && event.code === "NumpadAdd"){     //Increase the size of highliter when "Shift + +" is pressed
        mousePointer.style.width = mousePointerWidth + 10 +"px";
        mousePointer.style.height = mousePointerHeight + 10 +"px";
    }else if (event.shiftKey && event.code === "NumpadSubtract"){    //Decrease the size of highliter when "Shift + -" is pressed
        mousePointer.style.width = mousePointerWidth - 10 +"px";
        mousePointer.style.height = mousePointerHeight - 10 +"px";
    }
}
