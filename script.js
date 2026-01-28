// Elements
const questionScreen = document.getElementById('question-screen');
const successScreen = document.getElementById('success-screen');
const calendarScreen = document.getElementById('calendar-screen');
const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const showPlansBtn = document.getElementById('show-plans-btn');
const googleCalendarBtn = document.getElementById('google-calendar-btn');
const appleCalendarBtn = document.getElementById('apple-calendar-btn');

// No button responses
const noResponses = [
    "wtf",
    "hello?",
    "do u hate me? 🥺",
    "u want me to kms?",
    "ok dude",
    "stop",
    "ok u have to say yes no",
];

let noClickCount = 0;
let yesBtnSize = 1;

// Yes button click
yesBtn.addEventListener('click', () => {
    questionScreen.classList.remove('active');
    successScreen.classList.add('active');
    createConfetti();
});

// No button click
noBtn.addEventListener('click', () => {
    noClickCount++;
    
    // Change the text
    if (noClickCount < noResponses.length) {
        noBtn.textContent = noResponses[noClickCount];
    } else {
        noBtn.textContent = noResponses[noResponses.length - 1];
    }
    
    // Make Yes button bigger - keep growing indefinitely
    yesBtnSize += 0.4;
    yesBtn.style.transform = `scale(${yesBtnSize})`;
    yesBtn.style.zIndex = '10';
    
    // Make No button smaller and harder to click
    const newSize = Math.max(0.3, 1 - (noClickCount * 0.15));
    noBtn.style.transform = `scale(${newSize})`;
    
    // Update shake animation with current size
    const shakeStyle = document.getElementById('shake-animation-style');
    if (shakeStyle) {
        shakeStyle.remove();
    }
    
    const newShakeStyle = document.createElement('style');
    newShakeStyle.id = 'shake-animation-style';
    newShakeStyle.textContent = `
        @keyframes shake {
            0%, 100% { transform: translateX(0) scale(${newSize}); }
            25% { transform: translateX(-10px) scale(${newSize}); }
            75% { transform: translateX(10px) scale(${newSize}); }
        }
    `;
    document.head.appendChild(newShakeStyle);
    
    // Add a little shake to the No button
    noBtn.style.animation = 'none';
    setTimeout(() => {
        noBtn.style.animation = 'shake 0.5s';
    }, 10);
});

// Show plans button
showPlansBtn.addEventListener('click', () => {
    successScreen.classList.remove('active');
    calendarScreen.classList.add('active');
});

// Confetti creation
function createConfetti() {
    const confettiContainer = document.getElementById('confetti-container');
    const colors = ['#b794f6', '#9575cd', '#e6d5f0', '#ff69b4', '#ffd1dc'];
    
    for (let i = 0; i < 100; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.classList.add('confetti');
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.animationDelay = Math.random() * 3 + 's';
            confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
            confettiContainer.appendChild(confetti);
            
            setTimeout(() => {
                confetti.remove();
            }, 5000);
        }, i * 30);
    }
}

// Define all Valentine's Day events
const valentineEvents = [
    {
        title: "Wake Up ☀️",
        start: "20250214T063000", // 6:30 AM
        end: "20250214T073000",   // 7:30 AM
        location: "Home",
        description: "Rise and shine, it's Valentine's Day! ☀️"
    },
    {
        title: "Drive to Snoqualmie Summit 🚗",
        start: "20250214T073000", // 7:30 AM
        end: "20250214T084500",   // 8:45 AM
        location: "Snoqualmie Summit",
        description: "Road trip to the mountains! 🚗"
    },
    {
        title: "Fireball Shot 🔥",
        start: "20250214T084500", // 8:45 AM
        end: "20250214T090000",   // 9:00 AM
        location: "Snoqualmie Summit",
        description: "A spicy start to the day! 🔥"
    },
    {
        title: "Snowboard 🏂",
        start: "20250214T090000", // 9:00 AM
        end: "20250214T120000",   // 12:00 PM
        location: "Snoqualmie Summit",
        description: "Hit the slopes together! 🏂"
    },
    {
        title: "Lunch 🍔",
        start: "20250214T120000", // 12:00 PM
        end: "20250214T130000",   // 1:00 PM
        location: "Snoqualmie Summit",
        description: "Refuel with a tasty lunch. 🍔"
    },
    {
        title: "Snowboard Again 🏂",
        start: "20250214T130000", // 1:00 PM
        end: "20250214T163000",   // 4:30 PM
        location: "Snoqualmie Summit",
        description: "Back to the slopes for more fun! 🏂"
    },
    {
        title: "Drive Home 🏠",
        start: "20250214T163000", // 4:30 PM
        end: "20250214T180000",   // 6:00 PM
        location: "Home",
        description: "Head home after an epic day. 🏠"
    },
    {
        title: "Taco Bell 🌮",
        start: "20250214T180000", // 6:00 PM
        end: "20250214T193000",   // 7:30 PM
        location: "Taco Bell",
        description: "Taco Bell dinner date! 🌮"
    },
    {
        title: "Watch Movie 🎬",
        start: "20250214T193000", // 7:30 PM
        end: "20250214T220000",   // 10:00 PM (arbitrary end time)
        location: "Home",
        description: "Cozy up and watch a movie together. 🎬"
    }
];

// Google Calendar export - opens multiple tabs for each event
googleCalendarBtn.addEventListener('click', () => {
    valentineEvents.forEach((event, index) => {
        setTimeout(() => {
            const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&dates=${event.start}/${event.end}&details=${encodeURIComponent(event.description)}&location=${encodeURIComponent(event.location)}`;
            window.open(googleCalendarUrl, '_blank');
        }, index * 500); // Stagger by 500ms to avoid popup blocker
    });
    
    alert(`Opening ${valentineEvents.length} calendar events! Please allow popups if prompted. 💜`);
});

// Apple Calendar (iCal) export - creates one .ics file with all events
appleCalendarBtn.addEventListener('click', () => {
    let icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Valentine's Day 2025//EN
CALSCALE:GREGORIAN
METHOD:PUBLISH
X-WR-CALNAME:Valentine's Day 2025
X-WR-TIMEZONE:America/Los_Angeles
`;

    valentineEvents.forEach((event, index) => {
        icsContent += `
BEGIN:VEVENT
UID:valentine-2025-event-${index}@yourdomain.com
DTSTART:${event.start}
DTEND:${event.end}
SUMMARY:${event.title}
DESCRIPTION:${event.description}
LOCATION:${event.location}
STATUS:CONFIRMED
SEQUENCE:0
BEGIN:VALARM
TRIGGER:-PT30M
ACTION:DISPLAY
DESCRIPTION:${event.title} starts in 30 minutes!
END:VALARM
END:VEVENT
`;
    });

    icsContent += `END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = 'valentines-day-2025.ics';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
