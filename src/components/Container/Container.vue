<template>
  <div class="container">
    <slot />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.container {
  width: 100%;
  max-width: 1140px;
  min-height: 100vh;
  margin: 0 auto;
  border-right: 1px solid $gray;
  border-left: 1px solid $gray;
  padding: $p-64;

  @media (max-width: 768px) {
    padding: $p-20 $p-64;
  }
}
</style>
