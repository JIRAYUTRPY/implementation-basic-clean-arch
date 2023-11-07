let cyrptocurrencys = [
  {
    id: 1,
    name: "BATH",
    symbol: "BTH",
    factor: 1,
  },
  {
    id: 2,
    name: "BITCOIN",
    symbol: "BTC",
    factor: 0.0001,
  },
  {
    id: 3,
    name: "ETHEREUM",
    symbol: "ETH",
    factor: 0.0018,
  },
];

let orders = [];
let transactions = [];

let users = [
  {
    id: 1,
    email: "sjedrychowski0@whitehouse.gov",
    password: "$2a$04$fxJJA1QH4oA1Yr8mGwk97OVv1QzkgK90fO.3UoshoLKmVxo8WcXIa",
    firstName: "Sela",
    lastName: "Jedrychowski",
    phone: "626-757-1740",
    address: "Japan",
  },
];

let wallets = [
  {
    id: 1,
    user_id: 1,
    eypto_id: 1,
    balance: 0,
  },
  {
    id: 2,
    user_id: 1,
    eypto_id: 2,
    balance: 0,
  },
  {
    id: 3,
    user_id: 1,
    eypto_id: 3,
    balance: 0,
  },
];

export default {
  users,
  wallets,
  orders,
  transactions,
};
