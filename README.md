# Cypher Nuxt3 Template

![Licence](https://img.shields.io/github/license/cypher-space/V0.9-Beta) ![Issues](https://img.shields.io/github/issues/cypher-space/V0.9-Beta) 

<a href="https://demo.cypher.space" target="_blank">
Live Build Preview
</a>


## TODO
### CLI
- a node js command to add products.

### Future integrations:
- Nostr Osty 
- Simple CLI for adding products
- Pull Content & Products from Nostr
- Better pay flow integration ( Updated Vue3 widgets, bitcoin connect, Inform )

### Bugs & Loose ends
- Paywall integration 
- Bitaxe multi vendor test 
- Find Local invoice creation
- Alby Open Finance
- Bitcoin Price Ticker
- a local front-end to add markdown & products
- Order forfilment ( currently pipedream webhook )
- Inventory management 



## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# generate build to the /dist or .output folder
$ npm run build


```


Core Repo Values

- Repo must be open 
- No fiat integrations except for the fiat ticker. ( this is bitcoin only )
- Flat file / Static Build First Nostr Second ( json objects )
- External hooks are necessary ( Fiat Ticker, Blockstream, GetAlby )
- Zero Cost ( it should not cost a penny to host this on a cloud edge )