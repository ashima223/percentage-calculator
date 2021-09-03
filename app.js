const btn = document.getElementById('btn')

// Function
const calculate = () => {
  let aem = document.getElementById('aem').value
  let dsa = document.getElementById('dsa').value
  let mef = document.getElementById('mef').value
  let se = document.getElementById('se').value
  let oop = document.getElementById('oop').value

  let obtainedMarks = parseFloat(aem) + parseFloat(dsa) + parseFloat(mef) + parseFloat(se) + parseFloat(oop);
  alert(`You have scored ${obtainedMarks} marks`);

  let percentage = (obtainedMarks / 500) * 100

  let grade = ''

  if (percentage <= 100 && percentage >= 80) {
    grade = 'A'
  } else if (percentage <= 79 && percentage >= 60) {
    grade = 'B'
  } else if (percentage <= 59 && percentage >= 40) {
    grade = 'C'
  } else if (percentage <= 39 && percentage >= 33) {
    grade = 'D'
  } else {
    grade = 'F'
  }

  if (percentage >= 33) {
    let showResult = document.getElementById('showResult')
    showResult.innerHTML = `You have obtained ${obtainedMarks} Marks out of 500 Marks with ${percentage}% <br>and ${grade} Grade.You Are Pass.`
  } else {
    let showResult = document.getElementById('showResult')
    showResult.innerHTML = `You have obtained ${obtainedMarks} Marks out of 500 Marks with ${percentage}% <br>and ${grade} Grade.You Are Fail.`
  }
}

// Event Listener
btn.addEventListener('click', calculate)