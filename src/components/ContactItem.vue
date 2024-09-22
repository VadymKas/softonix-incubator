<template>
  <div class="rounded-lg bg-white shadow relative">
    <div class="p-6 pb-2">
      <div class="flex">
        <div class="flex-grow text-sm truncate">
          <template v-if="editMode">
            <input
              ref="inputRef"
              v-model="localContact.name"
              type="text"
              class="block font-medium w-full border-b border-transparent focus:border-b focus:border-b-blue-500"
            >
            <input
              v-model="localContact.description"
              type="text"
              class="block mt-1 text-gray w-full border-b border-transparent focus:border-b focus:border-b-blue-500"
            >
          </template>

          <template v-else>
            <p class="font-medium border-b border-transparent truncate">{{ contact.name }}</p>
            <p class="text-gray border-b border-transparent truncate mt-1">
              {{ contact.description }}
            </p>
          </template>
        </div>
        <img
          class="w-[40px] h-[40px] object-cover ml-2 rounded-full shrink-0"
          :src="contact.image" alt="contact-logo"
        >
      </div>
      <div class="flex justify-end mt-2 gap-2">
        <template v-if="editMode">
          <button
            class="card__button text-blue-500"
            @click="editMode = false"
          >
            Cancel
          </button>

          <button
            class="card__button text-blue-500"
            :disabled="!isValid"
            @click="onSave"
          >
            Save
          </button>
        </template>

        <template v-else>
          <button
            class="card__button text-blue-500"
            @click="triggerEditMode"
          >
            Edit
          </button>

          <button
            class="card__button text-red-500"
            @click="$emit('delete')"
          >
            Delete
          </button>
        </template>
      </div>
    </div>

    <div class="flex text-sm font-medium text-gray-dark border-t border-gray-ultra-light">
      <div class="flex items-center justify-center flex-1 py-4 cursor-pointer hover:text-gray">
        <IconEnvelope />
        <span class="ml-3">Email</span>
      </div>
      <div
        class="flex items-center justify-center flex-1 py-4 border-l
            border-gray-ultra-light cursor-pointer hover:text-gray"
      >
        <IconPhone />
        <span class="ml-3">Call</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, nextTick, computed } from 'vue'
import type { IContact } from '@/types'
import IconEnvelope from '@/components/icons/IconEnvelope.vue'
import IconPhone from '@/components/icons/IconPhone.vue'
import { validateName, validateDescription } from '@/utils/validators'

const props = defineProps<{
  contact: IContact
}>()

const emit = defineEmits(['delete', 'save'])

const inputRef = ref<HTMLInputElement>()

const localContact = ref<Omit<IContact, 'id'>>({
  name: '',
  description: '',
  image: ''
})

const editMode = ref(false)

async function triggerEditMode () {
  editMode.value = true
  localContact.value = { ...props.contact }
  await nextTick()
  inputRef.value?.focus()
}

function onSave () {
  emit('save', localContact.value)
  editMode.value = false
}

const isValid = computed(() => {
  const nameCheck = validateName(localContact.value.name)
  const descriptionCheck = validateDescription(localContact.value.description)
  console.log(!nameCheck && !descriptionCheck)
  return (!nameCheck && !descriptionCheck)
})
</script>
