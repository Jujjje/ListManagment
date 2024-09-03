<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useItemStore } from "src/entities/item";

const store = useItemStore();
const { pagination, filteredItems } = storeToRefs(store);
</script>
<template>
  <div class="flex gap-x-4 max-sm:flex-col max-sm:">
    <button
      class="font-bold text-xl"
      @click="if (pagination !== 1) pagination--;"
    >
      <= Предыдущая страница
    </button>
    <button
      class="font-bold text-xl"
      @click="if (filteredItems.length / (pagination * 20) >= 1) pagination++;"
    >
      Следущая страница =>
    </button>
  </div>
</template>
