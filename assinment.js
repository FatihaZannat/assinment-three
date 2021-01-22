// https://github.com/FatihaZannat/assinment-3

function kilometerToMeter(distence){
    // 1 km = 1000m
    if(distence <0){
        return 'distance can not negative'
    }else{
        total = distence *1000

        return  total
    }  
}
var result = kilometerToMeter(5)
console.log(result)






function budgetCalculator(watch,mobile,laptop){
 if(watch < 0){
     return 'Please,input valid number'
 }else if(mobile < 0){
    return 'Please,input valid number'
 }else if(laptop < 0){
    return 'Please,input valid number'
 }
 else{
    // watch price = 50, mobile price = 100, laptop price = 500
    var  watch = watch*50;
    var mobail = mobile*100;
    var laptop = laptop*500;
    var totalPrice = watch + mobail + laptop
  
    return totalPrice
 }
}
var result = budgetCalculator(2,0,1)
console.log(result)





function hotelCost(day){
    if(day <=0){
        return 'you have to stay at least one day'
    }
    else if(day <= 10){

       return 100*day
    }
    else if(day<= 20){
        var firstPart = 100* 10;
        var remaining = day - 10
        var secondPart = remaining * 80

        return firstPart + secondPart
    } else {
      var firstPart= 100* 10;
      var secondPart = 80 * 10;
      var remaining = day - 20;
      var thirdPart = remaining * 50
      
       return  firstPart + secondPart + thirdPart
    }
}
var result = hotelCost(0)
console.log(result)







function megaFriend(bestFriend){
  if(bestFriend.length === 0){
      return 'You have not any friend.'
  }else{
    var big= [0]
    for (var i = 0; i<bestFriend.length ; i++){
    if(big.length < bestFriend[i].length){
        big = bestFriend[i]
    }
    }
return big
  }
}

var friend =['Pinky','Marufa','Sujit Roy','Rashed','Showkot']
var result = megaFriend(friend)
console.log(result)