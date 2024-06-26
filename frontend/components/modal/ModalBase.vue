<template>
  <!-- Normal display on the page. -->
  <div
    @click="openModal"
    @keydown.enter="openModal"
    tabindex="0"
    role="button"
    class="h-fit"
  >
    <slot name="normalDisplay" />
  </div>
  <!-- Modal pop up from page element. -->
  <Dialog @close="closeModal" class="relative z-40" :open="isOpen">
    <div
      @click="closeModal"
      class="fixed inset-0 cursor-pointer bg-light-layer-0/90 dark:bg-dark-layer-0/90"
      aria-hidden="true"
    />
    <div
      class="cursor-pointer"
      :class="{
        'fixed top-0 z-10 flex h-screen w-full flex-col items-center overflow-hidden':
          imageModal,
        'fixed inset-0 flex w-screen items-center justify-center': !imageModal,
      }"
    >
      <DialogPanel
        :class="{
          'flex flex-col items-center': imageModal,
          'card-style-base container h-full w-full max-w-4xl cursor-default overflow-y-auto bg-light-layer-0 p-5 pl-6 text-light-text dark:bg-dark-layer-0 dark:text-dark-text md:h-auto':
            !imageModal,
        }"
      >
        <button
          v-if="imageModal"
          @click="closeModal"
          class="focus-brand absolute right-0 mr-24 mt-8 rounded-full p-1 text-light-distinct-text hover:text-light-text dark:text-dark-distinct-text hover:dark:text-dark-text"
          :aria-label="$t('components.modal-image.close-modal-aria-label')"
        >
          <Icon class="h-10 w-10" name="bi:x-circle-fill" />
        </button>
        <div v-else class="relative">
          <button
            @click="closeModal"
            class="focus-brand absolute right-0 rounded-full p-1 text-light-distinct-text hover:text-light-text dark:text-dark-distinct-text hover:dark:text-dark-text"
          >
            <Icon class="h-10 w-10" name="bi:x-circle-fill" />
          </button>
        </div>
        <div
          v-if="imageModal"
          @click="closeModal"
          @keypress.esc="closeModal"
          tabindex="0"
          role="button"
          class="focus-brand flex flex-col items-center justify-center"
          :aria-label="$t('components.modal-image.close-modal-aria-label')"
        >
          <slot name="modalDisplay" />
        </div>
        <div v-else>
          <slot name="modalDisplay" />
        </div>
      </DialogPanel>
    </div>
  </Dialog>
</template>

<script setup lang="ts">
import { Dialog, DialogPanel } from "@headlessui/vue";

defineProps<{
  imageModal?: boolean;
}>();

const isOpen = ref(false);

function openModal() {
  isOpen.value = true;
}

function closeModal() {
  isOpen.value = false;
}
</script>
