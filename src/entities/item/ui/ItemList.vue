<script setup lang="ts">
import { ref } from "vue";
import { IItem, useItemStore } from "../model/store";

interface IProps {
  item: IItem;
  n: number;
}

const props = defineProps<IProps>();

const name = ref(props.item.name);
const seller = ref(props.item.seller);
const integration = ref(props.item.integration);
const isEdit = ref(false);

const store = useItemStore();
const { editItem, deleteItem } = store;

function onClickPencil() {
  isEdit.value = !isEdit.value;
  if (isEdit.value === false)
    editItem(props.n, {
      name: name.value,
      seller: seller.value,
      integration: integration.value,
      id: props.n,
    });
}
</script>
<template>
  <div class="w-[150px] flex flex-col items-center">
    <p>{{ props.item.id }}</p>
    <img
      width="96"
      height="96"
      src="https://img.icons8.com/material-outlined/96/book.png"
      alt="book"
    />
    <div class="w-full flex flex-col gap-y-1">
      <div class="flex">
        <p>Имя:&nbsp;</p>
        <input
          type="text"
          v-model="name"
          v-if="isEdit"
          class="outline outline-1 rounded-sm w-full"
        />
        <p v-else class="truncate">{{ name }}</p>
      </div>
      <div class="flex">
        <p>Селлер:&nbsp;</p>
        <input
          type="text"
          v-model="seller"
          v-if="isEdit"
          class="outline outline-1 rounded-sm w-full"
        />
        <p v-else class="truncate">{{ seller }}</p>
      </div>
      <div class="flex">
        <p>Интеграция:&nbsp;</p>
        <input
          type="text"
          v-model="integration"
          v-if="isEdit"
          class="outline outline-1 rounded-sm w-full"
        />
        <p v-else class="truncate">{{ integration }}</p>
      </div>
    </div>
    <div class="flex w-full justify-between py-4">
      <img
        @click="onClickPencil()"
        width="24"
        height="24"
        src="https://img.icons8.com/ios-filled/24/pencil--v1.png"
        alt="pencil--v1"
      />
      <img
        @click="deleteItem(item.id)"
        width="24"
        height="24"
        src="https://img.icons8.com/material-sharp/24/trash.png"
        alt="trash"
      />
    </div>
  </div>
</template>
