var wellcomeText;
while(1) {
    let person ="";
    person = prompt("Please enter your name:","Your Name");
    wellcomeText = "Hello " + person + "! How are you today?";
    if(person!=null && person!="") break;
}

const wellcomeTextElement = document.createElement("h1"); 
wellcomeTextElement.innerHTML = wellcomeText;
wellcomeTextElement.style.textAlign="center";                  
document.body.appendChild(wellcomeTextElement);

var dobText="";
while(1) {
    dobText = prompt("Please enter your BirthDay:","YYYY-MM-DD");
    if(dobText!=null && dobText!="") break;
}
const dobDate= new Date(dobText);

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
