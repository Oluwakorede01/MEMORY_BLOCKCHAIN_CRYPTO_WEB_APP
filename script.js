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
      "What does cryptocurrency use to verify and maintain records of transactions?",
    options: ["A:  wallet", "B: Cryptography"],
    correct: "B: Cryptography",
  },

  {
    question: "Where can cryptocurrency be stored?",
    options: ["A:  Wallet", "B: Exchange"],
    correct: "A:  Wallet",
  },

  {
    question: "What are the types of  cryptocurrency that exist?",
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
      "B: A platform for buying and selling cryptocurrencies",
    ],
    correct: "B: A platform for buying and selling cryptocurrencies",
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
      "B: The process of validating transactions and earning coins",
    ],
    correct: "B: The process of validating transactions and earning coins",
  },
  {
    question: "What does decentralized mean in crypto?",
    options: ["A:  It means Bullish", "B: it means there is no centralized authority"],
    correct: "B: it means there is no centralized authority",
  },

  {
    question: "What is Etherium?",
    options: [
      "A:  Etherium is a decentralized platform that enables smart contracts and decentralized applications",
      "B: Etherium is a decentralized program created for the solution of block chain network",
    ],
    correct: "A:  Etherium is a decentralized platform that enables smart contracts and decentralized applications",
  },


  {
    question: "What is a wallet in crypto?",
    options: [
      "A:  A crypto wallet is a space for buying and selling assets in the crypto space",
      "B: A crypto wallet is a digital tool that allows users to store and manage cryptocurrency",
    ],
    correct: "B: A crypto wallet is a digital tool that allows users to store and manage cryptocurrency",
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
    correct: "A:  A scam project that suddenly disappeared with funds",
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
    question: "Which token is primarily used on the Ethereum network to pay gas fees?",
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
      "B: Coin inspired by internet culture with little use case",
    ],
    correct:"B: Coin inspired by internet culture with little use case",
  },
  {
    question: "Which blockchain is know for very low fees and fast transactions?",
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
    question: "What consensus mechanism does Bitcoin use?",
    options: ["A: Proof of Work", "B: Proof of Stake"],
    correct: "A: Proof of Work",
  },

  { 
    question: "Which blockchain introduced smart contracts first?",
    options: ["A: Ethereum", "B: Bitcoin"],
    correct: "A: Ethereum",
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
    question: "What type of chart shows candlesticks in crypto trading?",
    options: ["A: Technical chart", "B: Line chart"],
    correct: "A: Technical chart",
  },


  { 
    question: "Which of the following is a Layer 1 blockchain?",
    options: ["A: Avalanche", "B: Arbitrum"],
    correct: "A: Avalanche",
  },


  { 
    question: "Which country made Bitcoin legal tender in 2021?",
    options: ["A: El Salvador", "B: Nigeria"],
    correct: "A: El Salvador",
  },
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

  if (currentQuestion >= quizData.length) {
    quiz.innerHTML = "<h2 style='color:white;'>Quiz completed!</h2>";
    scoreDiv.textContent = `Your score: ${score} / ${quizData.length}`;
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

// function showCorrectAnswer() {
//   const correct = quizData[currentQuestion].correct;
//   const allOptions = document.querySelectorAll(".option");
//   allOptions.forEach((opt) => {
//     opt.onClick = null;
//     if (opt.textContent === correct) {
//       opt.classList.add("correct");
//       if (!opt.textContent.includes("✅")) {
//         opt.textContent += "✅";
//       }
//     }
//     opt.onclick = null;
//   });
//   nextBtn.style.display = "inline-block";
// }

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
