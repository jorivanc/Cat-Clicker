$(function(){

  class Cat{
    constructor(name, image){
        this.name = name;
        this.image = image;
        this.clickCounter = 0;
    }
    loadCatToListHTML(container){
      container.html(container.html() + `<li id="${this.name}" class="cats_list_item"> ${this.name} </li>`);
    }
    loadCatInContainer(container){
      container.html(`
                      <h2>${this.name}</h2>
                      <img class="cat" id="${this.name}" src="${this.image}" alt="Cat">
                      <p id="counter_display_${this.name}"> You have clicked on ${this.name} ${this.clickCounter} times </p>`);
    }
    clicked(){
      this.clickCounter++;
    }
    updateCounterOnContainer(paragraph){
      paragraph.html(`You have clicked on ${this.name} ${this.clickCounter} times`);
    }
  }//End Cat class


  let cats = [];
  let catsNames = ['Mac', 'Cheese', 'Puff', 'Dandy', 'Mr White'];
  let catImages = ['images/cat1.jpg', 'images/cat2.jpg', 'images/cat3.jpg', 'images/cat1.jpg', 'images/cat2.jpg'];
  let catListContainer = $('#cats_list');

  function createCats(numberOfCats, names, images){
    for(let index = 0; index < numberOfCats; index++){
      cats[index] = new Cat(names[index], images[index]);
      cats[index].loadCatToListHTML(catListContainer);
    }
  }//End createCats function

  //creates 5 cats
  createCats(5,catsNames,catImages);

  //when a cat is clicked looks for which cat was actually clicked and updates the count and displays it in the container
  $('.cats_list_item').on('click', function(event){
    let catClickedName = $(event.target).attr('id');
    //also i could have used let catClicked = cats.filter( obj => {return obj.name == catClickedName})[0];
    let catClicked = cats.find(obj => obj.name === catClickedName)
    catClicked.loadCatInContainer($('#cats_container'));
  });

  //when a cat image has been clicked it will update the counter (only that paragraph)
  $('#cats_container').on('click', function(event){
    let catClickedName = $(event.target).attr('id');
    let catClicked = cats.find(obj => obj.name === catClickedName)
      catClicked.clicked();
      catClicked.updateCounterOnContainer($('#cats_container p[id^="counter_display_"]'));
  });
});
