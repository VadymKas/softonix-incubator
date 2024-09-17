<template>
  <nav class="flex flex-row items-center py-[24px] font-secondary">
    <a href="#home">
      <img
        class="h-[35px] w-[98px] mr-[72px]"
        src="../assets/images/logo.png"
        alt="logo"
      >
    </a>
    <ul class="flex flex-row gap-9 text-blue tracking-[0.2px] mb-1">
      <li
        class="
          first-letter:underline
          first-letter:underline-offset-[6px]
          first-letter:decoration-orange
          first-letter:decoration-2
          duration-500 ease-in-out hover:scale-[120%] "
      >
        <a href="#home">Home</a>
      </li>
      <li class="duration-500 ease-in-out hover:scale-[120%]">
        <a href="#about">About us</a>
      </li>
      <li class="duration-500 ease-in-out hover:scale-[120%]">
        <a href="#destinations">Destinations</a>
      </li>
      <li class="duration-500 ease-in-out hover:scale-[120%]">
        <a href="#tours">Tours</a>
      </li>
      <li class="duration-500 ease-in-out hover:scale-[120%]">
        <a href="#blog">Blog</a>
      </li>
    </ul>
    <button
      class="
        flex items-center
        border-[1px] border-orange rounded-full
        text-orange
        fill-orange
        py-[14px] px-[34px] ml-auto
        cursor-pointer
        duration-500 ease-in-out
        hover:text-white hover:bg-orange hover:fill-white"
    >
      Book Now
      <svg class="ml-[6px]" width="16" height="15" viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg">
        <path fill="inherit" d="M0 8.45744L4.04598 10.2128L13.4253 2.87235L6.06897 11.1702V15L8.82758 11.9681L13.4253 13.5638L16 0L0 8.45744Z" />
      </svg>
    </button>
  </nav>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>
