const  getText = () =>  {
    var inputText = document.getElementById('input-text');
    var searchValue = inputText.value;
    searchValue = '';
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputText.value}`;
    
    fetch(url)
    .then(res => res.json())
    .then ( data => displayData(data.meals));

}

function  displayData(meals) {
    const mealRapper = document.getElementById('meals-rapper');
        meals.forEach( item => {
          // console.log(item);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class='card h-100' onclick='loadDetail(${item.idMeal})'>
        <img src='${item.strMealThumb}' class='card-img-top' alt='...'>
        <div class='card-body'>
          <h5 class='card-title'>${item.strMeal}</h5>
          <p class='card-text'> ${item.strInstructions.slice(0,200)}..<span> <a href=''> More </a> </span> </p>
        </div>
      </div>
        `;
        mealRapper.appendChild(div);
    } )
}

const loadDetail = mealId => {
	console.log(mealId);
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
  fetch(url)
  .then (res => res.json())
  .then (data => mealDetails(data.meals[0]))

}
const mealDetails = details => {
    console.log(details)
    const div = document.getElementById('mealdetails');
    div.innerHTML = `
    <div class='card' style='width: 18rem;'>
    <img class='card-img-top' src='${details.strMealThumb}' alt='Card image cap'>
    <div class='card-body'>
      <h5 class='card-title'>${details.strMeal}</h5>
      <p class='card-text'>${details.strInstructions.slice(1,100)}</p>
      <a href='${details.strYoutube}' target='_blank' class='btn btn-primary'>Video</a>
    </div>
  </div> 
    `;
    
}


//update single details in to card
