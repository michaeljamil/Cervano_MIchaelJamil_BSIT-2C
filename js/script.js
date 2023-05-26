let circularProgressList = document.querySelectorAll(".circular-progress");
let progressValueList = document.querySelectorAll(".progress-value");

let progressStartValues = [0, 0, 0, 0, 0];
let progressEndValues = [50, 40, 30, 20, 5];
let speed = 100;

let progress = setInterval(() => {
  let allCompleted = true;

  for (let i = 0; i < circularProgressList.length; i++) {
    if (progressStartValues[i] < progressEndValues[i]) {
      progressStartValues[i]++;
      progressValueList[i].textContent = `${progressStartValues[i]}%`;
      circularProgressList[i].style.background = `conic-gradient(#c3c3c3 ${progressStartValues[i] * 3.6}deg, #383838 0deg)`;
      allCompleted = false;
    }
  }

  if (allCompleted) {
    clearInterval(progress);
  }

  console.log(progressStartValues);
}, speed);