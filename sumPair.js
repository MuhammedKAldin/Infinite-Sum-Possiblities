nums = [1,2,3,4,5,6,7,8,9];
target = 12;

var twoSum = function(num, target) {
    //let arrAnswers = new Map();
     num.map(function(val,index)
     {
         const secondPair = target - val;
         if(num.includes(secondPair)) {
            return console.log(secondPair , val);
         }
     });
 };

twoSum(nums,target);
