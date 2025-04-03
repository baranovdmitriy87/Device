const slider1 = document.getElementById('slider-1');
const slider2 = document.getElementById('slider-2');
const value1 = document.getElementById('value-1');
const value2 = document.getElementById('value-2');
const track = document.getElementById('track');

// Инициализация положения полосы между бегунками
const initInputSliderRange = () => {

  slider1.addEventListener('input', function () {
    if (parseInt(slider1.value) > parseInt(slider2.value)) {
      slider1.value = slider2.value;
    }
    value1.textContent = slider1.value;
    updateTrack();
  });

  slider2.addEventListener('input', function () {
    if (parseInt(slider2.value) < parseInt(slider1.value)) {
      slider2.value = slider1.value;
    }
    value2.textContent = slider2.value;
    updateTrack();
  });
}

initInputSliderRange ();

const updateTrack = () => {
  const minVal = parseInt(slider1.value);
  const maxVal = parseInt(slider2.value);
  const minPos = (minVal / slider1.max) * 100;
  const maxPos = (maxVal / slider2.max) * 100;

  track.style.left = minPos + '%';
  track.style.width = (maxPos - minPos) + '%';
}

updateTrack();
