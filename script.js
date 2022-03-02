const allMobile =( ) =>{
  document.getElementById("phone-container").innerHTML ="";
  document.getElementById("spinner").style.display = "block";
    const searchValue =document.getElementById("search-box").value;
  const url =`https://openapi.programming-hero.com/api/phones?search=${searchValue}`;
   fetch(url)
    .then((response) => response.json())
    .then((data) => showMobiles(data.data));
};

const showMobiles = (mobiles) => {
    const searchValue =document.getElementById("search-box").value=""
     if(mobiles){
      document.getElementById("spinner").style.display = "none";
     }
      for (const mobile of mobiles) {
        const parent = document.getElementById("phone-container");
     const div = document.createElement("div");
      
          div.innerHTML = ` <div class="col">
          <div class="card h-75 w-75  container mx-auto shadow-lg">
            <img src="${mobile.image}" class="card-img-top pt-2 w-75 h-75 ps-5  " alt="...">
            <div class="card-body">
              <h2 class="card-title text-info ">${mobile.phone_name}</h2>
              <h3 class="card-text text-info ">${mobile.brand} </h3>
              <button onclick="singlePhInfo('${mobile.slug}')"  class="btn btn-primary"  >Know More</button>
            </div>
          </div>
        </div>`;
       parent.appendChild(div);
    };
  };
const singlePhInfo = (info) => {
  document.getElementById("single-mobile-info").innerHTML ="";
  const url =`https://openapi.programming-hero.com/api/phone/${info}`

  fetch(url)
    .then((response) => response.json())
    .then((data) => showDetailInfo(data.data));
}
const showDetailInfo =(singlemobileinfo)=>{
const parent = document.getElementById("single-mobile-info");
const div = document.createElement("div");

   div.innerHTML =`<div class=" card mx-auto h-25 w-50 shadow-lg">
   <img src="${singlemobileinfo.image}" class="card-img-top p-3 img-hw " alt="...">
   <div class="card-body">
     <h2 class="card-title text-info">${singlemobileinfo.name}</h2>
     <h3 class="card-text text-info">${singlemobileinfo.releaseDate}</h3>
   </div>
   <ul class="list-group list-group-flush">
     <li class="list-group-item fw-bold text-info">Screen Size: ${singlemobileinfo.mainFeatures.displaySize}</li>
     <li class="list-group-item fw-bold text-info">Memory: ${singlemobileinfo.mainFeatures.memory}</li>
     <li class="list-group-item fw-bold text-info">Storage: ${singlemobileinfo.mainFeatures.storage}</li>
     <li class="list-group-item fw-bold text-info">ChipSet: ${singlemobileinfo.mainFeatures.chipSet}</li>
     <li class="list-group-item fw-bold text-info">Sensors: ${singlemobileinfo.mainFeatures.sensors}</li>
     <li class="list-group-item fw-bold text-info">Bluetooth: ${singlemobileinfo.others.Bluetooth}</li>
     <li class="list-group-item fw-bold text-info">USB: ${singlemobileinfo.others.USB}</li>
   </ul>
 </div>`
 parent.appendChild(div);

}
