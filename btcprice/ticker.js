export function ticker() {

    const btcprice = ref(null); // initial state is null or some default value
    const onedollarsatprice = ref(null);
    const onedollarbtcprice = ref(null);

  
    // Define an async function as an action to fetch the BTC price
    const fetchBtcPrice = async () => {
      try {
        const response = await $fetch("https://api.coinbase.com/v2/exchange-rates?currency=BTC");
        btcprice.value = (Number(response.data.rates.USD)).toFixed(2); // update the state with the fetched data
        onedollarsatprice.value = ((1 / (Number(response.symbols[0].price))).toFixed(8) * 100000000).toFixed(0); // update the state with the fetched data
        onedollarbtcprice.value = (1 / (Number(response.symbols[0].price))).toFixed(8) ; // update the state with the fetched data

      } catch (error) {
        console.error('Error fetching BTC price:', error);
        // Handle error appropriately
      }
    };
  
    // Immediately invoke the action to fetch price on store initialization
    fetchBtcPrice();
  
  return { btcprice, onedollarsatprice, onedollarbtcprice, fetchBtcPrice }; // expose the state and action

  }