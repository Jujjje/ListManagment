import { defineStore } from "pinia";
import { ref, watch } from "vue";
interface IItem {
  name: string;
  seller: string;
  integration: string;
}

export const useItemStore = defineStore("item", () => {
  const item = ref<IItem[]>([]);

  const localStorageItems = localStorage.getItem("items");
  if (localStorageItems) item.value = JSON.parse(localStorageItems)._value;

  function setNewItem(newItem: IItem) {
    item.value.push(newItem);
    console.log(item.value);
  }

  watch(
    () => item,
    (state) => {
      localStorage.setItem("items", JSON.stringify(state));
    },
    { deep: true }
  );
  return { item, setNewItem };
});
