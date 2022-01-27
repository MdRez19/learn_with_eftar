let week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

function takeDayOff(offDay1, offDay2){
    for(let i = 0; i < week.length; i++){
        if(week[i] === offDay1){
            console.log('Enjoy your weekend!')
        }else  if(week[i] === offDay2){
            console.log('Enjoy your weekend!')
        }
        else {
            console.log('Go to work!')
        }
    }
}
takeDayOff('Saturday', 'Sunday');