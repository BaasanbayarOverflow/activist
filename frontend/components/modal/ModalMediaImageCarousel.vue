<template>
  <div class="relative">
    <MediaImageCarousel :fullscreen="false" />
    <ModalBase>
      <template #normalDisplay>
        <button
          class="focus-brand absolute right-2 top-2 z-10 hidden rounded-lg border border-white/80 bg-black/80 p-1 text-white/80 hover:bg-black md:block"
        >
          <Icon name="bi:fullscreen" size="1.5em" />
        </button>
      </template>
      <template #modalDisplay>
        <MediaImageCarousel :fullscreen="true" />
      </template>
    </ModalBase>
  </div>
</template>
