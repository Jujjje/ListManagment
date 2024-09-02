<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useItemStore } from "src/entities/item";
import { ref } from "vue";
interface ISort {
  txt: string;
  sort: "Id" | "ABC" | "XYZ";
}
const store = useItemStore();
const { alphabetSorting } = storeToRefs(store);
const { sortAlphabet, sortByDefault, sortReverseAlphabet } = store;
const activeSort = ref("умолчанию");

const isOpen = ref(false);
function onClickSort(newSort: "Id" | "ABC" | "XYZ", newTxt: string) {
  alphabetSorting.value = newSort;
  isOpen.value = false;
  activeSort.value = newTxt;
  if (newSort == "ABC") {
    sortAlphabet();
  } else if (newSort == "XYZ") {
    sortReverseAlphabet();
  } else {
    sortByDefault();
  }
}
const sorts: ISort[] = [
  {
    txt: "умолчанию",
    sort: "Id",
  },
  {
    txt: "алфавиту (ABC)",
    sort: "ABC",
  },
  {
    txt: "алфавиту (XYZ)",
    sort: "XYZ",
  },
];
</script>
<template>
  <div class="relative">
    <div class="flex" @click="isOpen = true">
      <div class="font-bold">Сортировка по:&nbsp;</div>
      <div class="decoration-dotted">{{ activeSort }}</div>
    </div>
    <div
      class="absolute bg-white shadow-lg flex flex-col right-0"
      v-if="isOpen"
    >
      <p class="p-2" v-for="i in sorts" @click="onClickSort(i.sort, i.txt)">
        {{ i.txt }}
      </p>
    </div>
  </div>
</template>
