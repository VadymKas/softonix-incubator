<template>
  <header>
    <Navbar />
  </header>
  <main>
    <Hero />
    <Categories />
    <About />
    <Destinations />
    <Tours />
    <Blog />
    <Signup />
  </main>
  <footer>
    <FooterSection />
  </footer>
</template>

<script setup>
import Navbar from './Navbar.vue'
import Hero from './Hero.vue'
import Categories from './Categories.vue'
import About from './About.vue'
import Destinations from './Destinations.vue'
import Tours from './Tours.vue'
import Blog from './Blog.vue'
import Signup from './Signup.vue'
import FooterSection from './Footer.vue'
</script>
