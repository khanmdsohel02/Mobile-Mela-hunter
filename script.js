const allMobile =( ) =>{
    const searchValue =document.getElementById("search-box").value;
    // console.log(searchValue);

    const url =`https://openapi.programming-hero.com/api/phones?search=${searchValue}`;
    // console.log(url);

    fetch(url)
    .then((response) => response.json())
    .then((data) => showMobiles(data.data));

};

const showMobiles = (mobiles) => {
    // console.log(mobiles);
     
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
  //  console.log(info);

  const url =`https://openapi.programming-hero.com/api/phone/${info}`
  // console.log(url);
  
  fetch(url)
    .then((response) => response.json())
    .then((data) => showDetailInfo(data.data));

}
const showDetailInfo =(singlemobileinfo)=>{
console.log(singlemobileinfo);

const parent = document.getElementById("single-mobile-info");

const div = document.createElement("div");

   div.innerHTML =`<div class=" card h-100 w-75 mx-auto">
   <img src="${singlemobileinfo.image}" class="card-img-top p-3" alt="...">
   <div class="card-body">
     <h2 class="card-title">${singlemobileinfo.name}</h2>
     <h3 class="card-text">${singlemobileinfo.releaseDate}</h3>
   </div>
   <ul class="list-group list-group-flush">
     <li class="list-group-item fw-bold">Screen Size: ${singlemobileinfo.mainFeatures.displaySize}</li>
     <li class="list-group-item fw-bold">Memory: ${singlemobileinfo.mainFeatures.memory}</li>
     <li class="list-group-item fw-bold">Storage: ${singlemobileinfo.mainFeatures.storage}</li>
     <li class="list-group-item fw-bold">ChipSet: ${singlemobileinfo.mainFeatures.chipSet}</li>
     <li class="list-group-item fw-bold">Sensors: ${singlemobileinfo.mainFeatures.sensors}</li>
     <li class="list-group-item fw-bold">Bluetooth: ${singlemobileinfo.others.Bluetooth}</li>
     <li class="list-group-item fw-bold">USB: ${singlemobileinfo.others.USB}</li>
   </ul>
   
 </div>`
 parent.appendChild(div);

}
