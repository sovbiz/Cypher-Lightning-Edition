// store/filters.ts
import { defineStore } from 'pinia'

export const useFiltersStore = defineStore('filterStore', () => {
  const filtersList = ref('Bitcoin')

  function addValueToFilterList(value: string) {
    filtersList.value = value
  }
  return { addValueToFilterList, filtersList }
})