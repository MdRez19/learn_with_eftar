function weather(str, tem){
    if(str === 'sunny'){
        if(tem < 30){
        console.log('It is ' + tem + 'C degrees outside — nice and sunny. Let\'s go out to the beach, or the park, and get an ice cream.')
        }else if(tem >= 30){
            console.log('It is ' + tem + 'C degrees outside — REALLY HOT! If you want to go outside, make sure to put some sunscreen on.')
        }
    }else  if(str === 'cloudy'){
        console.log('The today weather is cloudy!')
    }else if(str === 'cold'){
        console.log('The today weather is cold!')
    } else {
        console.log('Select the weather forecast!')
    }

}
weather('sunny', 40)