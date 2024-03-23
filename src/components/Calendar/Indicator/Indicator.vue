<template>
    <span class="indicator"></span>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
    .indicator {
        position: absolute;
        top: 0;
        left: -4px;
        display: block;
        width: .25rem;
        height: .25rem;
        border-radius: 50%;
        background-color: $red;
    }
</style>