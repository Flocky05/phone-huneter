const loadPhones=async(searchText,dataLimit)=>{
    const url=`https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    const res=await fetch(url);
   const data= await res.json();
   displayPhones(data.data,dataLimit);
}

const displayPhones=(phones,dataLimit)=>{
    const phoneContainer=document.getElementById('phone-container');
    phoneContainer.textContent=` `;
    // showAll part start
    const showAll=document.getElementById('show-all');
    if(dataLimit &&(phones.length)>10){
      phones=phones.slice(0,10);
     
      showAll.classList.remove('d-none');
    }else{
      showAll.classList.add('d-none');
    }
    // show warning
    const noPhone=document.getElementById('no-found-message');
    if(phones.length===0){
      noPhone.classList.remove('d-none');
    }else{
      noPhone.classList.add('d-none');
    }
    phones.forEach(phone=>{
        console.log(phone);
        const phoneDiv=document.createElement('div');
        phoneDiv.classList.add('col')
        phoneDiv.innerHTML=`
        <div class="card">
        <img src="${phone.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${phone.phone_name}</h5>
          <p class="card-text">Brand:${phone.brand}</p>
        </div>
      </div>
            
        `;
        phoneContainer.appendChild(phoneDiv);
    });
    toggleSpinner(false);
}

const procesSearch =(dataLimit)=>{
  toggleSpinner(true);
    const searchField=document.getElementById('search-field')
    const searchText=searchField.value;
    loadPhones(searchText,dataLimit)
    // searchField.value=" ";
}

document.getElementById('btn-search').addEventListener('click',function(){
  // start spinner
    procesSearch(10);
})
  const toggleSpinner=isloading=>{
    const loaderSection=document.getElementById('loader');
    if(isloading){
      loaderSection.classList.remove('d-none')
  }else{
    loaderSection.classList.add('d-none')
  }
  }

  document.getElementById('btn-show-all').addEventListener('click',function(){
    procesSearch();
  })
// loadPhones();