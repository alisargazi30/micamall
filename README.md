# Mica Mall Sliders

A bilingual slider showcase for retail landing pages, built with plain HTML, CSS, and JavaScript.

## Overview

This project contains a main showcase page and multiple standalone slider pages:

- Nimany Kish
- K Beauty
- Golden Consept
- JBL
- Kiko
- Golden Rose

All slider cards on the main page are generated dynamically from one JavaScript config file.

## Key Features

- Bilingual UI: Persian (RTL) and English (LTR)
- Dynamic slider card rendering from config data
- No framework dependency (Vanilla HTML/CSS/JS)
- Responsive layout for mobile and desktop
- Reusable structure for adding new sliders quickly

## Project Structure

```text
micamall/
  index.html
  css/
    style.css
  js/
    app.js
    sliders-config.js
  pages/
    nimanykish/
    kbeauty/
    goldenconsept/
    jbl/
    kiko/
    goldenrose/
```

## Where To Edit

For adding, editing, or removing slider cards, update:

- js/sliders-config.js

Main logic and page behavior:

- js/app.js

Global styles:

- css/style.css

## Run Locally

Option 1:
- Open index.html directly in your browser.

Option 2:
- Use VS Code Live Server extension.

## Git Workflow (Simple)

After each change:

```bash
git add .
git commit -m "your change summary"
git push
```

## Tech Stack

- HTML5
- CSS3
- JavaScript (ES6+)
- Font Awesome
- Vazirmatn font

## License

MIT. See LICENSE for details.

## Author

Alireza Sargazi
