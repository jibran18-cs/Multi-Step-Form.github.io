//1- In 1st step we get form using DOM property called query selector
const multiStepForm= document.querySelector('[data-multi-step]');
//2= This is our 2nd step and we get all data steps , we want to iterate them later
// so we have to make it an array
const formSteps= [...multiStepForm.querySelectorAll("[data-step]")];
//3- It is one of the most imp step in which we have to make current step using active
// class . Current step step is set as defualt. It is used to hide other pages of
// form and just show the current page
let currentStep = formSteps.findIndex(step =>{
    return step.classList.contains("active")
})
//4- Now if no class is active then value will be -1 so we make a div to make its 
// value 0
if(currentStep<0){
    currentStep = 0;
    showCurrentStep()
}

//5- Now question arise how we can increase/ decrease our step when we click
// next/previous? and answer is we will add an event listener which will inceaser/
// decrease step when we click next/previous button 
multiStepForm.addEventListener( "click", e=>{
    let increment
    if(e.target.matches("[data-next]")){
       increment=1;
       
    }
    else if(e.target.matches("[data-previous]")){
        increment=-1;
     }
     if(increment==null) return
// 7- In 6th step we move to next page without filling email section so we want
// to make it cumpolsory to fill email section so here we get inputs and by using
// checkValidity function we did it
     const inputs= [...formSteps[currentStep].querySelectorAll('input')];
     const allValid= inputs.every( inputs=>
        inputs.reportValidity()
        )
        if(allValid){
            currentStep +=increment
              showCurrentStep()
 
          }
    }
  
    )
//   6- Now we want to show next step when we click next button and previous step
// when we click previous so we make a function which uses active class cleverly
// using toggle method
    function showCurrentStep(){
        formSteps.forEach((step, index)=>{
            step.classList.toggle("active" ,index===currentStep)

        })

    }