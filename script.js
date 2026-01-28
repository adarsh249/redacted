/*************************
 * Screen Elements
 *************************/
const questionScreen = document.getElementById("question-screen");
const successScreen = document.getElementById("success-screen");
const calendarScreen = document.getElementById("calendar-screen");

const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn");
const showPlansBtn = document.getElementById("show-plans-btn");
const googleCalendarBtn = document.getElementById("google-calendar-btn");
const appleCalendarBtn = document.getElementById("apple-calendar-btn");

/*************************
 * No Button Chaos Logic
 *************************/
const noResponses = [
  "wtf",
  "hello?",
  "do u hate me? 🥺",
  "u want me to kms?",
  "ok dude",
  "stop",
  "ok u have to say yes now",
];

let noClickCount = 0;
let yesScale = 1;

noBtn.addEventListener("click", () => {
  noClickCount++;

  // Update No button text
  noBtn.textContent =
    noResponses[Math.min(noClickCount, noResponses.length - 1)];

  // Grow Yes button forever
  yesScale += 0.4;
  yesBtn.style.transform = `scale(${yesScale})`;
  yesBtn.style.zIndex = "10";

  // Shrink No button
  const noScale = Math.max(0.3, 1 - noClickCount * 0.15);
  noBtn.style.transform = `scale(${noScale})`;

  // Shake animation reset
  noBtn.classList.remove("shake");
  void noBtn.offsetWidth; // force reflow
  noBtn.classList.add("shake");
});

/*************************
 * Yes Button
 *************************/
yesBtn.addEventListener("click", () => {
  questionScreen.classList.remove("active");
  successScreen.classList.add("active");
  launchConfetti();
});

/*************************
 * Navigation
 *************************/
showPlansBtn.addEventListener("click", () => {
  successScreen.classList.remove("active");
  calendarScreen.classList.add("active");
});

/*************************
 * Confetti
 *************************/
function launchConfetti() {
  const container = document.getElementById("confetti-container");
  const colors = ["#b794f6", "#9575cd", "#e6d5f0", "#ff69b4", "#ffd1dc"];

  for (let i = 0; i < 100; i++) {
    setTimeout(() => {
      const confetti = document.createElement("div");
      confetti.className = "confetti";
      confetti.style.left = `${Math.random() * 100}%`;
      confetti.style.backgroundColor =
        colors[Math.floor(Math.random() * colors.length)];
      confetti.style.animationDuration = `${Math.random() * 2 + 2}s`;

      container.appendChild(confetti);
      setTimeout(() => confetti.remove(), 5000);
    }, i * 25);
  }
}

/*************************
 * Valentine's Day Events
 *************************/
const TIMEZONE = "America/Los_Angeles";

const valentineEvents = [
  { title: "Wake Up ☀️", start: "20260214T063000", end: "20260214T073000", location: "Home", description: "Rise and shine 💜" },
  { title: "Drive to Snoqualmie Summit 🚗", start: "20260214T073000", end: "20260214T084500", location: "Snoqualmie Summit", description: "Mountain road trip 🏔️" },
  { title: "Fireball Shot 🔥", start: "20260214T084500", end: "20260214T090000", location: "Snoqualmie Summit", description: "Spicy decisions only" },
  { title: "Snowboard 🏂", start: "20260214T090000", end: "20260214T120000", location: "Snoqualmie Summit", description: "Hit the slopes" },
  { title: "Lunch 🍔", start: "20260214T120000", end: "20260214T130000", location: "Snoqualmie Summit", description: "Fuel break" },
  { title: "Snowboard Again 🏂", start: "20260214T130000", end: "20260214T163000", location: "Snoqualmie Summit", description: "More shredding" },
  { title: "Drive Home 🏠", start: "20260214T163000", end: "20260214T180000", location: "Home", description: "Post-slope chill" },
  { title: "Taco Bell 🌮", start: "20260214T180000", end: "20260214T193000", location: "Taco Bell", description: "Romantic dining" },
  { title: "Watch Movie 🎬", start: "20260214T193000", end: "20260214T220000", location: "Home", description: "Cuddle time" },
];

/*************************
 * Google Calendar Export
 *************************/
googleCalendarBtn.addEventListener("click", () => {
  valentineEvents.forEach((event, i) => {
    setTimeout(() => {
      const url =
        "https://calendar.google.com/calendar/render?action=TEMPLATE" +
        `&text=${encodeURIComponent(event.title)}` +
        `&dates=${event.start}/${event.end}` +
        `&details=${encodeURIComponent(event.description)}` +
        `&location=${encodeURIComponent(event.location)}`;

      window.open(url, "_blank");
    }, i * 400);
  });

  alert("Opening calendar events 💜 Allow popups if prompted!");
});

/*************************
 * Apple Calendar (.ics)
 *************************/
appleCalendarBtn.addEventListener("click", () => {
  let ics = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Valentine's Day 2026//EN
CALSCALE:GREGORIAN
METHOD:PUBLISH
X-WR-CALNAME:Valentine's Day 2026
`;

  valentineEvents.forEach((event, i) => {
    ics += `BEGIN:VEVENT
UID:valentine-2026-${i}@valentine.app
DTSTART;TZID=${TIMEZONE}:${event.start}
DTEND;TZID=${TIMEZONE}:${event.end}
SUMMARY:${event.title}
DESCRIPTION:${event.description}
LOCATION:${event.location}
STATUS:CONFIRMED
BEGIN:VALARM
TRIGGER:-PT30M
ACTION:DISPLAY
DESCRIPTION:${event.title} starts soon 💜
END:VALARM
END:VEVENT
`;
  });

  ics += "END:VCALENDAR";

  const blob = new Blob([ics], { type: "text/calendar;charset=utf-8" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "valentines-day-2026.ics";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});
