# ulster-university-client-side-development-coursework
Client-Side Development Coursework
A responsive, interactive website created for the Ulster University Client-Side Development module.
This project demonstrates practical use of HTML, CSS, and JavaScript to build a modern interface with persistent user preferences such as theme selection and cookie consent.

📌 Features
🌗 Light/Dark Theme Toggle
Users can switch between light and dark modes.

Theme preference is saved using localStorage.

CSS variables dynamically update the UI based on the selected theme.

🍪 Cookie Consent Banner
Displays on first visit.

Once accepted, the banner is hidden permanently (until storage is cleared).

Consent is stored using localStorage.

🎨 Modern, Responsive UI
Clean layout using CSS variables.

Smooth hover animations on navigation links and cards.

Mobile‑friendly design with simplified navigation on smaller screens.

📁 Project Structure
Code
/
├── index.html        # Main HTML structure
├── script.js         # Theme toggle + cookie banner logic
├── style.css         # Styling, themes, layout, animations
└── README.md         # Documentation

🧠 JavaScript Overview
Theme Handling
Loads saved theme on page load.

Updates DOM attributes and toggle icon.

Saves user preference:

js
localStorage.setItem('theme', 'dark');
Cookie Banner Logic
Checks if cookies were previously accepted.

Shows or hides banner accordingly.

Saves acceptance:

js
localStorage.setItem('cookiesAccepted', 'true');
🚀 Getting Started
Download or clone the repository.

Open index.html in any modern browser.

Test the theme toggle and cookie banner.

Refresh the page to see persistent settings.

No installation or dependencies required.

🛠 Technologies Used
HTML5

CSS3 (variables, transitions, responsive design)

JavaScript (ES6)

👥 Contributors
This project was completed as part of a group assignment for Ulster University.
