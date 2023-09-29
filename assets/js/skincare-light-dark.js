const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');


try {
toggle.addEventListener('click', function() {
  var skincareDay = document.getElementById('skincare-day');
  this.classList.toggle('bi-moon');
  if(this.classList.toggle('bi-brightness-high-fill')) {
    body.style.background = 'white';
    body.style.color = 'black';
    body.style.transition = '1s';
    skincareDay.src= '/student/images/skincare-day.jpg';
  }else {
    body.style.background = 'black';
    body.style.color = 'white';
    body.style.transition = '1s';
    skincareDay.src= '/student/images/skincare-night.jpg';
  }
  change_text(document.getElementById('day-routine').innerHTML);
  saveData();
  showMode();

  //change_text('Day Routine');
})
} catch(exceptions) {
  console.log(exceptions)
}

function change_text(dayNight) {
  //var dayNight = document.getElementById('day-routine').innerHTML;
  // if day routine says specific text, change to other routine
  if(dayNight == "Day Routine") {
    document.getElementById('day-routine').innerHTML = "Night Routine";
  } else {
    document.getElementById('day-routine').innerHTML = "Day Routine";
  }
} 

// function to save data for color 
function saveData() {
  localStorage.setItem("color-mode", body.style.background);
}

// get list data from HTML
function showMode() {
  var colorMode = (localStorage.getItem("color-mode"));

    // if day routine says specific text, change to other routine
    if(colorMode == "black") {
      document.getElementById('day-routine').innerHTML = "Night Routine";
    } else {
      document.getElementById('day-routine').innerHTML = "Day Routine";
    }
}
showMode();

