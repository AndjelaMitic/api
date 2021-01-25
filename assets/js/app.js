const api = new XMLHttpRequest();
api.open('GET',`https://restcountries.eu/rest/v2/name/spain`);
api.send();
// console.log(api);
api.addEventListener('load', function(){
  const [data] = JSON.parse(api.responseText);
  console.log(data);
  const html = `
  <div class="country box-shadow">
  <div class="flag_wrapper">
  <img src="${data.flag}"/>
  </div>
  <div class="country_info">
  <h1 class="contry_name">${data.name} ~ ${data.nativeName}</h1>
  <h2>${data.region} - ${data.subregion}</h2>
  <h3 class="capitol_city">${data.capital}</h3>
  <p>${data.timezones[0]}</p>
  <p>${data.currencies[0]['name']} : ${data.currencies[0]['code']} (${data.currencies[0]['symbol']})</p>
  </div>
  </div>
  `;
  var renderDom = document.getElementById('generateDom');
  renderDom.insertAdjacentHTML('beforeend',html);
})
