const question = document.getElementById("question");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const noMessages = [
  "Are you sure? 🥲",
  "Ek baar or soch lo? 🥺",
  "Please don't say NO 💔",
  "Plssssssssssss 😭",
  "5 ruppee wala kurkura bhi khilaunga? 😋",
  "Tang bhi nhi karunga 👎",
  "Gussa bhi nhi dilaunga 🤐",
  "Gift bhi dunga? 🎁",
  "Plsss na yrr?",
   "Mujh jaisa nhi milega? 😎",
  "Plsss na betu? 🥺",
  "Tushar k chakkar me reject krri ho 😭",
  "Nhi maanogi? 😠",
  "I am going to die 😔",
  "Maarna chahti ho? 🤨",
  "Plsss na yrr? 😭",
  "Shayari try Krli jaaye? tap no...😄",
  "Kaash tu chaand or m sitaara hota, aasman me aashiyana hamara hota,... log dekhte tujhe dur se, pass se dekhna ka hak sirf hamara hota😭...",
  "Ek or ho jaaye? 😁",
  "Tum jitna to koi mujhe khaas nhi, fir bhi q tumhe vishwas nhi,... mujhse behtar ladka to mil jayega, lekin meri maa se behtar koi saas nhi...",
  "Ab maan bhi jao?",
  "Ab to maanna hi padega 😁...",
];

let clickCount = 0;

yesBtn.addEventListener("click", () => {
  question.innerText = "Mummy bahu mil gyi 😭, mtlb ab yes kr hi diya h to ek voice note to banta h na? 🥺";
});

noBtn.addEventListener("click", () => {
  if (clickCount < noMessages.length) {
    question.innerText = noMessages[clickCount];
    clickCount++;
  } else {
    moveNoButton();
  }
});

function moveNoButton() {
  const container = document.querySelector(".container");
  const containerRect = container.getBoundingClientRect();

  const btnWidth = noBtn.offsetWidth;
  const btnHeight = noBtn.offsetHeight;

  const maxX = containerRect.width - btnWidth;
  const maxY = containerRect.height - btnHeight;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.position = "absolute";
  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
}
