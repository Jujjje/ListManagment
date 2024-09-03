import { defineStore } from "pinia";
import { computed, ref, watch } from "vue";
export interface IItem {
  name: string;
  seller: string;
  integration: "All" | "Reels" | "Stories";
  id: number;
}
export const useItemStore = defineStore("item", () => {
  const item = ref<IItem[]>([]);
  const integrationFilter = ref<"All" | "Reels" | "Stories">("All");
  const alphabetSorting = ref<"Id" | "ABC" | "XYZ">("Id");
  const pagination = ref<number>(1);

  const localStorageItems = localStorage.getItem("items");
  if (localStorageItems) item.value = JSON.parse(localStorageItems)._value;

  const filteredItems = computed(() =>
    integrationFilter.value == "All"
      ? item.value
      : item.value.filter((i) => i.integration === integrationFilter.value)
  );

  const paginatedItems = computed(() => {
    return filteredItems.value.slice(
      (pagination.value - 1) * 20,
      (pagination.value - 1) * 20 + 20
    );
  });
  function setNewItem(newItem: IItem) {
    item.value.push(newItem);
  }

  function editItem(n: number, newItem: IItem) {
    item.value[n] = newItem;
  }

  function deleteItem(id: number) {
    let res = item.value.filter((i) => i.id != id);
    item.value = res;
  }

  function sortAlphabet() {
    item.value.sort((a, b) => a.name.localeCompare(b.name));
  }

  function sortReverseAlphabet() {
    item.value.sort((a, b) => b.name.localeCompare(a.name));
  }

  function sortByDefault() {
    item.value.sort((a, b) => a.id - b.id);
  }

  watch(
    () => item,
    (state) => {
      localStorage.setItem("items", JSON.stringify(state));
    },
    { deep: true }
  );
  return {
    item,
    integrationFilter,
    alphabetSorting,
    filteredItems,
    pagination,
    paginatedItems,
    setNewItem,
    editItem,
    deleteItem,
    sortAlphabet,
    sortReverseAlphabet,
    sortByDefault,
  };
});
