import { defineStore } from "pinia";
import { ref, watch } from "vue";
export interface IItem {
  name: string;
  seller: string;
  integration: string;
  id: number;
}

export const useItemStore = defineStore("item", () => {
  const item = ref<IItem[]>([]);

  const localStorageItems = localStorage.getItem("items");
  if (localStorageItems) item.value = JSON.parse(localStorageItems)._value;

  function setNewItem(newItem: IItem) {
    item.value.push(newItem);
  }

  function editItem(n: number, newItem: IItem) {
    item.value[n] = newItem;
  }

  function deleteItem(id: number) {
    console.log(id);
    let res = item.value.filter((i) => i.id != id);
    item.value = res;
  }
  watch(
    () => item,
    (state) => {
      localStorage.setItem("items", JSON.stringify(state));
    },
    { deep: true }
  );
  return { item, setNewItem, editItem, deleteItem };
});
