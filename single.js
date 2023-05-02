const addToCartBtn = document.querySelector(".addtocart");
const itemCount = document.querySelector(".item-count");
const itemCount2 = document.getElementById("itemcount");

let count = 0;

function tsero (){
  count++;
  itemCount.textContent = count;
  itemCount2.textContent = count;
};

  

function tsero4 (){   
  if(count >= 0 )
    {   
    itemCount.textContent = count;
    itemCount2.textContent = count;
    count--;
    }
  };