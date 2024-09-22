<template>
  <div class="absolute inset-0 flex justify-center items-center bg-translucent">
    <form
      class="min-w-[500px] lg:w-2/4 md:w-2/3 sm:w-full flex flex-col rounded-lg bg-gray-light shadow p-8 m-4"
      @submit.prevent="addContact"
    >
      <h2 class="text-3xl font-semibold text-center mb-3">Contact form</h2>
      <label class="relative flex flex-col" for="name">
        <span class="text-sm">Name</span>
        <input
          id="name"
          v-model="formData.name"
          :class="{'input': !errorsData.name, 'input text-red-600': !!errorsData.name}"
          type="text"
          placeholder="Enter your name"
        >
        <p v-if="errorsData.name" class="error">
          {{ errorsData.name }}
        </p>
      </label>
      <label class="relative flex flex-col" for="description">
        <span class="text-sm">Description</span>
        <input
          id="description"
          v-model="formData.description"
          :class="{'input': !errorsData.name, 'input text-red-600': !!errorsData.name}"
          type="text"
          placeholder="Enter your position"
        >
        <p v-if="errorsData.description" class="error">
          {{ errorsData.description }}
        </p>
      </label>
      <label class="flex flex-col" for="image">
        <span class="text-sm">Image URL</span>
        <input
          id="image"
          v-model="formData.image"
          class="input"
          type="text"
          placeholder="Add image url"
        >
      </label>
      <div class="flex self-end gap-3 my-3">
        <button class="button" type="submit" :disabled="!isValid">Ok</button>
        <button class="button" @click="$emit('trigger')">Cancel</button>
      </div>
    </form>
  </div>
</template>

<script lang="ts" setup>
import type { IContact } from '@/types'
import { ref, computed } from 'vue'
import { validateName, validateDescription } from '@/utils/validators'

const emit = defineEmits(['trigger', 'add'])

const id = ref(4)

const errorsData = ref<Pick<IContact, 'name' | 'description'>>({
  name: '',
  description: ''
})

const formData = ref<IContact>({
  id: id.value,
  name: '',
  description: '',
  image: ''
})

const formValidation = () => {
  errorsData.value.name = validateName(formData.value.name)
  errorsData.value.description = validateDescription(formData.value.description)
}

const isValid = computed(() => {
  formValidation()
  return (!errorsData.value.name && !errorsData.value.description)
})

const addContact = () => {
  formData.value.image = formData.value.image || './src/assets/images/no__image.jpg'
  emit('add', formData.value)
  emit('trigger')
  id.value++
  formData.value = { id: id.value, name: '', description: '', image: '' }
}

</script>
