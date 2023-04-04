const time = document.getElementById("clock");

//time
const updateTime = () => { 
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const ampm = hours >= 12 ? 'pm' : 'am';
  const timeString = `${hours}:${minutes} ${ampm}`;
  document.getElementById("clock").textContent = timeString;
};