let score = 0;
const rewardInterval = 5;
const rewardMessages = [
  "🥳 You earned a Bronze Badge!",
  "🎉 Silver Badge Achieved!",
  "🏆 Gold Badge Unlocked!",
  "👑 Ultimate Habit Master!"
];
const buttonPhrases = [
  "Keep clicking me 🤭",
  "You're doing a good job 💪",
  "Almost there... 🫣",
  "Finally done! 🥵"
];
let rewardLevel = 0;
let imageIndex = 0;

let imageSource = document.getElementById("img");
let clickBtn = document.getElementById("clickBtn");
let imageArray = [
  './side-eye.jpg',
  './meme2.jpg',
  './meme3.jpg',
  './meme4.jpg',
  './meme5.jpg'
];

function clickButton() {
  score++;
  document.getElementById("score").textContent = "Score: " + score;

  const feedback = document.getElementById("feedback");
  const rewards = document.getElementById("rewards");

  // Animate button
  clickBtn.classList.add("pulse");
  setTimeout(() => clickBtn.classList.remove("pulse"), 300);

  // Change button text
  if (score < 10) {
    clickBtn.textContent = buttonPhrases[0];
  } else if (score < 20) {
    clickBtn.textContent = buttonPhrases[1];
  } else if (score < 30) {
    clickBtn.textContent = buttonPhrases[2];
  } else {
    clickBtn.textContent = buttonPhrases[3];
  }

  // Meme zone
  if (score >= 30 && score % rewardInterval === 0 && imageIndex < imageArray.length) {
    imageSource.src = imageArray[imageIndex];
    imageIndex++;
    rewards.textContent = "";
    feedback.textContent = "😏 You're in the bonus meme zone!";
  }
  else if (score % rewardInterval === 0) {
    if (rewardLevel < rewardMessages.length) {
      rewards.textContent = rewardMessages[rewardLevel];
      rewardLevel++;
    } else {
      rewards.textContent = "🎯 Keep the streak going!";
    }
    feedback.textContent = "🎉 You've hit a reward point!";
  } else {
    feedback.textContent = "Keep going... you're close to the next reward!";
  }

  console.log(`User clicked button. Current score: ${score}`);
}

console.log("Clicker reward game with animation and button phrases loaded");
