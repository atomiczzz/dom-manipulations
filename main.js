
document.querySelector("#thanks button").addEventListener('click',function(){
  // TASK #1
  alert('Yowch! Dont click me so hard!');
})

document.querySelector("#double button").addEventListener('click',function(){
  // TASK #2
  var num = document.querySelector('#compoundInvestment');
  var numHTML = num.innerHTML
  console.log(numHTML)
  num.innerHTML = numHTML*2
})


document.querySelector("#color-circle button").addEventListener('click',function(){
  // TASK #3
  var circle = document.querySelector('#circle-bw');
  var c1 = {
  	white : true
  }
  var turnBlack = function(){
  	circle.style.backgroundColor ='black';
  	c1['white'] = false;
  	console.log(c1.white);
  }
  var turnWhite = function(){
  	circle.style.backgroundColor ='white';
  	c1['white'] = true;
  if(c1.white === tru
  	console.log(c1)
  }e){
  	turnBlack();
  }
  else {
  	console.log('ok')
  	turnWhite();
  }

})

document.querySelector("#blow-up button").addEventListener('click',function(){
  // TASK #4}
})

document.querySelector("#remove button").addEventListener('click',function(){
  // TASK #5
})


document.querySelector("#reverse-squares button").addEventListener('click',function(){
  // TASK #6
})

document.querySelector("#pig-latin button").addEventListener('click',function(){
  // TASK #7
})

document.querySelector("#cycle-image button").addEventListener('click',function(){
  // TASK #8
})