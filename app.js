const wellcomeTextElement = document.createElement("h1"); 
wellcomeTextElement.innerHTML = "";
wellcomeTextElement.setAttribute("id","userText");                  
document.body.appendChild(wellcomeTextElement);

const ageTextElement=document.createElement("h1");
ageTextElement.innerText="";
ageTextElement.setAttribute("id","agetext");
document.body.appendChild(ageTextElement);

const videoElement=document.createElement("video");
videoElement.setAttribute("id","video");
videoElement.setAttribute("autoplay","true");
document.body.appendChild(videoElement);

const canvasElement=document.createElement("canvas");
canvasElement.setAttribute("width","300");
canvasElement.setAttribute("height","300");
canvasElement.setAttribute("id","canvas");
canvasElement.style.display="none";
document.body.appendChild(canvasElement);

const imageElement = document.createElement("img");
imageElement.setAttribute("id","img");
document.body.appendChild(imageElement);

const refreshButton=document.createElement("button");
refreshButton.innerText="refresh";
refreshButton.setAttribute("id","refreshbutton");
document.body.appendChild(refreshButton);

const captureButton=document.createElement("button");
captureButton.innerText="Capture";
captureButton.setAttribute("id","capturebutton");
document.body.appendChild(captureButton);

let canvas =document.getElementById("canvas");
var context = canvas.getContext("2d");
let video = document.getElementById("video");

function setUser() {
    if(localStorage.getItem("userName")===null) {
        while(1) {
            let userName ="";
            userName = prompt("Please enter your name:","Your Name");
            if(userName!=null && userName!="") {
                localStorage.setItem("userName",userName);
                break;
            }
        }
        while(1) {
            let userDOB="";
            userDOB = prompt("Please enter your BirthDay:","YYYY-MM-DD");
            if(userDOB!=null && userDOB!="") {
                localStorage.setItem("userDOB",userDOB);
                break;
            }
        }
    }
}
function runVideo() {
    if(navigator.mediaDevices.getUserMedia && !localStorage.getItem("image")) {
        navigator.mediaDevices.getUserMedia({video:true}).then(stream=>{
            video.srcObject=stream;
            video.play();
        });
    }
    else {
        document.getElementById("video").style.display="none";
        document.getElementById("capturebutton").style.display="none";
    }
}
function getImage() {
    var dataURL = localStorage.getItem("image");
    document.getElementById("img").src=dataURL;
}
runVideo();
getImage();

document.getElementById("refreshbutton").addEventListener("click",()=>{
    document.getElementById("userText").innerText="";
    document.getElementById("agetext").innerText="";
    document.getElementById("img").setAttribute("src","");
    document.getElementById("video").style.display="block";
    document.getElementById("capturebutton").style.display="inline";
    document.getElementById("refreshbutton").style.display="none";
    localStorage.clear();
    runVideo();
})

document.getElementById("capturebutton").addEventListener("click", ()=>{
    context.drawImage(video,0,0,300,300);
    localStorage.setItem("image", canvas.toDataURL());
    document.getElementById("video").style.display="none";
    document.getElementById("capturebutton").style.display="none";
    document.getElementById("refreshbutton").style.display="block";
    getImage();
});
setInterval(() => {
    setUser();
    const currentDate=new Date();
    const dobDate= new Date(localStorage.getItem("userDOB"));
    const ageYear=parseInt(currentDate.getFullYear()) -parseInt(dobDate.getFullYear());
    const ageMonth=parseInt(currentDate.getMonth())-parseInt(dobDate.getMonth());
    const ageDay=parseInt(currentDate.getDate())-parseInt(dobDate.getDate());
    const ageHour=parseInt(currentDate.getHours())-parseInt(dobDate.getHours());
    const ageMinutes=parseInt(currentDate.getMinutes())-parseInt(dobDate.getMinutes());
    const ageSecond=parseInt(currentDate.getSeconds())-parseInt(dobDate.getSeconds());
    const totalAge=`Your Age is: ${ageYear} Years,${ageMonth} Months,${ageDay} days, ${ageHour} hours,${ageMinutes} minutes,${ageSecond} seconds`;
    if(ageDay>=0 && ageDay<31 && ageYear>=0 && ageYear<500 && ageMonth>=0 && ageMonth<12) {
        document.getElementById("userText").innerText=`Hello ${localStorage.getItem("userName")}!! How are you today?`;
        document.getElementById("agetext").innerText=totalAge;
    }
    else{
        localStorage.clear();
        alert("Birthday should be valid");
        setUser();
    }

}, 1000);