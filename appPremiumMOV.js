$(function(){

  class Cat{
    constructor(name, image){
        this.name = name;
        this.image = image;
        this.clickCounter = 0;
    }
  }//End Cat class



let model = {

  currentCat: null,
  cats: [],
  catsNames : ['Mac', 'Cheese', 'Puff', 'Dandy', 'Mr White', 'Perry', 'Chicken'],
  catsImages : ['images/cat1.jpg', 'images/cat2.jpg', 'images/cat3.jpg', 'images/cat4.jpg', 'images/cat2.jpg'],

  createCats: function(){
    for(let index = 0; index < 5; index++){
        this.cats[index] = new Cat(this.catsNames[index], this.catsImages[index]);
      }
    }//End createCats function
};//End Model



let octopus = {

  init: function(){
    model.createCats();
    this.setCurrentCat(this.getCatsList()[0]);
    catsListView.init();
    catsContainerView.init();
  },

  getCatsList: function(){
    return model.cats;
  },

  setCurrentCat: function(catClicked){
    model.currentCat = catClicked;
  },

  getCurrentCat: function(){
    return model.currentCat;
  },

  incrementCounter: function(){
    model.currentCat.clickCounter++;
    catsContainerView.render();
  }
};//End Octopus



let catsListView = {

  cats_list: null,

  init: function(){
    this.catsListElement = $('#cats_list');
      this.render();
  },

  render : function(){
    let cats = octopus.getCatsList();
    for(const cat of cats){
        this.catsListElement.html(this.catsListElement.html() + `<li id="${cat.name}" class="cats_list_item"> ${cat.name} </li>`);
      };

      //I use only one event listener and find out which cat was selected, in case I need to add more and more cats it would be costly to add an event listener for every cat
      $('.cats_list_item').on('click', function(event){
        let catClickedName = $(event.target).attr('id');
        let catClicked = cats.find(obj => obj.name === catClickedName);//now finds the cat with that name
        octopus.setCurrentCat(catClicked);
        catsContainerView.render();
      });
  }//End render
}//End catsListView


let catsContainerView = {

  init: function(){
    this.container = $('#cats_container');
    let currentCat = octopus.getCurrentCat();

    this.container.html(`
                    <h2 id="cats_name">${currentCat.name}</h2>
                    <img class="cat" id="${currentCat.name}" src="${currentCat.image}" alt="Cat">
                    <p id="counter_display_${currentCat.name}"> You have clicked on ${currentCat.name} ${currentCat.clickCounter} times </p>`);
    $('img').on('click', function(event){
        octopus.incrementCounter();
      });
  },

  render: function(){

    let currentCat = octopus.getCurrentCat();
    let h2Element = document.getElementById('cats_name');   //I am just mixing vanilla JavaScript to test that it works
    let imgElement = $('img');
    let pElement = $('p');

    h2Element.textContent = currentCat.name;   //I am just mixing vanilla JavaScript to test that it works
    imgElement.attr("id", `${currentCat.name}`);
    imgElement.attr("src", `${currentCat.image}`);
    pElement.html(`You have clicked on ${currentCat.name} ${currentCat.clickCounter} times `);
  }
}

  octopus.init();
});//End catsContainerView

// setAttributes: function(element,attributes){
//   for(let key in attributes){
//     element.setAttribute(key, attributes[key]);
//   }
// }
