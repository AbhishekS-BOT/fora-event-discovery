# Fora — Event discovery, with a point of view

Fora is a responsive event discovery and registration experience built as a polished event-tech startup concept. It helps people find thoughtful local experiences across technology, music, sports, business, education, and entertainment.

## Features

- Premium dark interface with a persistent dark/light mode switch.
- Responsive navigation, full-screen inspired hero, featured event countdown, platform stats, about, benefits, testimonial, newsletter, contact, and footer sections.
- Twelve realistic event listings with descriptions, images, dates, venue details, prices, and capacity information.
- Live keyword search across event names, categories, cities, venues, and descriptions.
- One-click category filters and useful empty results state.
- Event detail dialog with event information and a registration call to action.
- Registration form with name, email, and phone validation.
- Successful registrations persist in browser Local Storage under `fora-registrations`.
- Saved event favorites persist under `fora-favorites`; theme preference under `fora-theme`; newsletter signups under `fora-newsletter`.
- Scroll reveal, image zoom, keyboard search shortcut (`Ctrl/⌘ + K`), reduced-motion support, and mobile menu.

## Tech stack

- HTML5
- CSS3 (custom properties, Grid, Flexbox, responsive breakpoints, reduced-motion support)
- Vanilla JavaScript (modular functions and event data)

No build step or package installation is required. Event and registration content is demo data; registrations and saved preferences live in the current browser only. This front-end project does not send registrations to a server or issue real tickets.

## Run locally

Open `index.html` in a modern browser, or serve the folder with any static file server. For example, with Python installed:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deploy

This is a static site and can be deployed directly without a build command.

### Netlify

1. Push this project to a GitHub repository.
2. In Netlify, choose **Add new site → Import an existing project** and connect the repository.
3. Leave the build command blank and set the publish directory to the project root (`.`).
4. Deploy and copy the live URL for submission.

### Vercel

1. Push this project to a GitHub repository.
2. Import the repository into Vercel.
3. Select **Other** as the framework preset, leave the build command blank, and use `.` as the output directory.
4. Deploy and copy the live URL for submission.

### GitHub Pages

1. Push the project to GitHub.
2. In repository **Settings → Pages**, select **Deploy from a branch**.
3. Choose the default branch and `/ (root)`, then save.
4. Wait for the published URL and open it to confirm the deployment.

## GitHub setup

From this project directory, initialize and push the repository:

```bash
git init
git add .
git commit -m "Build Fora event discovery website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/fora-event-discovery.git
git push -u origin main
```

Replace `YOUR-USERNAME` with your GitHub username and create the empty repository on GitHub first.

## Image and font sources

Event photography is loaded from Unsplash image URLs and fonts from Google Fonts. A network connection is needed for those remote assets; the interface remains usable if they are unavailable.

## Project structure

```text
event-management-website/
├── index.html
├── styles.css
├── script.js
└── README.md
```

