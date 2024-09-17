<template>
  <section id="destinations" class="mb-[53px]">
    <div class="flex justify-between pt-[50px] mb-[23px]">
      <h2 class="max-w-[400px] text-[56px] font-semibold text-header-main tracking-[2px] leading-[118%] mb-3">Find Popular Destination</h2>
      <div class="flex gap-4 mt-10">
        <svg class="fill-transparent stroke-header-main cursor-pointer duration-500 ease-in-out hover:fill-header-main hover:stroke-yellow" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg">
          <circle cx="27" cy="27" r="26.5" />
          <path d="M30 33L24 27L30 21" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        <svg class="fill-transparent stroke-header-main cursor-pointer hover:fill-header-main hover:stroke-yellow duration-500 ease-in-out" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg">
          <circle cx="27" cy="27" r="26.5" />
          <path d="M24 33L30 27L24 21" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </div>
    </div>
    <div class="inline-flex gap-[30px] mb-[50px]">
      <article class="w-[386px] border-2 border-white rounded-2xl p-2.5 hover:shadow-xl duration-500 ease-in-out">
        <img class="rounded-2xl mb-5" src="../assets/images/destinations/popular/florida.jpg" alt="florida">
        <h5 class="text-2xl font-semibold text-header-main tracking-[0.5px] px-3 mb-2">Mountain Hiking Tour</h5>
        <p class="text-sm text-text-main px-3 mb-6">Mountain Hiking Tour</p>
        <div class="flex justify-between items-center tracking-[0.8px] px-3 mb-6">
          <p class="text-2xl font-semibold text-header-main leading-[83%]">$89<span class="text-base font-normal text-text-main tracking-normal"> /Person</span></p>
          <button class="relative -top-[1px] text-sm text-header-main border border-header-main rounded-full tracking-[0.2px] py-2 px-3.5 hover:bg-header-main hover:text-white duration-500 ease-in-out">Book Now</button>
        </div>
      </article>
      <article class="w-[386px] border-2 border-white rounded-2xl p-2.5 hover:shadow-xl duration-500 ease-in-out">
        <img class="rounded-2xl mb-5" src="../assets/images/destinations/popular/peru.jpg" alt="peru">
        <h5 class="text-2xl font-semibold text-header-main tracking-[0.5px] px-3 mb-2">Machu Picchu, Peru</h5>
        <p class="text-sm text-text-main px-3 mb-6">Machu Picchu, Peru</p>
        <div class="flex justify-between items-center tracking-[0.8px] px-3 mb-6">
          <p class="text-2xl font-semibold text-header-main leading-[83%]">$99<span class="text-base font-normal text-text-main tracking-normal"> /Person</span></p>
          <button class="relative -top-[1px] text-sm text-header-main border border-header-main rounded-full tracking-[0.2px] py-2 px-3.5 hover:bg-header-main hover:text-white duration-500 ease-in-out">Book Now</button>
        </div>
      </article>
      <article class="w-[386px] border-2 border-white rounded-2xl p-2.5 hover:shadow-xl duration-500 ease-in-out">
        <img class="rounded-2xl mb-5" src="../assets/images/destinations/popular/arizona.jpg" alt="arizona">
        <h5 class="text-2xl font-semibold text-header-main tracking-[0.5px] px-3 mb-2">The Grand Canyon, Arizona</h5>
        <p class="text-sm text-text-main px-3 mb-6">Mountain Hiking Tour</p>
        <div class="flex justify-between items-center tracking-[0.8px] px-3 mb-6">
          <p class="text-2xl font-semibold text-header-main leading-[83%]">$70<span class="text-base font-normal text-text-main tracking-normal"> /Person</span></p>
          <button class="relative -top-[1px] text-sm text-header-main border border-header-main rounded-full tracking-[0.2px] py-2 px-3.5 hover:bg-header-main hover:text-white duration-500 ease-in-out">Book Now</button>
        </div>
      </article>
      <article class="w-[386px] border-2 border-white rounded-2xl p-2.5 hover:shadow-xl duration-500 ease-in-out">
        <img class="rounded-2xl mb-5" src="../assets/images/destinations/popular/rome.jpg" alt="rome">
        <h5 class="text-2xl font-semibold text-header-main tracking-[0.5px] px-3 mb-2">Rome, Italy</h5>
        <p class="text-sm text-text-main px-3 mb-6">Mountain Hiking Tour</p>
        <div class="flex justify-between items-center tracking-[0.8px] px-3 mb-6">
          <p class="text-2xl font-semibold text-header-main leading-[83%]">$99<span class="text-base font-normal text-text-main tracking-normal"> /Person</span></p>
          <button class="relative -top-[1px] text-sm text-header-main border border-header-main rounded-full tracking-[0.2px] py-2 px-3.5 hover:bg-header-main hover:text-white duration-500 ease-in-out">Book Now</button>
        </div>
      </article>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Destinations'
}
</script>
