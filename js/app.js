const loadPhones=async(searchText)=>{
    const url=`https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    const res=await fetch(url);
   const data= await res.json();
   displayPhones(data.data);
}

const displayPhones=phones=>{
    const phoneContainer=document.getElementById('phone-container');
    phoneContainer.textContent=` `;
    phones=phones.slice(0,10)
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

document.getElementById('btn-search').addEventListener('click',function(){
  // start spinner
    toggleSpinner(true);
    const searchField=document.getElementById('search-field')
    const searchText=searchField.value;
    loadPhones(searchText)
    searchField.value=" ";
})
  const toggleSpinner=isloading=>{
    const loaderSection=document.getElementById('loader');
    if(isloading){
      loaderSection.classList.remove('d-none')
  }else{
    loaderSection.classList.add('d-none')
  }
  }
// loadPhones();