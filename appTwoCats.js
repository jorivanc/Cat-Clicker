$(function(){
  class Cat{
    constructor(name, image){
      this.name = name;
      this.counter = 0;
      this.image = image;
    }

    loadCat(){
      let container = $('#cats_container');
      let containerCurrentHTML = container.html();
      let newCatHTML = `  <p>${this.name}</p>
                          <img class="cat" id="${this.name}" src="${this.image}" alt="Cat">
                          <p id="counter_display_${this.name}"> You have clicked on ${this.name} 0 times </p>`;
      container.html(containerCurrentHTML+newCatHTML);
    }

    clicked(){
      this.counter++;
    }
  }

  let cat1 = new Cat('Mac','images/cat1.jpg');
  cat1.loadCat();
  let cat2 = new Cat('Cheese','images/cat2.jpg');
  cat2.loadCat();


  $('.cat').on('click', function(event){
    let catClicked;
    if($(event.target).attr("id") == cat1.name){
      catClicked = cat1;
      cat1.clicked();
      }else {
        catClicked = cat2;
        cat2.clicked();
      }
    $("#counter_display_" + catClicked.name).text(`You have clicked on ${catClicked.name} ${catClicked.counter} times`);
  });
});
