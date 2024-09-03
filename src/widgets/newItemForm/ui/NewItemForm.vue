<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useItemStore } from "src/entities/item";
import { ref } from "vue";

const name = ref("");
const seller = ref("");
const integration = ref<"All" | "Reels" | "Stories">("Reels");

const store = useItemStore();
const { setNewItem } = store;

function onFormNotFilled() {
  alert("Заполните все поля");
}
function onClickAddButton() {
  const newItem = {
    name: name.value,
    seller: seller.value,
    integration: integration.value,
    id: Date.now(),
  };
  name.value && seller.value ? setNewItem(newItem) : onFormNotFilled();
}
</script>
<template>
  <div class="bg-white rounded-3xl p-5 text-xl max-sm:p-0">
    <p class="text-2xl text-center mb-3">Введите параметры нового предмета</p>
    <div class="flex flex-col gap-y-4">
      <div class="">
        <p>Название:</p>
        <input
          v-model="name"
          type="text"
          class="border-[1px] p-1 rounded-[8px] mt-1 w-[240px]"
          placeholder="Название товара"
        />
      </div>
      <div class="">
        <p>Селлер:</p>
        <input
          type="text"
          v-model="seller"
          class="border-[1px] p-1 rounded-[8px] mt-1 w-[240px]"
          placeholder="Селлер"
        />
      </div>
      <div class="">
        <p>Способ интеграции:</p>
        <select
          v-model="integration"
          class="border-[1px] p-1 rounded-[8px] mt-1 w-[240px]"
        >
          <option>Reels</option>
          <option>Stories</option>
        </select>
      </div>
    </div>
    <div class="flex justify-between mt-6">
      <button
        class="bg-[#202020] text-white p-2 rounded-[15px] max-sm:p-2"
        @click="onClickAddButton()"
      >
        Добавить
      </button>
      <RouterLink to="/list">
        <button
          class="bg-[#202020] text-white py-3 px-4 rounded-[15px] max-sm:p-2"
        >
          Список товаров
        </button></RouterLink
      >
    </div>
  </div>
</template>
