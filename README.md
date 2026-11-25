# MCA PBL – Network Intrusion Detection (Sec D)

Static web interface for UNSW-NB15 traffic classification (Normal vs Malicious).

## Run
Unzip and open `index.html` in any browser. No build step needed.

## Files
- `index.html` – page
- `style.css` – styling (light/dark)
- `script.js` – demo prediction rules

## Note
Predictions are illustrative rule-based demos, not trained-model outputs. To connect a real model, save it with joblib, serve via Flask/FastAPI, and call it from `script.js`.
