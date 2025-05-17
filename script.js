let score = 0;
const rewardInterval = 5;
const rewardMessages = [
  "🥳 You earned a Bronze Badge!",
  "🎉 Silver Badge Achieved!",
  "🏆 Gold Badge Unlocked!",
  "👑 Ultimate Habit Master!"
];
let rewardLevel = 0;
let imageIndex = 0;

let imageSource = document.getElementById("img");
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

  // Show an image every 5 points after reaching 30
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
  } 
  else {
    feedback.textContent = "Keep going... you're close to the next reward!";
  }

  console.log(`User clicked button. Current score: ${score}`);
}
