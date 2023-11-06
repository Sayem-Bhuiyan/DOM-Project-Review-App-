document.getElementById('btn').addEventListener('click', function(){
    // select the input and set the input data
    const input = document.getElementById('text-box');
    const inputData = input.value;

    // create new element 
    const newReview = document.createElement('p');
    newReview.innerText = inputData;
    
    // add new review to the container
    const reviewContainer = document.getElementById('container');
    reviewContainer.appendChild(newReview);
    input.value = '';
})