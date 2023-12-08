let addUserForm=document.getElementById("addUserForm");
let nameEl=document.getElementById("name");
let emailEl=document.getElementById("email");
let nameErrMsg=document.getElementById("nameErId");
let emailErrMsg=document.getElementById("emailErrId");
let statusEl=document.getElementById("Status");
let genderMale=document.getElementById("genderMale");
let genderFemale=document.getElementById("genderFemale");
let submitBtn=document.getElementById("btn");
let bodyObject={
name:"",
email:"",
status:"Active",
gender:"Male"
};


nameEl.addEventListener("blur",function(event){
    if(event.target.value===""){
    nameErrMsg.textContent="Required *";
    }else{
        nameErrMsg.textContent="";
    }
});

emailEl.addEventListener("blur",function(event){
    if(event.target.value===""){
        emailErrMsg.textContent="Required *"
    }else{
        emailErrMsg.textContent="";
    }
});


statusEl.addEventListener("change",function(event){
    bodyObject["status"]=statusEl.value;
});

genderMale.addEventListener('change',function(event){
    bodyObject["gender"]=event.target.value;
});

genderFemale.addEventListener('change',function(event){
    bodyObject["gender"]=event.target.value;
});


addUserForm.addEventListener("submit",function(event){
    event.preventDefault();
    if(nameEl.value==="" && emailEl.value===""){
        nameErrMsg.textContent="Required *";
        emailErrMsg.textContent="Required *";

    }else if(nameEl.value===""){
        nameErrMsg.textContent="Required *";

    }else if(emailEl.value===""){
        emailErrMsg.textContent="Required *";
    }else{

    }
bodyObject.name=nameEl.value;
bodyObject.email=emailEl.value;

let options={
    method:"POST",
headers:{
   "Content-Type":"application/json",
   Accept:"application/json",
   Authorization:"Bearer 3d783aab42259f23db5fb6dd5ecdd38eb5370c73a02dc32dc8118bead42fd519",
},
body:JSON.stringify(bodyObject),
};
let url = "https://gorest.co.in/public-api/users";
        
        fetch(url,options)
        .then(function(response){
            return response.json();
        })
        .then(function(jsonData){
            console.log(jsonData);
            if (jsonData.code === 422){
                let errMsg = jsonData.data[0]['message'];
                emailErrMsg.textContent = "Email " + errMsg;
            }
        });







});