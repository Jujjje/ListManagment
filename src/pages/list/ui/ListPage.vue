<script setup lang="ts">
import { IntegrationSelector } from "src/widgets/integrationSelector";
import { ListWidget } from "src/widgets/list";
import { SortingWidget } from "src/widgets/sorting";
</script>
<template>
  <div class="bg-white w-[93vw] rounded-3xl p-10">
    <div class="flex justify-between">
      <IntegrationSelector />
      <SortingWidget />
    </div>

    <ListWidget />
  </div>
</template>
