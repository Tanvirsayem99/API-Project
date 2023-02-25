const loadMeals = (sayem) =>{
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${sayem}`;
  fetch(url)
  .then(res => res.json())
  .then(data => displayItem(data.meals.slice(0,6)))
}
const displayItem = foods =>{
  const parent = document.getElementById('main');
  parent.innerHTML = '';
  foods.forEach(food =>{
    const div = document.createElement('div');
    
    div.classList.add('w-auto');
    div.classList.add('flex');
    div.classList.add('col');
    div.innerHTML= `
    <div class="w-2/3">
          <img src="${food.strMealThumb}" alt="" class="h-full">
        </div>
        <div class="bg-slate-100">
          <h4 class="font-semibold text-center py-5">${food.strMeal}</h4>
          <p class="text-sm pl-3 pb-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur, eius.</p>
          <label for="my-modal"><a class="pl-3 text-orange-500 " onclick="modal()">view Details</a></label>
    </div>
    `;
    parent.appendChild(div);
    console.log(food)  
  })
  
  
}

const showAllDataTogether = () => {
  const value = document.getElementById('value').value;

  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`;
  fetch(url)
  .then(res => res.json())
  .then(data => displayItem(data.meals))
};

const search = () =>{
  const value = document.getElementById('value').value;
   loadMeals(value);
   
   
}

const modal = () =>{
  const title = document.getElementById('modal-title').innerText;
  title = food.strMeal;
}

loadMeals('chicken')
