/**LOGIN PAGE <> **/
const user = document.querySelector(".user");
const pass = document.querySelector(".pass");
const userLabel = document.querySelector(".userLabel")
const passLabel = document.querySelector(".passLabel")

const userReg = document.querySelector("#userReg")
const passReg = document.querySelector("#passReg")
const userRegLabel = document.querySelector("#userRegLabel")
const passRegLabel = document.querySelector("#passRegLabel")

const blackbox = document.querySelector(".blackbox");
const loginArea = document.querySelector(".loginArea")
const regArea = document.querySelector(".regArea")
const signUp = document.querySelector(".signUpTxt");
const signUpTxt = signUp.textContent;
const arrowRight = document.getElementById("arrow-right")
const arrowLeft = document.getElementById("arrow-left")

/**username and password animation <> **/
function setUpForm(input, label){
  input.addEventListener("focus", ()=>{
    label.classList.add("active");
  });
  input.addEventListener("blur", ()=>{
    if(input.value.trim() === ""){
      label.classList.remove("active");
     }
  });
};
const groupClass = [[user, userLabel], [pass, passLabel], [userReg, userRegLabel], [passReg, passRegLabel]]

function fillSetUpForm(fill){
  fill.forEach(([input, label]) => 
  setUpForm(input, label));
}
fillSetUpForm(groupClass);
/** username and password animation </> **/

/**
arrowRight.addEventListener("click", ()=>{
  blackbox.classList.add("active");
  loginArea.classList.add("active");
  regArea.classList.add("active");
  
  signUp.classList.add("active");
  signUp.textContent = "LOGIN";
});

arrowLeft.addEventListener("click", ()=>{
  blackbox.classList.remove("active");
  loginArea.classList.remove("active");
  regArea.classList.remove("active");
  
  signUp.classList.remove("active");
  signUp.textContent = signUpTxt;
});
**/
/**blackbox animation ↓↓↓**/
const elements = [blackbox, loginArea, regArea, signUp];

function rightClass (classes){
  classes.forEach(el => el.classList.add("active"));
  signUp.textContent = "LOGIN";
}
function leftClass (classes){
  classes.forEach(el => el.classList.remove("active"));
  signUp.textContent = signUpTxt;
}

arrowRight.addEventListener("click", ()=>{
  rightClass(elements);
})
arrowLeft.addEventListener("click", ()=>{
  leftClass(elements);
})
/**blackbox animation ↑↑↑**/

/**
user.addEventListener("focus", ()=>{
  userLabel.classList.add("active");
});
user.addEventListener("blur", ()=>{
  if(user.value.trim() === ""){
    userLabel.classList.remove("active");
  }
});

pass.addEventListener("focus", ()=>{
  passLabel.classList.add("active");
});
pass.addEventListener("blur", ()=>{
  if(pass.value.trim() === ""){
    passLabel.classList.remove("active");
  }
});
**/
/**LOGIN PAGE </> **/

/**ALTERNATIVE LOGIN METHOD **/
const logBtn = document.querySelector(".logBtn");
const userLog = document.getElementById("userLog");
const passLog = document.getElementById("passLog");
const altUser = "admin";
const altPass = "1234";
/**
logBtn.addEventListener("click", ()=> {
  if(userLog.value === altUser && passLog.value === altPass){
      window.location.href = "home.html";
  }else{
    alert("Something Wrong!")
  }
});
**/
function myfunc(event){
  event.preventDefault();
  
  if(userLog.value === altUser && passLog.value === altPass){
      window.location.href = "home.html";
  }else{
    alert("Something Wrong!")
  }
}