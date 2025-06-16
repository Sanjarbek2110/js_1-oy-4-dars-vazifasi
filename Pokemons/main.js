const wrapper = document.querySelector("#box");

for(let i = 0; i < pokemons.length; i++){
    wrapper.innerHTML += 
    `

    <li class="flex flex-col items-center relative rounded-[10px] bg-yellow-400 z-10 shadow-[inset_0px_-2px_6px_0px_rgba(10,37,64,0.35),0px_30px_60px_-30px_rgba(0,0,0,0.3),0px_50px_100px_-20px_rgba(50,50,93,0.25)] p-4 text-black pt-[30px] pb-[46px] w-[250px] max-[550px]:w-[100%]">
    <span class="absolute right-0 top-0 bg-[#FF0000]  z-[1] rounded-tr-[10px] py-[9px] px-[5px] font-extrabold text-white">${pokemons[i].num}</span>
    <h2 class="text-[#212529] font-black text-[20px] mb-[28px]">${pokemons[i].name}</h2>
    <img class="mb-[20px]" src="${pokemons[i].img}"/>
    <p class="py-[10px] px-[5px] rounded-[20px] bg-[#C4E4FF] font-semibold mb-[16px] text-[#212529] text-[20px]">${pokemons[i].type}</p>
    <div class="text-[#212529] font-bold">Candy count: ${pokemons[i].candy_count}</div>
    <div class="text-[#212529] font-bold">${pokemons[i].weight}</div>
    <div class="text-[#80007C] text-[14px] font-black">${pokemons[i].weaknesses}</div>
    <div class="absolute bottom-0 left-0 bg-[#00FFFF] py-[9px] px-[5px] text-[#000000] font-extrabold rounded-bl-[10px]">${pokemons[i].spawn_time}</div>
    </li>


    `
}
