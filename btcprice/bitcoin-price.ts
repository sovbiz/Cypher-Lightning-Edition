// const fetch = require('node-fetch');
// const profitMarginPct = Bun.env.PROFIT_MARGIN_PCT as number;

// async function getBitcoinPriceFromCoinbase() {
//   try {
//     const response = await fetch('https://api.coinbase.com/v2/prices/BTC-USD/spot');
//     const data = await response.json();
//     return data.data.amount;
//   } catch (error) {
//     console.error(`Error fetching Bitcoin price from Coinbase: ${error.message}`);
//     return 0;
//   }
// }

// async function getBitcoinPriceFromKraken() {
//   try {
//     const response = await fetch('https://api.kraken.com/0/public/Ticker?pair=XBTUSD');
//     const data = await response.json();
//     const price = data.result.XXBTZUSD.a[0];
//     return price;
//   } catch (error) {
//     console.error(`Error fetching Bitcoin price from Kraken: ${error.message}`);
//     return 0;
//   }
// }

// async function getBitcoinPriceFromCoindesk() {
//   try {
//     const response = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
//     const data = await response.json();
//     const price = data.bpi.USD.rate_float;
//     return price;
//   } catch (error) {
//     console.error(`Error fetching Bitcoin price from CoinDesk: ${error.message}`);
//     return 0;
//   }
// }

// async function getBitcoinPriceFromGemini() {
//   try {
//     const response = await fetch('https://api.gemini.com/v2/ticker/BTCUSD');
//     const data = await response.json();
//     const price = data.bid;
//     return price;
//   } catch (error) {
//     console.error(`Error fetching Bitcoin price from Gemini: ${error.message}`);
//     return 0;
//   }
// }

// async function getBitcoinPriceFromCoinGecko() {
//   try {
//     const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd&precision=2');
//     const data = await response.json();
//     const price = data.bitcoin.usd;
//     return price;
//   } catch (error) {
//     console.error(`Error fetching Bitcoin price from CoinGecko: ${error.message}`);
//     return 0;
//   }
// }

// export async function getBitcoinPrice() {
//   try {
//     const cbprice = await getBitcoinPriceFromCoinbase();
//     const kprice = await getBitcoinPriceFromKraken();
//     const cdprice = await getBitcoinPriceFromCoindesk();
//     const gprice = await getBitcoinPriceFromGemini();
//     const cgprice = await getBitcoinPriceFromCoinGecko();
    
//     const prices = [cbprice, kprice, cdprice, gprice, cgprice].map(Number);
//     prices.sort();
//     return prices[2];
//   } catch (error) {
//     console.error(`Error fetching Bitcoin prices: ${error.message}`);
//     return 0;
//   }
// }

// export async function getPrice_msats(price_usd_millicents:Number,bitcoin_price:Number){
//     var currentPrice;
//     if(bitcoin_price){
//         currentPrice = bitcoin_price;
//     }
//     else{
//         bitcoin_price = await getBitcoinPrice();
//     }

//     return usd_to_millisats(price_usd_millicents,currentPrice);
// }

// function usd_to_millisats(servicePriceUSD_millicents:Number, bitcoinPrice:Number) {
//     console.log("usd_to_millisats servicePriceUSD:", servicePriceUSD_millicents)
//     console.log("bitcoinPrice:", bitcoinPrice)
//     const profitMarginFactor = 1.0 + profitMarginPct / 100.0;
//     const rawValue = (servicePriceUSD_millicents * 1000000 * profitMarginFactor) / bitcoinPrice;
//     const roundedValue = Math.round(rawValue / 1000) * 1000; 
//     return roundedValue;
//   }
