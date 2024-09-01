<script setup lang="ts">
import { storeToRefs } from "pinia";
import { ItemList, useItemStore } from "src/entities/item";

const store = useItemStore();
const { item } = storeToRefs(store);
</script>
<template>
  <div class="w-full bg-white h-[600px]">
    <div class="flex justify-between flex-wrap">
      <ItemList v-for="(i, n) in item" :item="i" :n="n" />
    </div>
  </div>
</template>
