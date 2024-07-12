const form = document.querySelector("form");
// this usecases will give you empty
// const height = parseInt(document.querySelector('#height').value)
// const weight = parseInt(document.querySelector('#weight').value)

form.addEventListener('submit', function(e)  {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = `Please give a valid height ${height}`
    }
    else if(weight === '' || weight < 0 || isNaN(weight)){
    results.innerHTML = `Please give a valid weight ${weight}`
    }else{
       const bmi =  (weight / ((height*height) / 10000)).toFixed(2);

        results.innerHTML = `<span> ${bmi} </span>`
    
    const wguide = document.querySelector("#weight-guide")
    // console.log( wguide.children);
    if(bmi < 18.6){
        wguide.children[1].innerHTML = `Under weight`
    }else if(bmi > 18.6 && bmi < 24.9 ) {
        wguide.children[2].innerHTML = `Normal range`
    } else if(bmi > 24.9){
        wguide.children[3].innerHTML = `Over weight`
    }
        
}
});