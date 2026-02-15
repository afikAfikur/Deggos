const starup = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/videos/categories",
  );
  const data = await res.json();
   
  printing(data.data);
};

const printing = (ar) => {

  
  const hednav = document.getElementById("firs-sec-container");
  ar.forEach((element) => {
    
    const btn = document.createElement("button");
    btn.classList.add(
      "first-sec-btn",
      "btn-sm",
      "w-fit",
      "bg-base-200",
      "border",
      "border-base-300",
      "rounded-xl",
      "font-bold",
      "px-2","hover:bg-yellow-400",
    );

    btn.innerText = element.category;
   btn.addEventListener('click',()=>{
    catogoryvedio(element.category_id)
    holud(btn);
   })
  
    hednav.appendChild(btn);
  });
};
const holud=(btn)=>{
  const all=document.querySelectorAll('.first-sec-btn')
  
  all.forEach((item)=>{
    item.classList.remove("bg-yellow-400"); 
    item.classList.add("bg-base-200");
  })
  btn.classList.remove("bg-base-200");
  btn.classList.add("bg-yellow-400")
}
const catogoryvedio=(id)=>{
  if(id==1000){
    vediobox();
  }
  else if (id==1005){
    faka();
  }
  else{
  const url=`https://openapi.programming-hero.com/api/phero-tube/category/${id}`
  
  fetchcat(url);
  }
}
const fetchcat=async(url)=>{
  const res=await fetch(url);
  const data=await res.json();
  
  card(data['category']);
}
starup();
const vediobox=async()=>{
    const res=await fetch('https://openapi.programming-hero.com/api/phero-tube/videos');
    const data= await res.json();
    card(data.videos);
    
}
const faka=()=>{
  const container=document.getElementById('vediocard');
container.innerHTML="";
container.classList.remove('grid')
const div=document.createElement('div');
div.classList.add("flex", 
    "flex-col", 
    "justify-center", 
    "items-center", 
    "min-h-[300px]", 
    "w-full");
div.innerHTML=`
<div class="flex flex-col gap-5 items-center justify-center ">
        <img  src="./essensials/Icon.png" alt="">
        <h1 class="text-xl font-bold">Oops!! Sorry ,There is no content here</h1>
       </div>`
container.appendChild(div);
}
const card=(bap)=>{
const container=document.getElementById('vediocard');
container.innerHTML="";
container.classList.add("grid");
bap.forEach(element=>{
    const card=document.createElement('div');
    card.innerHTML=`
     <div class="bg-base-100 w-full rounded-xl overflow-hidden h-full flex flex-col shadow-sm">
          <figure class="relative h-[200px]">
            <img
              src="${element.thumbnail}"
              alt="Shoes"
              class="rounded-xl w-full h-[150px] object-cover"
            />
            <h2
              class="absolute text-white bg-black rounded px-1 bottom-2 right-2"
            >
              3hrs 56 min ago
            </h2>
          </figure>
          <div class="pt-4 px-1 flex gap-4  items-center">
            <div class="avatar">
              <div
                class="ring-primary ring-offset-base-100 w-6 rounded-full ring-2 ring-offset-2 mb-8"
              >
                <img
                  src="${element.authors['0'].profile_picture}"
                />
              </div>
            </div>
            <div>
              <h2 class="font-bold text-[18px]">
                ${element.title}
              </h2>
              <div class="flex items-center gap-2">
                <h2 class="text-gray-600">${element.authors['0'].profile_name
}</h2>
                <img
                  class="w-[24px]"
                  src="./essensials/icons8-verified-48.png"
                  alt=""
                />
              </div>
              <h2 class="text-gray-600">${element.others.views}</h2>
            </div>
          </div>
        </div>
    `
   
    container.appendChild(card)
})

}
vediobox();

