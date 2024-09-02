<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useItemStore } from "src/entities/item";

const store = useItemStore();
const { integrationFilter } = storeToRefs(store);
function onClickIntegration(newIntegration: "All" | "Reels" | "Stories") {
  integrationFilter.value = newIntegration;
}

const activeIntegrationClass =
  "h-[40px] flex justify-between items-center px-6 rounded-[30px] bg-[#202020] text-white";
const integrationClass =
  "h-[40px] flex justify-between items-center px-6 rounded-[30px] border-[2px]";
</script>
<template>
  <div class="flex justify-between gap-x-6">
    <div
      :class="
        integrationFilter == 'All' ? activeIntegrationClass : integrationClass
      "
      @click="onClickIntegration('All')"
    >
      Все
    </div>
    <div
      :class="
        integrationFilter == 'Reels' ? activeIntegrationClass : integrationClass
      "
      @click="onClickIntegration('Reels')"
    >
      Reals
    </div>
    <div
      :class="
        integrationFilter == 'Stories'
          ? activeIntegrationClass
          : integrationClass
      "
      @click="onClickIntegration('Stories')"
    >
      Stories
    </div>
  </div>
</template>
