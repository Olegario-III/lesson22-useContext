## Offline Web App with Local Storage (IndexedDB + Installable PWA)

A complete, zero-server web app that saves data **directly inside your device** using IndexedDB. Works 100% offline, can be installed to home screen, and feels like a native app.

## Features
- Saves notes, photos, files locally (no backend)
- Fully offline with Service Worker
- Installable as a PWA ("Add to Home Screen")
- Works on phone & desktop
- No build tools needed — just open `index.html`

## Live Demo
Try it now: https://offline-notes.tiiny.site *(example link — replace with yours)*

## How to Use (30 seconds)

1. Download the three files below
2. Put them in one folder
3. Double-click `index.html`
4. Type → Save → Close tab → Reopen → Load  
   Your data is still there!

## Files (copy all 3)

### `index.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>My Offline App</title>
  <link rel="manifest" href="data:application/manifest+json,{
    \"name\":\"My Offline App\",
    \"short_name\":\"OfflineApp\",
    \"start_url\":\".\",
    \"display\":\"standalone\",
    \"background_color\":\"#ffffff\",
    \"theme_color\":\"#0066ff\"
  }">
  <style>
    body{font-family:system-ui,sans-serif;padding:2rem;background:#f0f0f0;}
    textarea{width:100%;max-width:500px;font-size:1rem;}
    button{padding:0.8rem 1.2rem;margin:0.5rem;font-size:1rem;}
    #install{margin-top:2rem;background:#0066ff;color:white;border:none;border-radius:8px;}
  </style>
</head>
<body>
  <h1>My Offline Notes</h1>
  <textarea id="note" placeholder="Write anything… works offline!" rows="8"></
