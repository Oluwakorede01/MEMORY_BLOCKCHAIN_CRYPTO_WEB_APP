const quizData = [
  {
    question: "What is Cryptocurrency?",
    options: ["A:  A digital currency", "B: Digital coin"],
    correct: "A:  A digital currency",
  },

  {
    question: "What is cryptocurrency used for?",
    options: ["A: Means of payment", "B: Means of transfer"],
    correct: "A:  Means of payment",
  },

  {
    question:
      "What secures and verifies crypto transactions?",
    options: ["A:  wallet", "B: Cryptography"],
    correct: "B: Cryptography",
  },

  {
    question: "Where can cryptocurrency be stored?",
    options: ["A:  Wallet", "B: Exchange"],
    correct: "A:  Wallet",
  },

  {
    question: "Types of  cryptocurrency?",
    options: [
      "A:  Bitcoin, altcoins, stablecoins, tokens",
      "B: Xrp, etherium, Doge,Lever",
    ],
    correct: "A:  Bitcoin, altcoins, stablecoins, tokens",
  },
  {
    question: "What is blockchain?",
    options: [
      "A:  A ledger that record transactions",
      "B: A decentralized ledger system",
    ],
    correct: "B: A decentralized ledger system",
  },

  {
    question: "What is a crypto exchange?",
    options: [
      "A:  A platform for trading Bitcoin",
      "B: A platform for buying and selling crypto",
    ],
    correct: "B: A platform for buying and selling crypto",
  },

  {
    question: "Who created Bitcoin?",
    options: ["A:  Vitalik Buterin", "B: Satoshi Nakamoto"],
    correct: "B: Satoshi Nakamoto",
  },

  {
    question: "What is mining in crypto ?",
    options: [
      "A:  The process of trading a coin",
      "B: Validating transactions and earning coins",
    ],
    correct: "B: Validating transactions and earning coins",
  },
  {
    question: "What does decentralized mean in crypto?",
    options: ["A:  It means Bullish", "B: it means there is no centralized authority"],
    correct: "B: it means there is no centralized authority",
  },

  {
    question: "What is Etherium?",
    options: [
      "A: Platform for smart contracts and dApps",
      
      "B: Solution for blockchain"
    ],
    correct: "A: Platform for smart contracts and dApps",
  },


  {
    question: "What is a wallet in crypto?",
    options: [
      "A:  Used for sending crypto",
      "B: Crypto wallet: stores and manages crypto",
    ],
    correct: "B: Crypto wallet: stores and manages crypto",
  },

  {
    question: "What is the name of the first cryptoCurrency?",
    options: [
      "A:  ETH",
      "B: BTC",
    ],
    correct: "B: BTC",
  },

  {
    question: "What does HOLD stands for in crypto slang?",
    options: [
      "A:  Hold On For Dear Life",
      "B: Hack Or Dump Low",
    ],
    correct: "A:  Hold On For Dear Life",
  },

  {
    question: "Which one is not a cryptocurrency?",
    options: [
      "A:  Solana",
      "B: Visa",
    ],
    correct: "B: Visa",
  },

  {
    question: "Which is stable coin?",
    options: [
      "A:  XRP",
      "B: USDT",
    ],
    correct: "B: USDT",
  },

  {
    question: "What does DeFI stand for?",
    options: [
      "A:  Decentralized finance",
      "B: Digital finance",
    ],
    correct: "A:  Decentralized finance",
  },

  {
    question: "What does NFT stands for?",
    options: [
      "A:  Not For Trading",
      "B: Non-Fungible Token",
    ],
    correct: "B: Non-Fungible Token",
  },

  {
    question: "Which of this is a popular crypto wallet?",
    options: [
      "A:  Paypal",
      "B: Metamask",
    ],
    correct: "B: Metamask",
  },

  {
    question: "Which coin is know as 'meme' coin?",
    options: [
      "A:  Etherium",
      "B: Doge",
    ],
    correct: "B: Doge",
  },

  {
    question: "Which one is a decentralized exchange?",
    options: [
      "A:  Binance",
      "B: Uniswap",
    ],
    correct: "B: Uniswap",
  },
  
  {
    question: "What is a gas fee in Etherium?",
    options: [
      "A:  Money for fuel",
      "B: Transaction fee for using the network",
    ],
    correct: "B: Transaction fee for using the network",
  },
  
  {
    question: "Which coin is not real?",
    options: [
      "A:  Polygon",
      "B: CoinAppy",
    ],
    correct: "B: CoinAppy",
  },
  
  {
    question: "What is the main risk of crypto investing?",
    options: [
      "A:  High volatility",
      "B: Market is low",
    ],
    correct: "A:  High volatility",
  },
  
  {
    question: "Which of these is used to store crypto offline?",
    options: [
      "A:  Cold wallet",
      "B: hot wallet",
    ],
    correct: "A:  Cold wallet",
  },
  
  {
    question: "Which of the following is a use of smart contract?",
    options: [
      "A:  Create memes",
      "B: Automate agreements on blockchain",
    ],
    correct: "B: Automate agreements on blockchain",
  },
  
  {
    question: "What is a token in crypto?",
    options: [
      "A:  A mobile App",
      "B: A digital assets built on a blockchain",
    ],
    correct: "B: A digital assets built on a blockchain",
  },

  {
    question: "What is the symbol of Bitcoin?",
    options: [
      "A:  ETH",
      "B: BTC",
    ],
    correct: "B: BTC",
  },

  {
    question: "What is a crypto Exchange?",
    options: [
      "A:  A shopping App",
      "B: A platform to buy and sell cryptocurrency",
    ],
    correct: "B: A platform to buy and sell cryptocurrency",
  },

  {
    question: "What is a rug pull in crypto?",
    options: [
      "A:  A scam project that suddenly disappeared with funds",
      "B: A crypto donation",
    ],
    correct: "A:  A scam project that ran with funds",
  },
  {
    question: "What is staking in crypto?",
    options: [
      "A:  Spending crypto on food",
      "B: Locking crypto to earn rewards",
    ],
    correct: "B: Locking crypto to earn rewards",
  },
  
  {
    question: "What is DAO?",
    options: [
      "A:  Decentralized Autonomous Organization",
      "B: Decentralized Asset Organizer",
    ],
    correct: "A:  Decentralized Autonomous Organization",
  },
  
  {
    question: "Who is Vitalik Buterin?",
    options: [
      "A:  Wallet Developer",
      "B: Co-founder of Etherium",
    ],
    correct: "B: Co-founder of Etherium",
  },
  
  {
    question: "What is whitepaper in crypto?",
    options: [
      "A:  A coin",
      "B: A document explaining a project",
    ],
    correct: "B: A document explaining a project",
  },
  
  {
    question: "What is airdrop in crypto?",
    options: [
      "A:  Cloud storage",
      "B: Free tokens given to users",
    ],
    correct: "B: Free tokens given to users",
  },
  {
    question: "What is a crypto bull market?",
    options: [
      "A:  Bearish Market",
      "B: Bullish Market",
    ],
    correct: "B: Bullish Market",
  },
  
  {
    question: "Which is an NFT marketplace?",
    options: [
      "A:  Coinbase",
      "B: Open-Sea",
    ],
    correct: "B: Open-Sea",
  },
  
  {
    question: "What does 'To The Moon' mean in crypto slang?",
    options: [
      "A:  A new launch",
      "B: Rapid price increase",
    ],
    correct: "B: Rapid price increase",
  },
  
  {
    question: "What does FUD means?",
    options: [
      "A:  Fake User Data",
      "B: Fear, Uncertainty, Doubt",
    ],
    correct: "B: Fear, Uncertainty, Doubt",
  },
  
  {
    question: "What is market capitalization in crypto?",
    options: [
      "A:  Max number of coin",
      "B: Total value of cryptocurrency",
    ],
    correct: "B: Total value of cryptocurrency",
  },
  
  {
    question: "What is a bullish market?",
    options: [
      "A:  When the market is rising",
      "B: When the market is falling",
    ],
    correct: "A:  When the market is rising",
  },
  
  {
    question: "What is pump and dump scheme?",
    options: [
      "A:  Adding liquidity",
      "B: Artificial boosting price and selling off",
    ],
    correct: "B: Artificial boosting price and selling off",
  },
  
  {
    question: "What is a bearish market?",
    options: [
      "A:  When the market is falling",
      "B: When the market is rising",
    ],
    correct: "A:  When the market is falling",
  },
  
  {
    question: "What is the color of bullish candle?",
    options: [
      "A:  Green",
      "B: Red",
    ],
    correct: "A:  Green",
  },
  
  {
    question: "What is the color of bearish candle?",
    options: [
      "A: Green ",
      "B: Red",
    ],
    correct: "B: Red",
  },
  
  {
    question: "What is the native coin of binance blockchain",
    options:[
      "A:  BNB",
      "B: BUSD",
    ],
    correct:"A:  BNB",
  },
  {
    question: "What is hash in blockchain?",
    options:[
      "A:  A blockchain Explorer",
      "B: A cryptographic output of a data"
    ],
    correct:"B: A cryptographic output of a data",
  },
  {
    question: "What is the total supply of Bitcoin?",
    options:["A:  100 million",
      "B: 21 million",
    ],
    correct:"B: 21 million",
  },
  {
    question: "What is slippage in crypto trading?",
    options:["A:  Aidrop fee",
      "B: Differences between expected and executed value"
    ],
    correct:"B: Differences between expected and executed value",
  },
  {
    question: "What does KYC stand for?",
    options:["A:  Know Your Customer",
      "B: Know Your Crypto",
    ],
    correct:"A:  Know Your Customer",
  },
  {
    question: "What is ICO?",
    options:["A:  Initial Coin Option",
      "B: Initial Coin Offering",
    ],
    correct:"B: Initial Coin Offering",
  },
  {
    question: "What is meant by liquidity in crypto?",
    options:["A:  Crypto water level",
      "B: Ease of buying or selling an asset"
    ],
    correct:"B: Ease of buying or selling an asset",
  },
  {
    question: "What does blockchain node do?",
    options:["A:  Create NFT",
      "B: Maintain a copy of blockchain and validate data",
    ],
    correct:"B: Maintain a copy of blockchain and validate data",
  },
  {
    question: "What does ATH stand for?",
    options:["A:  All Time High",
      "B: All Token High",
    ],
    correct:"A:  All Time High",
  },
  {
    question: "What does DYOR mean in crypto?",
    options:["A:  Do Your Own Research",
      "B: Do Your Own Rights",
    ],
    correct:"A:  Do Your Own Research",
  },
  {
    question: "What is a smart contract?",
    options:[
      "A:  A coin backup system",
      "B: Self-executing code on the blockchain",
    ],
    correct:"B: Self-executing code on the blockChain",
  },
  {
    question: "What is staking in crypto?",
    options:["A:  Sending coins to burn address",
      "B: Locking coins to support the network and earn rewards"
    ],
    correct:"B: Locking coins to support the network and earn rewards",
  },
  {
    question: "Which token pays gas on Etherium?",
    options:["A:  USDC",
      "B: ETH",
    ],
    correct:"B: ETH",
  },
  {
    question: "What does minting an NFT mean?",
    options:["A:  Creating a new NFT on the blockchain",
      "B: Transferring ownership"
    ],
    correct:"A:  Creating a new NFT on the blockchain",
  },
  {
    question: "What is seed phrase?",
    options:["A:  A crypto wallet address",
      "B: Recovery phrase for a crypto wallet",
    ],
    correct:"B: Recovery phrase for a crypto wallet",
  },
  {
    question: "What is meme coin",
    options:["A:  Utility Based Token",
      "B: Meme-inspired coin with little use case",
    ],
    correct:"B:  Meme-inspired coin with little use case",
  },
  {
    question: " Blockchain known for  speed and low fees and fast?",
    options:["A:  Solana",
      "B: Ethereum",
    ],
    correct:"A:  Solana",
  },
  {
    question: "What is a private key used for?",
    options:["A:  Access and control a crypto wallet",
      "B: See wallet balance",
    ],
    correct:"A:  Access and control a crypto wallet",
  },
  {
    question: "What is 'burning' a token? ",
    options:["A:  Permanently removing it from circulations",
      "B: Hiding it on chain "
    ],
    correct:"A:  Permanently removing it from circulations",
  },
  {
    question: "What is liquidity pool?",
    options:["A:  Token dashboard",
      "B: Smart contract holding tokens for trading/swapping"
    ],
    correct:"B: Smart contract holding tokens for trading/swapping",
  },
  {
    question: "What is a crypto miner reward?",
    options:["A:  Block reward",
      "B: APY"
    ], 
    correct:"A:  Block reward",
  },
  {
    question: "What is 'TVL' in DeFi? ",
    options:["A:  Token Voting Level",
      "B: Total Value Locked"
    ],
    correct:"B: Total Value Locked",
  },
   
  { 
    question: "What is the smallest unit of Bitcoin called?",
    options: ["A: Satoshi", "B: Bitcent"],
    correct: "A: Satoshi",
  },

   { 
    question: "Consensus mechanism for Bitcoin use?",
    options: ["A: Proof of Work", "B: Proof of Stake"],
    correct: "A: Proof of Work",
  },

  { 
    question: "Which blockchain introduced smart contracts first?",
    options: ["A: Ethereum", "B: Bitcoin"],
    correct: "A: Ethereum",
  },

  
    { 
    question: "Which stablecoin is backed by the US Dollar?",
    options: ["A: USDT", "B: SOL"],
    correct: "A: USDT",
  },


  { 
    question: "What is the primary purpose of a blockchain explorer?",
    options: ["A: To track transactions", "B: To mine coins"],
    correct: "A: To track transactions",
  },

  { 
    question: "Which blockchain is Avalanche native to?",
    options: ["A: AVAX", "B: DOT"],
    correct: "A: AVAX",
  },

  { 
    question: "Which company created the XRP token?",
    options: ["A: Ripple Labs", "B: Ethereum Foundation"],
    correct: "A: Ripple Labs",
  },

   { 
    question: "Which wallet type is considered safest?",
    options: ["A: Hardware wallet", "B: Web wallet"],
    correct: "A: Hardware wallet",
  },

   { 
    question: "What chart uses candlesticks in crypto trading?",
    options: ["A: Technical chart", "B: Line chart"],
    correct: "A: Technical chart",
  },


  { 
    question: "Which of them is a Layer 1 blockchain?",
    options: ["A: Avalanche", "B: Arbitrum"],
    correct: "A: Avalanche",
  },


  { 
    question: "Which country made Bitcoin legal tender in 2021?",
    options: ["A: El Salvador", "B: Nigeria"],
    correct: "A: El Salvador",
  },







  {
    "question": "Which company created the XRP token?",
    "options": [
      "B: Ethereum Foundation",
      "A: Ripple Labs"
    ],
    "correct": "A: Ripple Labs"
  },
  {
    "question": "What is the maximum supply of Bitcoin?",
    "options": [
      "B: 100 million",
      "A: 21 million"
    ],
    "correct": "A: 21 million"
  },
  {
    "question": "Which consensus mechanism does Ethereum now use?",
    "options": [
      "A: Proof of Stake",
      "B: Proof of Work"
    ],
    "correct": "A: Proof of Stake"
  },
  {
    "question": "Who is the pseudonymous creator of Bitcoin?",
    "options": [
      "A: Satoshi Nakamoto",
      "B: Vitalik Buterin"
    ],
    "correct": "A: Satoshi Nakamoto"
  },
  {
    "question": "What is the native token of Binance Smart Chain?",
    "options": [
      "A: BNB",
      "B: BNB Chain"
    ],
    "correct": "A: BNB"
  },
  {
    "question": "What year was Bitcoin launched?",
    "options": [
      "B: 2011",
      "A: 2009"
    ],
    "correct": "A: 2009"
  },
  {
    "question": "What does DEX stand for?",
    "options": [
      "B: Digital Exchange",
      "A: Decentralized Exchange"
    ],
    "correct": "A: Decentralized Exchange"
  },
  {
    "question": "What is a crypto wallet used for?",
    "options": [
      "A: Storing private keys",
      "B: Storing fiat money"
    ],
    "correct": "A: Storing private keys"
  },
  {
    "question": "Which platform is known for NFTs?",
    "options": [
      "B: Bitcoin",
      "A: Ethereum"
    ],
    "correct": "A: Ethereum"
  },
  {
    "question": "Which token powers the Ethereum network?",
    "options": [
      "B: ETC",
      "A: ETH"
    ],
    "correct": "A: ETH"
  },
  {
    "question": "What\u2019s the purpose of a blockchain explorer?",
    "options": [
      "B: Mine new tokens",
      "A: View blockchain data"
    ],
    "correct": "A: View blockchain data"
  },
  {
    "question": "Which blockchain uses SOL as its token?",
    "options": [
      "A: Solana",
      "B: Polygon"
    ],
    "correct": "A: Solana"
  },
  {
    "question": "Which crypto is known as digital silver?",
    "options": [
      "A: Litecoin",
      "B: Ethereum"
    ],
    "correct": "A: Litecoin"
  },
  {
    "question": "What is gas in Ethereum?",
    "options": [
      "A: Transaction fee",
      "B: Block reward"
    ],
    "correct": "A: Transaction fee"
  },
  {
    "question": "What does HODL mean in crypto slang?",
    "options": [
      "B: Sell at peak",
      "A: Hold crypto long-term"
    ],
    "correct": "A: Hold crypto long-term"
  },
  {
    "question": "What is a stablecoin?",
    "options": [
      "A: Crypto pegged to fiat",
      "B: Crypto with fixed supply"
    ],
    "correct": "A: Crypto pegged to fiat"
  },
  {
    "question": "Which coin is a popular privacy coin?",
    "options": [
      "A: Monero",
      "B: Bitcoin Cash"
    ],
    "correct": "A: Monero"
  },
  {
    "question": "What is an NFT?",
    "options": [
      "B: Non-Fixed Token",
      "A: Non-Fungible Token"
    ],
    "correct": "A: Non-Fungible Token"
  },
  {
    "question": "Which company owns Metamask?",
    "options": [
      "A: Consensys",
      "B: Coinbase"
    ],
    "correct": "A: Consensys"
  },
  {
    "question": "Which protocol is used for lending and borrowing?",
    "options": [
      "B: Uniswap",
      "A: Aave"
    ],
    "correct": "A: Aave"
  },
  {
    "question": "Which crypto launched first?",
    "options": [
      "B: Ethereum",
      "A: Bitcoin"
    ],
    "correct": "A: Bitcoin"
  },
  {
    "question": "Which Layer 2 solution is for Ethereum?",
    "options": [
      "A: Arbitrum",
      "B: Solana"
    ],
    "correct": "A: Arbitrum"
  },
  {
    "question": "What is staking?",
    "options": [
      "B: Burning tokens",
      "A: Locking tokens for rewards"
    ],
    "correct": "A: Locking tokens for rewards"
  },
  {
    "question": "What does DeFi stand for?",
    "options": [
      "A: Decentralized Finance",
      "B: Digital Finance"
    ],
    "correct": "A: Decentralized Finance"
  },
  {
    "question": "What\u2019s the primary use of Chainlink?",
    "options": [
      "A: Oracle services",
      "B: Smart contract execution"
    ],
    "correct": "A: Oracle services"
  },
  {
    "question": "Which platform supports Cardano (ADA)?",
    "options": [
      "A: Ouroboros",
      "B: Polkadot"
    ],
    "correct": "A: Ouroboros"
  },
  {
    "question": "What is a DAO?",
    "options": [
      "A: Decentralized Autonomous Organization",
      "B: Digital Asset Operator"
    ],
    "correct": "A: Decentralized Autonomous Organization"
  },
  {
    "question": "Which token is used in Polygon?",
    "options": [
      "B: DOT",
      "A: MATIC"
    ],
    "correct": "A: MATIC"
  },
  {
    "question": "Which coin was created as a joke?",
    "options": [
      "A: Dogecoin",
      "B: Litecoin"
    ],
    "correct": "A: Dogecoin"
  },
  {
    "question": "What is a rug pull?",
    "options": [
      "B: Hard fork",
      "A: Scam project exit"
    ],
    "correct": "A: Scam project exit"
  },
  {
    "question": "Which token powers Uniswap?",
    "options": [
      "B: USDC",
      "A: UNI"
    ],
    "correct": "A: UNI"
  },
  {
    "question": "Which protocol specializes in yield farming?",
    "options": [
      "A: Yearn Finance",
      "B: OpenSea"
    ],
    "correct": "A: Yearn Finance"
  },
  {
    "question": "Which crypto is backed by USD reserves?",
    "options": [
      "A: USDC",
      "B: ETH"
    ],
    "correct": "A: USDC"
  },
  {
    "question": "Which token is used on Avalanche?",
    "options": [
      "A: AVAX",
      "B: SOL"
    ],
    "correct": "A: AVAX"
  },
  {
    "question": "Which blockchain uses DOT?",
    "options": [
      "B: Cosmos",
      "A: Polkadot"
    ],
    "correct": "A: Polkadot"
  },
  {
    "question": "Which crypto uses zero-knowledge proofs?",
    "options": [
      "B: Ripple",
      "A: Zcash"
    ],
    "correct": "A: Zcash"
  },
  {
    "question": "Which token is for smart contracts and dApps?",
    "options": [
      "B: XRP",
      "A: Ethereum"
    ],
    "correct": "A: Ethereum"
  },
  {
    "question": "Which country adopted Bitcoin as legal tender?",
    "options": [
      "A: El Salvador",
      "B: Switzerland"
    ],
    "correct": "A: El Salvador"
  },
  {
    "question": "What\u2019s the smallest unit of Bitcoin?",
    "options": [
      "B: Bitcent",
      "A: Satoshi"
    ],
    "correct": "A: Satoshi"
  },
  {
    "question": "What is a private key?",
    "options": [
      "A: Secret password for wallet",
      "B: Crypto exchange password"
    ],
    "correct": "A: Secret password for wallet"
  },
  {
    "question": "Which company created Tether?",
    "options": [
      "B: Binance",
      "A: iFinex"
    ],
    "correct": "A: iFinex"
  },
  {
    "question": "What is the first NFT collection?",
    "options": [
      "A: CryptoPunks",
      "B: Bored Ape"
    ],
    "correct": "A: CryptoPunks"
  },
  {
    "question": "What\u2019s the use of PancakeSwap?",
    "options": [
      "A: DEX on BSC",
      "B: Token burning"
    ],
    "correct": "A: DEX on BSC"
  },
  {
    "question": "What is a hard fork?",
    "options": [
      "B: Token airdrop",
      "A: Major blockchain change"
    ],
    "correct": "A: Major blockchain change"
  },
  {
    "question": "Which coin uses delegated proof of stake?",
    "options": [
      "A: EOS",
      "B: Bitcoin"
    ],
    "correct": "A: EOS"
  },
  {
    "question": "Which token is used on Cosmos?",
    "options": [
      "B: LUNA",
      "A: ATOM"
    ],
    "correct": "A: ATOM"
  },
  {
    "question": "What is a cold wallet?",
    "options": [
      "B: Hot crypto exchange",
      "A: Offline crypto wallet"
    ],
    "correct": "A: Offline crypto wallet"
  },
  {
    "question": "Which coin enables fast micropayments?",
    "options": [
      "A: Nano",
      "B: Bitcoin"
    ],
    "correct": "A: Nano"
  },
  {
    "question": "What is the purpose of Etherscan?",
    "options": [
      "A: Track Ethereum transactions",
      "B: Buy ETH"
    ],
    "correct": "A: Track Ethereum transactions"
  },
  {
    "question": "What\u2019s a meme coin?",
    "options": [
      "B: Stablecoin",
      "A: Joke-based crypto"
    ],
    "correct": "A: Joke-based crypto"
  },
  {
    "question": "Which protocol supports flash loans?",
    "options": [
      "B: Uniswap",
      "A: Aave"
    ],
    "correct": "A: Aave"
  },
  {
    "question": "What is slippage in trading?",
    "options": [
      "A: Price difference at execution",
      "B: Network fee"
    ],
    "correct": "A: Price difference at execution"
  },
  {
    "question": "Which project is Layer 1?",
    "options": [
      "A: Solana",
      "B: Polygon"
    ],
    "correct": "A: Solana"
  },
  {
    "question": "Which token is used on Sui Network?",
    "options": [
      "B: AR",
      "A: SUI"
    ],
    "correct": "A: SUI"
  },
  {
    "question": "Which is the main token of Arbitrum?",
    "options": [
      "B: OP",
      "A: ARB"
    ],
    "correct": "A: ARB"
  },
  {
    "question": "Which token is used in Optimism?",
    "options": [
      "B: ARB",
      "A: OP"
    ],
    "correct": "A: OP"
  },
  {
    "question": "Which coin is used on Near Protocol?",
    "options": [
      "B: ATOM",
      "A: NEAR"
    ],
    "correct": "A: NEAR"
  },
  {
    "question": "Which blockchain uses the Move programming language?",
    "options": [
      "A: Aptos",
      "B: Ethereum"
    ],
    "correct": "A: Aptos"
  },
  {
    "question": "What\u2019s the native token of Starknet?",
    "options": [
      "A: STRK",
      "B: STARK"
    ],
    "correct": "A: STRK"
  },
  {
    "question": "What does TVL mean in DeFi?",
    "options": [
      "A: Total Value Locked",
      "B: Token Volume Liquidity"
    ],
    "correct": "A: Total Value Locked"
  },
  {
    "question": "Which crypto is known for scalability?",
    "options": [
      "A: Avalanche",
      "B: Bitcoin"
    ],
    "correct": "A: Avalanche"
  },
  {
    "question": "What is yield farming?",
    "options": [
      "B: Trading bots",
      "A: Earning from liquidity"
    ],
    "correct": "A: Earning from liquidity"
  },
  {
    "question": "Which chain was created by Gavin Wood?",
    "options": [
      "A: Polkadot",
      "B: Ethereum Classic"
    ],
    "correct": "A: Polkadot"
  },
  {
    "question": "What is a Genesis Block?",
    "options": [
      "B: Latest mined block",
      "A: First block in a chain"
    ],
    "correct": "A: First block in a chain"
  },
  {
    "question": "Which coin has smart privacy features?",
    "options": [
      "B: Ethereum",
      "A: Monero"
    ],
    "correct": "A: Monero"
  },
  {
    "question": "Which project provides decentralized storage?",
    "options": [
      "B: Chainlink",
      "A: Filecoin"
    ],
    "correct": "A: Filecoin"
  },
  {
    "question": "What is an ICO?",
    "options": [
      "A: Initial Coin Offering",
      "B: Inter-Chain Operation"
    ],
    "correct": "A: Initial Coin Offering"
  },
  {
    "question": "What is impermanent loss?",
    "options": [
      "B: Wallet loss",
      "A: Loss from providing liquidity"
    ],
    "correct": "A: Loss from providing liquidity"
  },
  {
    "question": "What token did Terra use?",
    "options": [
      "A: LUNA",
      "B: SOL"
    ],
    "correct": "A: LUNA"
  },
  {
    "question": "Which coin was forked from Bitcoin?",
    "options": [
      "B: ETH",
      "A: Bitcoin Cash"
    ],
    "correct": "A: Bitcoin Cash"
  },
  {
    "question": "Which blockchain is IOTA associated with?",
    "options": [
      "B: Ouroboros",
      "A: Tangle"
    ],
    "correct": "A: Tangle"
  },
  {
    "question": "What is Web3?",
    "options": [
      "B: New browser",
      "A: Decentralized internet"
    ],
    "correct": "A: Decentralized internet"
  },
  {
    "question": "Which coin is often used for remittances?",
    "options": [
      "A: XRP",
      "B: SHIB"
    ],
    "correct": "A: XRP"
  },
  {
    "question": "Which exchange collapsed in 2022?",
    "options": [
      "A: FTX",
      "B: Binance"
    ],
    "correct": "A: FTX"
  },
  {
    "question": "Which token was affected by FTX collapse?",
    "options": [
      "B: BNB",
      "A: FTT"
    ],
    "correct": "A: FTT"
  },
  {
    "question": "Which protocol uses bonding curves?",
    "options": [
      "A: OlympusDAO",
      "B: Chainlink"
    ],
    "correct": "A: OlympusDAO"
  },
  {
    "question": "Which coin runs on Hedera?",
    "options": [
      "A: HBAR",
      "B: TRX"
    ],
    "correct": "A: HBAR"
  },
  {
    "question": "Which token is associated with Tron?",
    "options": [
      "A: TRX",
      "B: XRP"
    ],
    "correct": "A: TRX"
  },
  {
    "question": "Which chain uses consensus called Tendermint?",
    "options": [
      "B: Tezos",
      "A: Cosmos"
    ],
    "correct": "A: Cosmos"
  },
  {
    "question": "What is zkRollup?",
    "options": [
      "B: Token swap process",
      "A: Scalable L2 solution"
    ],
    "correct": "A: Scalable L2 solution"
  },
  {
    "question": "Which protocol offers perpetual futures?",
    "options": [
      "A: dYdX",
      "B: SushiSwap"
    ],
    "correct": "A: dYdX"
  },
  {
    "question": "Which token was once #2 in market cap?",
    "options": [
      "B: Litecoin",
      "A: Ethereum"
    ],
    "correct": "A: Ethereum"
  },
  {
    "question": "What crypto term means automatic execution?",
    "options": [
      "A: Smart contract",
      "B: Auto-swap"
    ],
    "correct": "A: Smart contract"
  },
  {
    "question": "Which blockchain uses sharding?",
    "options": [
      "B: Bitcoin",
      "A: Ethereum 2.0"
    ],
    "correct": "A: Ethereum 2.0"
  },
  {
    "question": "Which token uses LP for liquidity?",
    "options": [
      "B: MakerDAO",
      "A: Uniswap"
    ],
    "correct": "A: Uniswap"
  },
  {
    "question": "What is whale in crypto?",
    "options": [
      "B: Small trader",
      "A: Large holder"
    ],
    "correct": "A: Large holder"
  },
  {
    "question": "What is FUD?",
    "options": [
      "B: Fast Unstake Decision",
      "A: Fear, Uncertainty, Doubt"
    ],
    "correct": "A: Fear, Uncertainty, Doubt"
  },
  {
    "question": "Which coin was created by Charlie Lee?",
    "options": [
      "A: Litecoin",
      "B: Dogecoin"
    ],
    "correct": "A: Litecoin"
  },
  {
    "question": "What is minting in crypto?",
    "options": [
      "B: Burning tokens",
      "A: Creating new tokens"
    ],
    "correct": "A: Creating new tokens"
  },
  {
    "question": "Which platform supports zkSync?",
    "options": [
      "B: Solana",
      "A: Ethereum"
    ],
    "correct": "A: Ethereum"
  },
  {
    "question": "Which app is used for crypto tips?",
    "options": [
      "A: Farcaster",
      "B: Excel"
    ],
    "correct": "A: Farcaster"
  },
  {
    "question": "Which crypto is used on Base chain?",
    "options": [
      "A: ETH",
      "B: SOL"
    ],
    "correct": "A: ETH"
  },
  {
    "question": "What does GM mean in crypto slang?",
    "options": [
      "B: Great Market",
      "A: Good Morning"
    ],
    "correct": "A: Good Morning"
  },
  {
    "question": "Which blockchain is known for low gas fees?",
    "options": [
      "B: Ethereum",
      "A: Polygon"
    ],
    "correct": "A: Polygon"
  },
  {
    "question": "Which token fuels the Fantom network?",
    "options": [
      "A: FTM",
      "B: FTX"
    ],
    "correct": "A: FTM"
  },
  {
    "question": "Which platform is known for airdrops?",
    "options": [
      "A: Arbitrum",
      "B: Ripple"
    ],
    "correct": "A: Arbitrum"
  },
  {
    "question": "Which crypto is a fork of Ethereum?",
    "options": [
      "B: Solana",
      "A: Ethereum Classic"
    ],
    "correct": "A: Ethereum Classic"
  },
  {
    "question": "Which token is used on zkSync?",
    "options": [
      "A: ETH",
      "B: BTC"
    ],
    "correct": "A: ETH"
  }
];

let currentQuestion = 0;
let score = 0;
let timer;

const quiz = document.getElementById("quiz");

const scoreDiv = document.getElementById("score");

const nextBtn = document.getElementById("nextBtn");
const timerDisplay = document.getElementById("timer");
const usernameInput = document.getElementById("usernameInput");
const startBtn = document.getElementById("startBtn");
const restartBtn = document.getElementById("restartBtn");
const quizSection = document.getElementById("quizSection");
const greeting = document.getElementById("greeting");
const correctSound = document.getElementById("correctSound");
const wrongSound = document.getElementById("wrongSound");

document.getElementById("startBtn").addEventListener("click", function(){
  const audio = document.getElementById("quizAudio");
  audio.muted = false;
  audio.play();
})

startBtn.onclick = () => {
  console.log("Start button clicked");


  const name = username.value.trim();
  if (name) {
    greeting.textContent = `welcome, ${name} Let's test your crypto knowledge!`;
    usernameInput.style.display = "none";
    quizSection.style.display = "flex";
    shuffleQuestions();
    loadQuestion();
  } else {
    alert("Please enter your name to start.");
  }


};

restartBtn.onclick = () => {
  currentQuestion = 0;
  score = 0;
  restartBtn.style.display = "none";
  scoreDiv.textContent = "";
  shuffleQuestions();
  loadQuestion();
};

function shuffleQuestions() {
  for (let i = quizData.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [quizData[i], quizData[j]] = [quizData[j], quizData[i]];
  }
}

function loadQuestion() {
  clearInterval(timer);
  timerDisplay.textContent = "";
  nextBtn.style.display = "none";
  quiz.innerHTML = "";

  if (currentQuestion >= 20) {
    quiz.innerHTML = "<h2 style='color:white;'>Quiz completed!</h2>";
    scoreDiv.textContent = `Your score: ${score} /20`;
    restartBtn.style.display = "inline-block";
    return;
  }

  const q = quizData[currentQuestion];
  const qDiv = document.createElement("div");
  qDiv.className = "question";
  qDiv.innerHTML = `<strong>${currentQuestion + 1}. ${q.question}</strong>`;
  quiz.appendChild(qDiv);

  q.options.forEach((opt) => {
    const p = document.createElement("p");
    p.className = "option";
    p.textContent = opt;
    p.onclick = () => handleAnswer(p, q.correct);
    qDiv.appendChild(p);
  });

  startTimer();
}

function handleAnswer(selectedOption, correct) {
  // clearInterval(timer);

  if(document.querySelector(".option.clicked")) return;

  selectedOption.classList.add("clicked");
  clearInterval(timer);

  const allOptions = document.querySelectorAll(".options");
  allOptions.forEach((opt) => (opt.onclick = null));

  if (selectedOption.textContent === correct) {
    selectedOption.classList.add("correct");
    selectedOption.textContent += "✅";
    score++;
  } else {
    selectedOption.classList.add("wrong");
    selectedOption.textContent += "❌";
    allOptions.forEach((opt) => {
      if (opt.textContent === correct) {
        opt.classList.add("correct");
        if (!opt.textContent.includes("✅")) {
          opt.textContent += "✅";
        }
      }
    });
    
  }

  nextBtn.style.display = "inline-block";
}

function showCorrectAnswer() {
  const correct = quizData[currentQuestion].correct;
  const allOptions = document.querySelectorAll(".option");
  allOptions.forEach((opt) => {
    opt.onClick = null;
    if (opt.textContent === correct) {
      opt.classList.add("correct");
      if (!opt.textContent.includes("✅")) {
        opt.textContent += "✅";
      }
    }
    opt.onclick = null;
  });
  nextBtn.style.display = "inline-block";
}

function startTimer() {
  let timeLeft = 15;
  timerDisplay.textContent = `Time Left for you to pick an answer: ${timeLeft}s`;
  timer = setInterval(() => {
    timeLeft--;
    timerDisplay.textContent = `Time Left: ${timeLeft}s ⏱️`;
    if (timeLeft <= 0) {
      clearInterval(timer);
      showCorrectAnswer();
    }
  }, 1000);
}


nextBtn.onclick = () => {
  currentQuestion++;

  loadQuestion();
};
