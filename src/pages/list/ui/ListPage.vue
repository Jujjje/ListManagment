<script setup lang="ts">
import { storeToRefs } from "pinia";
import { ItemNotFound, useItemStore } from "src/entities/item";
import { IntegrationSelector } from "src/widgets/integrationSelector";
import { ListWidget } from "src/widgets/list";
import { PaginationWidget } from "src/widgets/pagination";
import { SortingWidget } from "src/widgets/sorting";
const store = useItemStore();
const { paginatedItems } = storeToRefs(store);
</script>
<template>
  <div class="bg-white w-[93vw] rounded-3xl p-10" v-if="paginatedItems.length">
    <div class="flex justify-between max-sm:flex-col max-sm:gap-y-4">
      <IntegrationSelector />
      <SortingWidget />
    </div>
    <ListWidget />
    <div class="flex justify-between max-sm:flex-col max-sm:gap-y-4 mt-5">
      <RouterLink to="/">
        <button
          class="bg-[#202020] text-white py-3 px-4 rounded-[15px] max-sm:p-2"
        >
          Добавить новый товар
        </button>
      </RouterLink>
      <PaginationWidget />
    </div>
  </div>
  <ItemNotFound v-else />
</template>
