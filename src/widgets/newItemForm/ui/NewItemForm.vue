<script setup lang="ts">
import { useItemStore } from "src/entities/item";
import { ref } from "vue";

const name = ref("");
const seller = ref("");
const integration = ref("");

const store = useItemStore();
const { setNewItem } = store;

function onClickAddButton() {
  const newItem = {
    name: name.value,
    seller: seller.value,
    integration: integration.value,
  };

  setNewItem(newItem);
}
</script>
<template>
  <div class="bg-white rounded-3xl w-[600px] p-5 text-xl">
    <p class="text-2xl text-center mb-3">Введите параметры нового предмета</p>
    <div class="flex flex-col gap-y-4">
      <div class="">
        <p>Название:</p>
        <input
          v-model="name"
          type="text"
          class="border-[1px] p-1 rounded-[8px] mt-1"
          placeholder="Название товара"
        />
      </div>
      <div class="">
        <p>Селлер:</p>
        <input
          type="text"
          v-model="seller"
          class="border-[1px] p-1 rounded-[8px] mt-1"
          placeholder="Селлер"
        />
      </div>
      <div class="">
        <p>Способ интеграции:</p>
        <input
          v-model="integration"
          type="text"
          class="border-[1px] p-1 rounded-[8px] mt-1"
          placeholder="Способ интеграции"
        />
      </div>
    </div>
    <div class="flex justify-between mt-6">
      <button
        class="bg-[#202020] text-white py-3 px-4 rounded-[15px]"
        @click="onClickAddButton()"
      >
        Добавить
      </button>
      <RouterLink to="/list">
        <button class="bg-[#202020] text-white py-3 px-4 rounded-[15px]">
          Список товаров
        </button></RouterLink
      >
    </div>
  </div>
</template>
