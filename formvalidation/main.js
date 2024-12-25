const container = document.querySelector(".container")
const headingSpan2 = document.querySelector('.heading-span-2');
const form = document.querySelector('.form')
const signup = document.querySelector('.signup-btn')
const signin = document.querySelector('.signin-btn')
function clearForm() {
    let formInput = document.querySelectorAll('.form-input-wrapper');
    formInput.forEach(function (item) {
        item.className = "form-input-wrapper";
    });
    form.reset()
}
signup.addEventListener('click', function () {
    container.classList.add('change')
    setTimeout(function () {
        headingSpan2.textContent = "Up"

    }, 200)
    form.className = "form sign-up"
    clearForm();
});

signin.addEventListener('click', function () {
    container.classList.remove('change');
    setTimeout(function () {
        headingSpan2.textContent = "In"
    }, 200)
    clearForm();
})

let username = document.getElementById('username')
let email = document.getElementById('email')
let password = document.getElementById('password')
let confirmpassord = document.getElementById('password2');
let form_btn = document.querySelector('.form-btn')
function error(input, message) {
    const inputwrapper = input.parentElement;
    inputwrapper.className = "form-input-wrapper error";
    inputwrapper.querySelector('.message').textContent = message;
}
function success(input) {
    const inputwrapper = input.parentElement;
    inputwrapper.className = "form-input-wrapper success"
}

function checkEmil(input) {
    const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
     if(regEx.test(input.value.trim())){
        success(input)
     }
     else{
        error(input,"Email is Not valid")
     }

}
function checkRequireFields(inputarr){
    inputarr.forEach(function(input){
        if(input.value.trim() ===""){
            if(input.id ==="password2"){
                error(input,"password confirmation is required")
            }
            else{
                error(input ,`${input.id} is requir3ed`)
            }
        }else{
            success(input)
        }
    });
};


function checkLenght(input,min,max){
    if(input.value.length<min){
        error(input,`${input.id} must be at least ${min} characters`);
    }else if(input.value.length >max){
        error(input,`${input.id} must be less than ${max} character`)
    }else{
        success(input)
    }
}
function passwordmatch(input1,input2){
    if(input1.value !==input2.value){
        error(input2,"Password do not mathch")
    }

};

form.addEventListener('submit',function(e){
    e.preventDefault()
    if(form.classList[1] ==="sign-up"){
        checkRequireFields([username,email,password,confirmpassord])
        checkLenght(username , 2, 15);
        checkLenght(password,5,25);
        passwordmatch(password,);
    }else{
        checkRequireFields([email,password])
    }
    checkEmil(email)


})
