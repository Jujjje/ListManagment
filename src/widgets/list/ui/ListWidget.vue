<script setup lang="ts">
import { storeToRefs } from "pinia";
import { ItemList, useItemStore } from "src/entities/item";

const store = useItemStore();
const { paginatedItems } = storeToRefs(store);
</script>
<template>
  <div class="w-full bg-white rounded-[15px]">
    <div class="flex flex-wrap justify-between gap-x-4 gap-y-10 mt-10">
      <ItemList v-for="item in paginatedItems" :item="item" :key="item.id" />
    </div>
  </div>
</template>
