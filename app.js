/*
notes:

active step indicator class: .ind-active

if input validation is invalid add .required-span-active to classlist

*/


let toggle = 'monthly' // toggle for monthly or yearly
let step = 1


// go to the next page
function toSecond(){
    step1Val();
    if(step1Val() == true){
        // Go to the next page
        document.getElementsByClassName('first-step')[0].style.display = "none";
        document.getElementsByClassName('second-step')[0].style.display = "block";

        // Clickable boxes
        const selbox = document.getElementsByClassName('selbox')
        selbox[0].addEventListener('click', () => {
            selbox[0].style.borderColor = 'var(--purplish-blue)';
            selbox[1].style.borderColor = 'var(--cool-gray)';
            selbox[2].style.borderColor = 'var(--cool-gray)';
        })
        selbox[1].addEventListener('click', () => {
            selbox[1].style.borderColor = 'var(--purplish-blue)';
            selbox[0].style.borderColor = 'var(--cool-gray)';
            selbox[2].style.borderColor = 'var(--cool-gray)';
        })
        selbox[2].addEventListener('click', () => {
            selbox[2].style.borderColor = 'var(--purplish-blue)';
            selbox[1].style.borderColor = 'var(--cool-gray)';
            selbox[0].style.borderColor = 'var(--cool-gray)';
        })

        // Toggle button
        document.getElementsByClassName('slider')[0].addEventListener('click', ()=>{
            toggle = (toggle == 'monthly') ? 'yearly' : 'monthly'
            console.log(toggle)
            let free = document.getElementsByClassName('free')
            let prices = document.getElementsByClassName('prices')
            if(toggle == 'yearly'){
                document.getElementsByClassName('monthly-text')[0].style.color = 'var(--cool-gray)'
                document.getElementsByClassName('yearly-text')[0].style.color = 'var(--marine-blue)'
                for(i=0; i<free.length; i++){free[i].style.display = 'block'}
                prices[0].innerHTML = '$90/yr'; prices[1].innerHTML = '$120/yr'; prices[2].innerHTML = '$150/yr';
            }else if(toggle = 'monthly'){
                document.getElementsByClassName('yearly-text')[0].style.color = 'var(--cool-gray)'
                document.getElementsByClassName('monthly-text')[0].style.color = 'var(--marine-blue)'
                for(i=0; i<free.length; i++){free[i].style.display = 'none'}
                prices[0].innerHTML = '$9/mo'; prices[1].innerHTML = '$12/mo'; prices[2].innerHTML = '$15/mo';
            }

        })

        // Changing onclick value of the next button to make it go third page when clicked
        document.getElementsByClassName('next-button')[0].setAttribute('onclick', 'toThird()');

        // Step variable
        step++
    }
}

function toThird(){
    checkboxVal();
    
    if(step2Val() == true){
        document.getElementsByClassName('second-step')[0].style.display = 'none';
        document.getElementsByClassName('third-step')[0].style.display = 'block';
        step = step + 1;
        document.getElementsByClassName('next-button')[0].setAttribute('onclick', 'toFourth()');
    }

    
}

function toFourth(){
    step++
    document.getElementsByClassName('third-step')[0].style.display = 'none';
    document.getElementsByClassName('fourth-step')[0].style.display = 'block';
    document.getElementsByClassName('next-button')[0].setAttribute('onclick', 'toFifth()');
}

function toFifth(){
    document.getElementsByClassName('fourth-step')[0].style.display = 'none';
    document.getElementsByClassName('fifth-step')[0].style.display = 'block';
}


// Function to validate checkboxes
function checkboxVal(){
    let checkboxes = document.getElementsByClassName('checkbox-tick')
    let boxes = document.getElementsByClassName('checkbox')
    let prices2 = document.getElementsByClassName('checkbox-price')
    // console.log(checkboxes)
    if(toggle == 'monthly'){
        for(i=0; i<prices2.length; i++){
            if(i == 0){
                prices2[i].innerHTML = '+$1/mo';
            }else{
                prices2[i].innerHTML = '+$2/mo'
            }
        }
    }else if(toggle == 'yearly'){
        for(i=0; i<prices2.length; i++){
            if(i == 0){
                prices2[i].innerHTML = '+$10/yr';
            }else{
                prices2[i].innerHTML = '+$20/yr'
            }
        }
    }
    setInterval(() => {    
        for(i=0; i<checkboxes.length; i++){
            if(checkboxes[i].checked == true){
                boxes[i].classList.add('checkbox-active')
            }else{
                boxes[i].classList.remove('checkbox-active')
            }
        }
    }, 100);
}

// Function to validate steps to go next step and return true if everything is ok
function step1Val(){
    let name = false; let email = false; let number = false;
    // Name input val
    if(document.getElementsByClassName('name-input')[0].value == ''){
        document.getElementsByClassName('req-name')[0].classList.add('required-span-active')
        document.getElementsByClassName('name-input')[0].classList.add('invalid-input')
        name = false;
    }else{
        document.getElementsByClassName('req-name')[0].classList.remove('required-span-active')
        document.getElementsByClassName('name-input')[0].classList.remove('invalid-input')
        name = true;
    }

    // Email input val
    if(document.getElementsByClassName('email-input')[0].value == ''){
        document.getElementsByClassName('req-email')[0].classList.add('required-span-active')
        document.getElementsByClassName('email-input')[0].classList.add('invalid-input')
        email = false;
    }else{
        document.getElementsByClassName('req-email')[0].classList.remove('required-span-active')
        document.getElementsByClassName('email-input')[0].classList.remove('invalid-input')
        email = true;
    }

    // Number input val
    if(document.getElementsByClassName('number-input')[0].value == ''){
        document.getElementsByClassName('req-number')[0].classList.add('required-span-active')
        document.getElementsByClassName('number-input')[0].classList.add('invalid-input')
        number = false;
    }else{
        document.getElementsByClassName('req-number')[0].classList.remove('required-span-active')
        document.getElementsByClassName('number-input')[0].classList.remove('invalid-input')
        number = true;
    }

    if(number==true && name==true && email==true){
        return true
    }
    else{
        return false 
    }
}

function step2Val(){
    return (step == 2) ? true : false
}