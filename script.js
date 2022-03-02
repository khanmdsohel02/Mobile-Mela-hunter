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
    console.log(mobiles);
     
  for (const mobile of mobiles) {
     const parent = document.getElementById("phone-container");
     const div = document.createElement("div");
   
        div.innerHTML = `<div class="col">
        <div class="card h-75 w-75  bg-info mx-auto">
          <img src="img.jpg" class="card-img-top" alt="...">
          <div class="card-body ms-3">
            <h3 class="card-title mt-2 text-white">ph-name</h3>
            <h4 class="card-text mt-2 text-white">brand</h4>
            <a href="#" class="btn btn-primary fw-bold mt-2">Know More</a>
          </div>
        </div>
      </div>`;
   parent.appendChild(div);
  }
};