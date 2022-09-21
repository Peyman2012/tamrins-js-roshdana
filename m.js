

const num = [
        {number: 1, name: 'laptop', price: 1000},
        {number: 2, name: 'airpod', price: 2000},
        {number: 3, name: 'mobile', price: 3000},
        {number: 4, name: 'headphone', price: 500}
];
function getAlist(num,value){
    return num.filter(function(ele){ 
        return ele.name != value; 
    });
        
}
        
console.log(getAlist(num,"laptop"))
function getClist(num){
    return num.filter(function(ele){ 
        return (ele.number>2 && ele.price>1000); 
                                  }) 
}
 console.log(getClist(num))

 function getBlist(num){ 
    num.find(function(ele){
        if (ele.number>2 && ele.price>1000)
               console.log(ele.name)
                                   })    
}
getBlist(num)     



