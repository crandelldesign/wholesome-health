<script setup>
import LogoVertical from "../components/LogoVertical.vue";
</script>

<template>
  <div class="style-guide">
    <header class="header">
      <div class="logo-container">
        <LogoVertical />
      </div>
    </header>
    <h1>Style Guide</h1>
  </div>
</template>

<style lang="scss" scoped>
.header {
  padding: 1rem;
  .logo-container {
    max-width: 300px;
    height: auto;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
