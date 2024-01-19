// store/filters.ts
import { defineStore } from 'pinia'

export const useBtcticker = defineStore('btc', () => {

  const btcprice = ref(null); // initial state is null or some default value
  const onedollarsatprice = ref(null);

  // Define an async function as an action to fetch the BTC price
  const fetchBtcPrice = async () => {
    try {
      const response = await $fetch("https://app.yieldmonitor.io/api/v2/symbol/ym/33913");
      btcprice.value = (Number(response.symbols[0].price)).toFixed(2); // update the state with the fetched data
      onedollarsatprice.value = 1 / (Number(response.symbols[0].price)).toFixed(2) ; // update the state with the fetched data
    } catch (error) {
      console.error('Error fetching BTC price:', error);
      // Handle error appropriately
    }
  };

  // Immediately invoke the action to fetch price on store initialization
  fetchBtcPrice();

return { btcprice, onedollarsatprice, fetchBtcPrice }; // expose the state and action
})