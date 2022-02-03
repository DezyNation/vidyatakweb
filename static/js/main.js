const navUser = document.getElementById("nav-user");
const sideNav = document.getElementById("side-nav");
const chatSection = document.getElementById("chat-section");
let sideNavVar = 0;
let chatSectionVar = 0;

function openSideNav(){
    sideNavVar++;
    if(sideNavVar%2==0){
        if(screen.width >=769){
            sideNav.style.left = "-24vw";
        }
        else
        sideNav.style.left = "-64vw";
    }
    else{
        sideNav.style.left = "0";
    }
}

function openchatSection(){
    chatSectionVar++;
    if(chatSectionVar%2==0){
        if(screen.width >=769){
            chatSection.style.right = "-28vw";
        }
        else
        chatSection.style.right = "-102vw";
    }
    else{
        chatSection.style.right = "0";
    }
}