function calculateDemeritPoints(speed){
    const speedLimit = 70;
    const kmPerPoint = 5;

    if ( speed < speedLimit ){
        return 'ok'
    }
    const point = math.floor(speed - speedLimit/kmPerPoint)
    //math.floor is used to roundoff the number to the nearest whole number
    if ( points > 12 ){
        return 'License suspended'
    }
    //if points are less than 12 return the value of the points
    else{
    return 'Points: " + points'}
}
console.log(calculateDemeritPoints());
