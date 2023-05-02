const createProduct = (name, price, picture) => {
    const container3CardsCard = document.createElement('div');
    const container3VegetableParent = document.createElement('div');
    const container3VegetableSpace = document.createElement('div');
    const container3Vegetable = document.createElement('div');
    const mainImage = document.createElement('img');
    const container3CardTexts = document.createElement('div');
    const container3CardTexts2 = document.createElement('div');
    const gadaxazuliDolari = document.createElement('div');
    const gadaxazuliDolarisFoto = document.createElement('img');
    const container3Stars = document.createElement('div');
    const imgdiv = document.createElement('div');
  
    // add Classes
    container3CardTexts.classList.add('container3-card-texts');
    container3CardTexts2.classList.add('container3-card-texts2');
    container3CardsCard.classList.add('container3-cards-card');
    container3Stars.classList.add('container3-stars');
    container3Vegetable.classList.add('container3-vegetable');
    container3VegetableParent.classList.add('container3-vegetable-parent');
    container3VegetableSpace.classList.add('container3-vegetable-space');
    gadaxazuliDolari.classList.add('gadaxazuli-dolari');
    imgdiv.classList.add('imgdiv');
    mainImage.classList.add('mainImage');
  
    // appends
    container3VegetableParent.appendChild(container3VegetableSpace);
    container3VegetableParent.appendChild(container3Vegetable);
  
    // gadaxazuliDolarisFoto.src="indeximgs/Pricing (1).png";
    gadaxazuliDolari.appendChild(gadaxazuliDolarisFoto);
  
    container3CardTexts2.appendChild(gadaxazuliDolari);
  
    container3CardsCard.appendChild(container3VegetableParent);
    container3CardsCard.appendChild(imgdiv);
  
    //dasetva
    container3CardTexts.innerHTML = name;
    imgdiv.style.backgroundImage=`url(${picture})`;
    // mainImage.src = picture;
    // imgdiv.appendChild(mainImage);
  
    // create five new img elements with src 'indeximgs/stars.png' and class 'stars1'
    for (let i = 0; i < 5; i++) {
      const starImg = document.createElement('img');
      starImg.setAttribute('src', 'indeximgs/stars.png');
      starImg.classList.add('stars1');
      container3Stars.appendChild(starImg);
    }
  
    console.log(imgdiv);
  
    return container3CardsCard;
  };
    
    
    
    
    const productLis = [
      {
        name: 'kitri',
        price:'20',
        photo: `/indeximgs/eggs.png`
      },
      {
        name: 'pamidori',
        price:'15',
        photo: '/indeximgs/kenkra.png'
      },
      {
        name: 'kitri',
        price:'26',
        photo: '/indeximgs/flowers.png'
      },
      {
        name: 'brokoli',
        price:'20',
        photo: '/indeximgs/banana.png'
      },
    ]
    
    productList.map(product => {
      const container3Cards = document.querySelector('.container3-cards');
      container3Cards.appendChild(createProduct(product.name, product.price, product.photo));
    })