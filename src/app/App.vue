<script setup lang="ts">
import { HeaderWidget } from "src/widgets/header";
</script>
<template>
  <div
    class="flex flex-col gap-y-4 w-max-full justify-center items-center my-10 mx-10"
  >
    <HeaderWidget />
    <RouterView />
  </div>
</template>
