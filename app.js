var myStorage = window.localStorage;
if(myStorage.getItem("userName")==null) {
    while(1) {
        let userName ="";
        userName = prompt("Please enter your name:","Your Name");
        if(userName!=null && userName!="") {
            myStorage.setItem("userName",userName);
            break;
        }
    }
    while(1) {
        let userDOB="";
        userDOB = prompt("Please enter your BirthDay:","YYYY-MM-DD");
        if(userDOB!=null && userDOB!="") {
            myStorage.setItem("userDOB",userDOB);
            break;
        }
    }
}

const wellcomeTextElement = document.createElement("h1"); 
wellcomeTextElement.innerHTML = `Hello ${myStorage.getItem("userName")}!! How are you today?`;
wellcomeTextElement.style.textAlign="center";                  
document.body.appendChild(wellcomeTextElement);


const dobDate= new Date(myStorage.getItem("userDOB"));

const ageTextElement=document.createElement("h1");
ageTextElement.innerText="";
ageTextElement.style.textAlign="center";
ageTextElement.setAttribute("id","agetext");
document.body.appendChild(ageTextElement);

setInterval(() => {
    const currentDate=new Date();
    const ageYear=parseInt(currentDate.getFullYear()) -parseInt(dobDate.getFullYear());
    const ageMonth=parseInt(currentDate.getMonth())-parseInt(dobDate.getMonth());
    const ageDay=parseInt(currentDate.getDate())-parseInt(dobDate.getDate());
    const ageHour=parseInt(currentDate.getHours())-parseInt(dobDate.getHours());
    const ageMinutes=parseInt(currentDate.getMinutes())-parseInt(dobDate.getMinutes());
    const ageSecond=parseInt(currentDate.getSeconds())-parseInt(dobDate.getSeconds());
    const totalAge=`Your Age is: ${ageYear} Years,${ageMonth} Months,${ageDay} days, ${ageHour} hours,${ageMinutes} minutes,${ageSecond} seconds`;
    document.getElementById("agetext").innerText=totalAge;
}, 1000);
