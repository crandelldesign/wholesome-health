<script setup>
import { RouterView } from 'vue-router';
</script>

<template>
  <div class="site-container">
    <RouterView />
  </div>
</template>

<style lang="scss">
/* stylelint-disable scss/at-import-no-partial-leading-underscore */
@import '@/assets/scss/_reboot';
@import '@/assets/scss/_global';
@import '@/assets/scss/_buttons';
@import '@/assets/scss/_dropdowns';
@import '@/assets/scss/_transitions';
@import '@/assets/scss/_color-swatches';
</style>
