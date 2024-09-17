<template>
  <section id="tours" class="mb-[37px]">
    <h2 class="relative -right-[2px] text-[56px] font-semibold text-header-main tracking-[2px] leading-[118%] text-center pt-[35px] mb-3">Top Destinations</h2>
    <p class="text-text-main tracking-[0.05px] leading-[162%] text-center mb-[23px]">Sost Brilliant reasons Entrada should be your one-stop-shop!</p>
    <div class="flex justify-center gap-[14px] mb-[51px]">
      <button class="relative -top-[1px] text-sm text-header-main border border-header-main rounded-full tracking-[0.2px] py-1.5 px-5 hover:bg-header-main hover:text-white duration-500 ease-in-out">London</button>
      <button class="relative -top-[1px] text-sm text-header-main border border-header-main rounded-full tracking-[0.2px] py-1.5 px-5 hover:bg-header-main hover:text-white duration-500 ease-in-out">Bangkok</button>
      <button class="relative -top-[1px] text-sm text-header-main border border-header-main rounded-full tracking-[0.2px] py-1.5 px-5 hover:bg-header-main hover:text-white duration-500 ease-in-out">England</button>
      <button class="relative -top-[1px] text-sm text-header-main border border-header-main rounded-full tracking-[0.2px] py-1.5 px-5 hover:bg-header-main hover:text-white duration-500 ease-in-out">Singapore</button>
      <button class="relative -top-[1px] text-sm text-header-main border border-header-main rounded-full tracking-[0.2px] py-1.5 px-5 hover:bg-header-main hover:text-white duration-500 ease-in-out">Italy</button>
    </div>
    <div class="grid grid-cols-12 gap-x-[30px] gap-y-[26px] pb-[37px]">
      <article class="relative h-[250px] col-span-3 row-span-1 rounded-[20px] overflow-hidden cursor-pointer">
        <div class="absolute inset-0 bg-gradient-to-t from-semi-black" />
        <img class="w-full h-full object-cover" src="../assets/images/destinations/top/usa.jpg" alt="usa">
        <span class="absolute top-6 left-6 text-header-main text-sm font-medium bg-white rounded-full px-[10px] py-[1px]">3.5</span>
        <div class="absolute bottom-6 left-6">
          <h4 class="text-xl font-semibold text-white leading-none mb-2.5">Vientam</h4>
          <p class="text-sm text-white leading-none">Worefall</p>
        </div>
      </article>
      <article class="relative h-[526px] col-span-4 row-span-2 rounded-[20px] overflow-hidden cursor-pointer">
        <div class="absolute inset-0 bg-gradient-to-t from-semi-black" />
        <img class="w-full h-full object-cover" src="../assets/images/destinations/top/italy.jpg" alt="italy">
        <span class="absolute top-6 left-6 text-white text-sm font-medium bg-header-main rounded-full px-[10px] py-[1px]">3.5</span>
        <div class="absolute bottom-6 left-6">
          <h4 class="text-xl font-semibold text-white leading-none mb-2.5">Vientam</h4>
          <p class="text-sm text-white leading-none">Worefall</p>
        </div>
      </article>
      <article class="relative h-[250px] col-span-5 row-span-1 rounded-[20px] overflow-hidden cursor-pointer">
        <div class="absolute inset-0 bg-gradient-to-t from-semi-black" />
        <img class="w-full h-full object-cover" src="../assets/images/destinations/top/montenegro.jpg" alt="montenegro">
        <span class="absolute top-6 left-6 text-white text-sm font-medium bg-header-main rounded-full px-[10px] py-[1px]">3.5</span>
        <div class="absolute bottom-6 left-6">
          <h4 class="text-xl font-semibold text-white leading-none mb-2.5">Vientam</h4>
          <p class="text-sm text-white leading-none">Worefall</p>
        </div>
      </article>
      <article class="relative h-[250px] col-span-3 row-span-1 rounded-[20px] overflow-hidden cursor-pointer">
        <div class="absolute inset-0 bg-gradient-to-t from-semi-black" />
        <img class="w-full h-full object-cover" src="../assets/images/destinations/top/сzech.jpg" alt="сzech">
        <span class="absolute top-4 left-6 text-header-main text-sm font-medium bg-white rounded-full px-[10px] py-[1px]">3.5</span>
        <div class="absolute bottom-6 left-6">
          <h4 class="text-xl font-semibold text-white leading-none mb-2.5">Vientam</h4>
          <p class="text-sm text-white leading-none">Worefall</p>
        </div>
      </article>
      <article class="relative h-[263px] col-span-2 row-span-1 rounded-[20px] overflow-hidden -mt-3.5 cursor-pointer">
        <div class="absolute inset-0 bg-gradient-to-t from-semi-black" />
        <img class="w-full h-full object-cover" src="../assets/images/destinations/top/spain.jpg" alt="spain">
        <span class="absolute top-6 left-6 text-white text-sm font-medium bg-header-main rounded-full px-[10px] py-[1px]">3.5</span>
        <div class="absolute bottom-6 left-6">
          <h4 class="text-xl font-semibold text-white leading-none mb-2.5">Vientam</h4>
          <p class="text-sm text-white leading-none">Worefall</p>
        </div>
      </article>
      <article class="relative h-[263px] col-span-3 row-span-1 rounded-[20px] overflow-hidden -mt-3.5 cursor-pointer">
        <div class="absolute inset-0 bg-gradient-to-t from-semi-black" />
        <img class="w-full h-full object-cover" src="../assets/images/destinations/top/england.jpg" alt="england">
        <span class="absolute top-6 left-6 text-white text-sm font-medium bg-header-main rounded-full px-[10px] py-[1px]">3.5</span>
        <div class="absolute bottom-6 left-6">
          <h4 class="text-xl font-semibold text-white leading-none mb-2.5">Vientam</h4>
          <p class="text-sm text-white leading-none">Worefall</p>
        </div>
      </article>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Tours'
}
</script>
