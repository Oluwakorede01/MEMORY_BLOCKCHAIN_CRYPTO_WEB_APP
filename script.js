const quizData = [
{
    question: "What is Cryptocurrency?",
    options: ["A: Digital coin", "B: A digital currency"],
    correct: "B: A digital currency",
  },
  {
    question: "What is cryptocurrency used for?",
    options: ["A: Means of transfer", "B: Means of payment"],
    correct: "B: Means of payment",
  },
  {
    question: "What secures and verifies crypto transactions?",
    options: ["A: Cryptography", "B: Wallet"],
    correct: "A: Cryptography",
  },
  {
    question: "Where can cryptocurrency be stored?",
    options: ["A: Exchange", "B: Wallet"],
    correct: "B: Wallet",
  },
  {
    question: "Types of cryptocurrency?",
    options: [
      "A: XRP, Ethereum, Doge, Lever",
      "B: Bitcoin, altcoins, stablecoins, tokens",
    ],
    correct: "B: Bitcoin, altcoins, stablecoins, tokens",
  },
  {
    question: "What is blockchain?",
    options: [
      "A: A decentralized ledger system",
      "B: A ledger that records transactions",
    ],
    correct: "A: A decentralized ledger system",
  },
  {
    question: "What is a crypto exchange?",
    options: [
      "A: A platform for buying and selling crypto",
      "B: A platform for trading Bitcoin",
    ],
    correct: "A: A platform for buying and selling crypto",
  },
  {
    question: "Who created Bitcoin?",
    options: ["A: Satoshi Nakamoto", "B: Vitalik Buterin"],
    correct: "A: Satoshi Nakamoto",
  },
  {
    question: "What is mining in crypto?",
    options: [
      "A: Validating transactions and earning coins",
      "B: The process of trading a coin",
    ],
    correct: "A: Validating transactions and earning coins",
  },
  {
    question: "What does decentralized mean in crypto?",
    options: [
      "A: It means there is no centralized authority",
      "B: It means Bullish",
    ],
    correct: "A: It means there is no centralized authority",
  },
  {
    question: "What is Ethereum?",
    options: [
      "A: Solution for blockchain",
      "B: Platform for smart contracts and dApps",
    ],
    correct: "B: Platform for smart contracts and dApps",
  },
  {
    question: "What is a wallet in crypto?",
    options: [
      "A: Crypto wallet: stores and manages crypto",
      "B: Used for sending crypto",
    ],
    correct: "A: Crypto wallet: stores and manages crypto",
  },
  {
    question: "What is the name of the first cryptocurrency?",
    options: [
      "A: ETH",
      "B: BTC",
    ],
    correct: "B: BTC",
  },


  {
    question: "What does HODL stand for in crypto slang?",
    options: ["A: Hack Or Dump Low", "B: Hold On For Dear Life"],
    correct: "B: Hold On For Dear Life",
  },
  {
    question: "Which one is not a cryptocurrency?",
    options: ["A: Visa", "B: Solana"],
    correct: "A: Visa",
  },
  {
    question: "Which is a stablecoin?",
    options: ["A: USDT", "B: XRP"],
    correct: "A: USDT",
  },
  {
    question: "What does DeFi stand for?",
    options: ["A: Digital finance", "B: Decentralized finance"],
    correct: "B: Decentralized finance",
  },
  {
    question: "What does NFT stand for?",
    options: ["A: Not For Trading", "B: Non-Fungible Token"],
    correct: "B: Non-Fungible Token",
  },
  {
    question: "Which of these is a popular crypto wallet?",
    options: ["A: Metamask", "B: PayPal"],
    correct: "A: Metamask",
  },
  {
    question: "Which coin is known as a 'meme' coin?",
    options: ["A: Doge", "B: Ethereum"],
    correct: "A: Doge",
  },
  {
    question: "Which one is a decentralized exchange?",
    options: ["A: Binance", "B: Uniswap"],
    correct: "B: Uniswap",
  },
  {
    question: "What is a gas fee on Ethereum?",
    options: [
      "A: Money for fuel",
      "B: Transaction fee for using the network",
    ],
    correct: "B: Transaction fee for using the network",
  },
  {
    question: "Which coin is not real?",
    options: ["A: CoinAppy", "B: Polygon"],
    correct: "A: CoinAppy",
  },
  {
    question: "What is the main risk of crypto investing?",
    options: ["A: Market is low", "B: High volatility"],
    correct: "B: High volatility",
  },
  {
    question: "Which of these is used to store crypto offline?",
    options: ["A: Cold wallet", "B: Hot wallet"],
    correct: "A: Cold wallet",
  },
  {
    question: "What is a use of smart contracts?",
    options: ["A: Automate agreements on blockchain", "B: Create memes"],
    correct: "A: Automate agreements on blockchain",
  },
  {
    question: "What is a token in crypto?",
    options: [
      "A: A digital asset built on a blockchain",
      "B: A mobile app",
    ],
    correct: "A: A digital asset built on a blockchain",
  },
  {
    question: "What is the symbol of Bitcoin?",
    options: ["A: BTC", "B: ETH"],
    correct: "A: BTC",
  },
  {
    question: "What is a crypto exchange?",
    options: [
      "A: A shopping app",
      "B: A platform to buy and sell cryptocurrency",
    ],
    correct: "B: A platform to buy and sell cryptocurrency",
  },
  {
    question: "What is a rug pull in crypto?",
    options: [
      "A: A scam project that ran with funds",
      "B: A crypto donation",
    ],
    correct: "A: A scam project that ran with funds",
  },
  {
    question: "What is staking in crypto?",
    options: [
      "A: Locking crypto to earn rewards",
      "B: Spending crypto on food",
    ],
    correct: "A: Locking crypto to earn rewards",
  },
  {
    question: "What is a DAO?",
    options: [
      "A: Decentralized Autonomous Organization",
      "B: Decentralized Asset Organizer",
    ],
    correct: "A: Decentralized Autonomous Organization",
  },
  {
    question: "Who is Vitalik Buterin?",
    options: [
      "A: Wallet developer",
      "B: Co-founder of Ethereum",
    ],
    correct: "B: Co-founder of Ethereum",
  },
  {
    question: "What is a whitepaper in crypto?",
    options: [
      "A: A document explaining a project",
      "B: A coin",
    ],
    correct: "A: A document explaining a project",
  },
  {
    question: "What is an airdrop in crypto?",
    options: [
      "A: Cloud storage",
      "B: Free tokens given to users",
    ],
    correct: "B: Free tokens given to users",
  },
  {
    question: "What is a crypto bull market?",
    options: [
      "A: Bullish market",
      "B: Bearish market",
    ],
    correct: "A: Bullish market",
  },
  {
    question: "Which is an NFT marketplace?",
    options: ["A: OpenSea", "B: Coinbase"],
    correct: "A: OpenSea",
  },
  {
    question: "What does 'To The Moon' mean in crypto slang?",
    options: ["A: A new launch", "B: Rapid price increase"],
    correct: "B: Rapid price increase",
  },
  {
    question: "What does FUD mean?",
    options: ["A: Fear, Uncertainty, Doubt", "B: Fake User Data"],
    correct: "A: Fear, Uncertainty, Doubt",
  },
  {
    question: "What is market capitalization in crypto?",
    options: [
      "A: Max number of coins",
      "B: Total value of cryptocurrency",
    ],
    correct: "B: Total value of cryptocurrency",
  },
  {
    question: "What is a bullish market?",
    options: [
      "A: When the market is falling",
      "B: When the market is rising",
    ],
    correct: "B: When the market is rising",
  },

  {
    question: "What is a pump and dump scheme?",
    options: ["A: Artificially boosting price and selling off", "B: Adding liquidity"],
    correct: "A: Artificially boosting price and selling off",
  },
  {
    question: "What is a bearish market?",
    options: ["A: When the market is rising", "B: When the market is falling"],
    correct: "B: When the market is falling",
  },
  {
    question: "What is the color of a bullish candle?",
    options: ["A: Red", "B: Green"],
    correct: "B: Green",
  },
  {
    question: "What is the color of a bearish candle?",
    options: ["A: Green", "B: Red"],
    correct: "B: Red",
  },
  {
    question: "What is the native coin of Binance blockchain?",
    options: ["A: BUSD", "B: BNB"],
    correct: "B: BNB",
  },
  {
    question: "What is a hash in blockchain?",
    options: ["A: A cryptographic output of data", "B: A blockchain explorer"],
    correct: "A: A cryptographic output of data",
  },
  {
    question: "What is the total supply of Bitcoin?",
    options: ["A: 21 million", "B: 100 million"],
    correct: "A: 21 million",
  },
  {
    question: "What is slippage in crypto trading?",
    options: ["A: Difference between expected and executed value", "B: Airdrop fee"],
    correct: "A: Difference between expected and executed value",
  },
  {
    question: "What does KYC stand for?",
    options: ["A: Know Your Crypto", "B: Know Your Customer"],
    correct: "B: Know Your Customer",
  },
  {
    question: "What is ICO?",
    options: ["A: Initial Coin Offering", "B: Initial Coin Option"],
    correct: "A: Initial Coin Offering",
  },
  {
    question: "What is meant by liquidity in crypto?",
    options: ["A: Crypto water level", "B: Ease of buying or selling an asset"],
    correct: "B: Ease of buying or selling an asset",
  },
  {
    question: "What does a blockchain node do?",
    options: ["A: Maintain a copy of blockchain and validate data", "B: Create NFT"],
    correct: "A: Maintain a copy of blockchain and validate data",
  },
  {
    question: "What does ATH stand for?",
    options: ["A: All Token High", "B: All Time High"],
    correct: "B: All Time High",
  },
  {
    question: "What does DYOR mean in crypto?",
    options: ["A: Do Your Own Research", "B: Do Your Own Rights"],
    correct: "A: Do Your Own Research",
  },
  {
    question: "What is a smart contract?",
    options: ["A: A coin backup system", "B: Self-executing code on the blockchain"],
    correct: "B: Self-executing code on the blockchain",
  },
  {
    question: "What is staking in crypto?",
    options: ["A: Sending coins to a burn address", "B: Locking coins to support the network and earn rewards"],
    correct: "B: Locking coins to support the network and earn rewards",
  },
  {
    question: "Which token pays gas on Ethereum?",
    options: ["A: ETH", "B: USDC"],
    correct: "A: ETH",
  },
  {
    question: "What does minting an NFT mean?",
    options: ["A: Transferring ownership", "B: Creating a new NFT on the blockchain"],
    correct: "B: Creating a new NFT on the blockchain",
  },

  
  {
    question: "What is a seed phrase?",
    options: ["A: Recovery phrase for a crypto wallet", "B: A crypto wallet address"],
    correct: "A: Recovery phrase for a crypto wallet",
  },
  {
    question: "What is a meme coin?",
    options: ["A: Meme-inspired coin with little use case", "B: Utility-based token"],
    correct: "A: Meme-inspired coin with little use case",
  },
  {
    question: "Which blockchain is known for speed and low fees?",
    options: ["A: Ethereum", "B: Solana"],
    correct: "B: Solana",
  },
  {
    question: "What is a private key used for?",
    options: ["A: See wallet balance", "B: Access and control a crypto wallet"],
    correct: "B: Access and control a crypto wallet",
  },
  {
    question: "What does 'burning' a token mean?",
    options: ["A: Hiding it on-chain", "B: Permanently removing it from circulation"],
    correct: "B: Permanently removing it from circulation",
  },
  {
    question: "What is a liquidity pool?",
    options: [
      "A: Smart contract holding tokens for trading/swapping",
      "B: Token dashboard",
    ],
    correct: "A: Smart contract holding tokens for trading/swapping",
  },
  {
    question: "What is a crypto miner's reward called?",
    options: ["A: APY", "B: Block reward"],
    correct: "B: Block reward",
  },
  {
    question: "What does TVL stand for in DeFi?",
    options: ["A: Token Voting Level", "B: Total Value Locked"],
    correct: "B: Total Value Locked",
  },
  {
    question: "What is the smallest unit of Bitcoin called?",
    options: ["A: Bitcent", "B: Satoshi"],
    correct: "B: Satoshi",
  },
  {
    question: "Which consensus mechanism does Bitcoin use?",
    options: ["A: Proof of Stake", "B: Proof of Work"],
    correct: "B: Proof of Work",
  },
  {
    question: "Which blockchain introduced smart contracts first?",
    options: ["A: Bitcoin", "B: Ethereum"],
    correct: "B: Ethereum",
  },
  {
    question: "Which stablecoin is backed by the US Dollar?",
    options: ["A: SOL", "B: USDT"],
    correct: "B: USDT",
  },
  {
    question: "What is the primary purpose of a blockchain explorer?",
    options: ["A: To track transactions", "B: To mine coins"],
    correct: "A: To track transactions",
  },
  {
    question: "Which blockchain is Avalanche native to?",
    options: ["A: DOT", "B: AVAX"],
    correct: "B: AVAX",
  },
  {
    question: "Which company created the XRP token?",
    options: ["A: Ripple Labs", "B: Ethereum Foundation"],
    correct: "A: Ripple Labs",
  },
  {
    question: "Which type of wallet is considered safest?",
    options: ["A: Hardware wallet", "B: Web wallet"],
    correct: "A: Hardware wallet",
  },
  {
    question: "Which chart uses candlesticks in crypto trading?",
    options: ["A: Line chart", "B: Technical chart"],
    correct: "B: Technical chart",
  },
  {
    question: "Which of these is a Layer 1 blockchain?",
    options: ["A: Arbitrum", "B: Avalanche"],
    correct: "B: Avalanche",
  },
  {
    question: "Which country made Bitcoin legal tender in 2021?",
    options: ["A: Nigeria", "B: El Salvador"],
    correct: "B: El Salvador",
  },
  {
    question: "What is the maximum supply of Bitcoin?",
    options: ["A: 100 million", "B: 21 million"],
    correct: "B: 21 million",
  },
  {
    question: "Which consensus mechanism does Ethereum now use?",
    options: ["A: Proof of Stake", "B: Proof of Work"],
    correct: "A: Proof of Stake",
  },
  {
    question: "Who is the pseudonymous creator of Bitcoin?",
    options: ["A: Vitalik Buterin", "B: Satoshi Nakamoto"],
    correct: "B: Satoshi Nakamoto",
  },
  {
    question: "What is the native token of Binance Smart Chain?",
    options: ["A: BNB Chain", "B: BNB"],
    correct: "B: BNB",
  },
  {
    question: "What year was Bitcoin launched?",
    options: ["A: 2009", "B: 2011"],
    correct: "A: 2009",
  },
 
{
    "question": "What does DEX stand for?",
    "options": ["A: Digital Exchange", "B: Decentralized Exchange"],
    "correct": "B: Decentralized Exchange"
  },
  {
    "question": "What is a crypto wallet used for?",
    "options": ["A: Storing private keys", "B: Storing fiat money"],
    "correct": "A: Storing private keys"
  },
  {
    "question": "Which platform is known for NFTs?",
    "options": ["A: Ethereum", "B: Bitcoin"],
    "correct": "A: Ethereum"
  },
  {
    "question": "Which token powers the Ethereum network?",
    "options": ["A: ETH", "B: ETC"],
    "correct": "A: ETH"
  },
  {
    "question": "What’s the purpose of a blockchain explorer?",
    "options": ["A: Mine new tokens", "B: View blockchain data"],
    "correct": "B: View blockchain data"
  },
  {
    "question": "Which blockchain uses SOL as its token?",
    "options": ["A: Solana", "B: Polygon"],
    "correct": "A: Solana"
  },
  {
    "question": "Which crypto is known as digital silver?",
    "options": ["A: Ethereum", "B: Litecoin"],
    "correct": "B: Litecoin"
  },
  {
    "question": "What is gas in Ethereum?",
    "options": ["A: Transaction fee", "B: Block reward"],
    "correct": "A: Transaction fee"
  },
  {
    "question": "What does HODL mean in crypto slang?",
    "options": ["A: Sell at peak", "B: Hold crypto long-term"],
    "correct": "B: Hold crypto long-term"
  },
  {
    "question": "What is a stablecoin?",
    "options": ["A: Crypto with fixed supply", "B: Crypto pegged to fiat"],
    "correct": "B: Crypto pegged to fiat"
  },



{
    "question": "What token did Terra use?",
    "options": ["A: LUNA", "B: SOL"],
    "correct": "A: LUNA"
  },
  {
    "question": "Which coin was forked from Bitcoin?",
    "options": ["A: ETH", "B: Bitcoin Cash"],
    "correct": "B: Bitcoin Cash"
  },
  {
    "question": "Which blockchain is IOTA associated with?",
    "options": ["A: Tangle", "B: Ouroboros"],
    "correct": "A: Tangle"
  },
  {
    "question": "What is Web3?",
    "options": ["A: Decentralized internet", "B: New browser"],
    "correct": "A: Decentralized internet"
  },
  {
    "question": "Which coin is often used for remittances?",
    "options": ["A: SHIB", "B: XRP"],
    "correct": "B: XRP"
  },
  {
    "question": "Which exchange collapsed in 2022?",
    "options": ["A: Binance", "B: FTX"],
    "correct": "B: FTX"
  },
  {
    "question": "Which token was affected by FTX collapse?",
    "options": ["A: FTT", "B: BNB"],
    "correct": "A: FTT"
  },
  {
    "question": "Which protocol uses bonding curves?",
    "options": ["A: OlympusDAO", "B: Chainlink"],
    "correct": "A: OlympusDAO"
  },
  {
    "question": "Which coin runs on Hedera?",
    "options": ["A: TRX", "B: HBAR"],
    "correct": "B: HBAR"
  },
  {
    "question": "Which token is associated with Tron?",
    "options": ["A: XRP", "B: TRX"],
    "correct": "B: TRX"
  },
  {
    "question": "Which chain uses consensus called Tendermint?",
    "options": ["A: Cosmos", "B: Tezos"],
    "correct": "A: Cosmos"
  },
  {
    "question": "What is zkRollup?",
    "options": ["A: Scalable L2 solution", "B: Token swap process"],
    "correct": "A: Scalable L2 solution"
  },
  {
    "question": "Which protocol offers perpetual futures?",
    "options": ["A: dYdX", "B: SushiSwap"],
    "correct": "A: dYdX"
  },
  {
    "question": "Which token was once #2 in market cap?",
    "options": ["A: Litecoin", "B: Ethereum"],
    "correct": "B: Ethereum"
  },
  {
    "question": "What crypto term means automatic execution?",
    "options": ["A: Auto-swap", "B: Smart contract"],
    "correct": "B: Smart contract"
  },
  {
    "question": "Which blockchain uses sharding?",
    "options": ["A: Bitcoin", "B: Ethereum 2.0"],
    "correct": "B: Ethereum 2.0"
  },
  {
    "question": "Which token uses LP for liquidity?",
    "options": ["A: MakerDAO", "B: Uniswap"],
    "correct": "B: Uniswap"
  },
  {
    "question": "What is whale in crypto?",
    "options": ["A: Small trader", "B: Large holder"],
    "correct": "B: Large holder"
  },
  {
    "question": "What is FUD?",
    "options": ["A: Fast Unstake Decision", "B: Fear, Uncertainty, Doubt"],
    "correct": "B: Fear, Uncertainty, Doubt"
  },
  {
    "question": "Which coin was created by Charlie Lee?",
    "options": ["A: Dogecoin", "B: Litecoin"],
    "correct": "B: Litecoin"
  },
  {
    "question": "What is minting in crypto?",
    "options": ["A: Creating new tokens", "B: Burning tokens"],
    "correct": "A: Creating new tokens"
  },



  {
    "question": "Which platform supports zkSync?",
    "options": ["A: Solana", "B: Ethereum"],
    "correct": "B: Ethereum"
  },
  {
    "question": "Which app is used for crypto tips?",
    "options": ["A: Farcaster", "B: Excel"],
    "correct": "A: Farcaster"
  },
  {
    "question": "Which crypto is used on Base chain?",
    "options": ["A: ETH", "B: SOL"],
    "correct": "A: ETH"
  },
  {
    "question": "What does GM mean in crypto slang?",
    "options": ["A: Good Morning", "B: Great Market"],
    "correct": "A: Good Morning"
  },
  {
    "question": "Which blockchain is known for low gas fees?",
    "options": ["A: Ethereum", "B: Polygon"],
    "correct": "B: Polygon"
  },
  {
    "question": "Which token fuels the Fantom network?",
    "options": ["A: FTX", "B: FTM"],
    "correct": "B: FTM"
  },
  {
    "question": "Which platform is known for airdrops?",
    "options": ["A: Arbitrum", "B: Ripple"],
    "correct": "A: Arbitrum"
  },
  {
    "question": "Which crypto is a fork of Ethereum?",
    "options": ["A: Solana", "B: Ethereum Classic"],
    "correct": "B: Ethereum Classic"
  },
  {
    "question": "Which token is used on zkSync?",
    "options": ["A: ETH", "B: BTC"],
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
    scoreDiv.textContent = `Your Final score: ${score}/20`;
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
