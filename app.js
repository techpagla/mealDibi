const  getText = () =>  {
    var inputText = document.getElementById('input-text');
    var searchValue = inputText.value;
    inputText.value = '';
   
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchValue}`;
    
    fetch(url)
    .then(res => res.json())
    .then ( data => displayData(data.data));

}

