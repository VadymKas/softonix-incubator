<template>
  <section id="categories" class="mb-[58px]">
    <div class="flex justify-between">
      <div>
        <h2 class="text-[56px] font-semibold text-header-main tracking-[2px] pt-2 mb-3">Categories</h2>
        <p class="max-w-[370px] tracking-[0.1px] leading-[160%] mb-[60px]">Here are lots of interesting destinations to visit, but don’t be confused—they’re already grouped by category.</p>
      </div>
      <div class="flex gap-4 mt-6">
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
    <div class="flex gap-[30px]">
      <article>
        <div class="relative rounded-full overflow-hidden group mb-2.5 cursor-pointer">
          <img src="../assets/images/categories/beach.png" alt="Beach">
          <div class="invisible absolute flex items-center justify-center inset-0 bg-semi-transparent duration-150 ease-in-out group-hover:visible">
            <p class="text-xl font-semibold text-white leading-[110%] text-center">Visit</p>
          </div>
        </div>
        <h4 class="text-[26px] font-medium text-header-main text-center tracking-[0.5px]">Beach</h4>
      </article>
      <article>
        <div class="relative rounded-full overflow-hidden group mb-2.5 cursor-pointer">
          <img src="../assets/images/categories/desert.png" alt="Desert">
          <div class="invisible absolute flex items-center justify-center inset-0 bg-semi-transparent duration-150 ease-in-out group-hover:visible">
            <p class="text-xl font-semibold text-white leading-[110%] text-center">Visit</p>
          </div>
        </div>
        <h4 class="text-[26px] font-medium text-header-main text-center tracking-[0.5px]">Desert</h4>
      </article>
      <article>
        <div class="relative rounded-full overflow-hidden group mb-2.5 cursor-pointer">
          <img src="../assets/images/categories/mountain.png" alt="Mountain">
          <div class="invisible absolute flex items-center justify-center inset-0 bg-semi-transparent duration-150 ease-in-out group-hover:visible">
            <p class="text-xl font-semibold text-white leading-[110%] text-center">Visit</p>
          </div>
        </div>
        <h4 class="text-[26px] font-medium text-header-main text-center tracking-[0.5px]">Mountain</h4>
      </article>
      <article>
        <div class="relative rounded-full overflow-hidden group mb-2.5 cursor-pointer">
          <img src="../assets/images/categories/temple.png" alt="Temple">
          <div class="invisible absolute flex items-center justify-center inset-0 bg-semi-transparent duration-150 ease-in-out group-hover:visible">
            <p class="text-xl font-semibold text-white leading-[110%] text-center">Visit</p>
          </div>
        </div>
        <h4 class="text-[26px] font-medium text-header-main text-center tracking-[0.5px]">Temple</h4>
      </article>
      <article>
        <div class="relative rounded-full overflow-hidden group mb-2.5 cursor-pointer">
          <img src="../assets/images/categories/tower.png" alt="Tower">
          <div class="invisible absolute flex items-center justify-center inset-0 bg-semi-transparent duration-150 ease-in-out group-hover:visible">
            <p class="text-xl font-semibold text-white leading-[110%] text-center">Visit</p>
          </div>
        </div>
        <h4 class="text-[26px] font-medium text-header-main text-center tracking-[0.5px]">Tower</h4>
      </article>
      <article>
        <div class="relative rounded-full overflow-hidden group mb-2.5 cursor-pointer">
          <img src="../assets/images/categories/pyramid.png" alt="Pyramid">
          <div class="invisible absolute flex items-center justify-center inset-0 bg-semi-transparent duration-150 ease-in-out group-hover:visible">
            <p class="text-xl font-semibold text-white leading-[110%] text-center">Visit</p>
          </div>
        </div>
        <h4 class="text-[26px] font-medium text-header-main text-center tracking-[0.5px]">Pyramid</h4>
      </article>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Categories'
}
</script>
