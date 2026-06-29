# RCCG Revival Center Texas

Static React site for RCCG Revival Center Texas, hosted as a simple browser-rendered app using React, ReactDOM, and Babel from CDN.

## Project Structure

- `index.html` - HTML shell, SEO metadata, CDN scripts, and app mount point.
- `css/style.css` - Extracted site styles.
- `js/main.js` - React components, routing, contact form logic, and page data.
- `vercel.json` - Rewrites all routes to `index.html` so shareable app URLs work on Vercel.

## Local Preview

Open `index.html` in a browser or use VS Code Live Server for a quick local preview. Local previews on `file://`, `localhost`, and `127.0.0.1` use hash routes automatically, such as `/#/sermons`, so refresh works locally. The deployed Vercel site uses clean paths like `/sermons`, `/give`, and `/contact/prayer`.

## Deployment

Push this folder to GitHub and import the repository into Vercel. No build command is required because this is a static site.

## Assets

Image assets remain in the project root, so paths such as `./logo-dark.png`, `./logo-white.png`, and `./pastor-samuel-profile.png` should continue to work.
