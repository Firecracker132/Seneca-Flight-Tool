# Seneca Flight Planner v1.38

This folder is ready to publish as a static website with GitHub Pages.

## GitHub Pages
1. Create a GitHub repository, for example `seneca-flight-planner`.
2. Upload the **contents of this folder** to the repository root. Do not upload the `github-pages` folder itself as a nested folder.
3. In GitHub, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch and `/ (root)`, then save.
6. GitHub will provide the public site address. Open that address on your phone or computer.

## Install on phone
On iPhone/Safari, open the site and use **Share → Add to Home Screen**.
On Android/Chrome, open the site and use **Add to Home screen** or the browser's install option when offered.

The app stores flight data locally in the browser. Sharing the website does not share another person's saved flight data.

## Updating later
Replace the repository files with the newer build. When updating the service worker cache version, increment the cache name in `sw.js` so browsers pick up the new assets.

## Aviation note
This is a planning aid. Performance outputs that are identified as digitized estimates are not substitutes for the applicable aircraft POH. Verify operational calculations against the applicable aircraft documentation.
