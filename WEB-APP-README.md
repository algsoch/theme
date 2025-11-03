# 🚀 Modal Masters Web Application

A FastAPI web server that serves all 4 modal themes through an elegant landing page.

## Quick Start

### Option 1: Using the Startup Script (Recommended)
```bash
cd /Users/viclkykumar/NSUT/modal-masters
./start.sh
```

### Option 2: Manual Start
```bash
cd /Users/viclkykumar/NSUT/modal-masters
source /Users/viclkykumar/NSUT/.venv/bin/activate
python -m uvicorn app:app --reload --host 0.0.0.0 --port 8000
```

### Option 3: Direct Python
```bash
cd /Users/viclkykumar/NSUT/modal-masters
/Users/viclkykumar/NSUT/.venv/bin/python app.py
```

## Access the Application

Once started, open your browser and visit:

**🌐 Main Landing Page:** http://localhost:8000

From there, you can click any theme card to explore:
- 🏛️ Indian Architecture: http://localhost:8000/themes/indian-architecture/index.html
- 🌸 Nature: http://localhost:8000/themes/nature/index.html
- 🚀 Space: http://localhost:8000/themes/space/index.html
- ⚡ Mythology: http://localhost:8000/themes/mythology/index.html

## Features

✨ **Beautiful Landing Page** with animated theme cards
🎨 **4 Complete Themes** accessible with one click
🚀 **Live Reload** enabled for development
📱 **Fully Responsive** design
⚡ **Fast Performance** with FastAPI

## API Endpoints

- `GET /` - Landing page with theme selector
- `GET /themes/{theme-name}/index.html` - Individual theme pages
- `GET /health` - Health check endpoint

## Technology Stack

- **Backend:** FastAPI (Python)
- **Server:** Uvicorn (ASGI server)
- **Frontend:** Pure HTML/CSS/JavaScript (no build step)
- **Environment:** Python Virtual Environment

## Project Structure

```
modal-masters/
├── app.py              # FastAPI application
├── requirements.txt    # Python dependencies
├── start.sh           # Startup script
├── round1-base/       # Theme files (served as static)
│   ├── indian-architecture/
│   ├── nature/
│   ├── space/
│   └── mythology/
└── WEB-APP-README.md  # This file
```

## Development

The server runs with `--reload` flag, so any changes to `app.py` will automatically restart the server.

To modify themes, edit files in `round1-base/` and refresh your browser.

## Stopping the Server

Press `CTRL + C` in the terminal where the server is running.

## Troubleshooting

**Port already in use?**
```bash
# Find process using port 8000
lsof -i :8000

# Kill it
kill -9 <PID>
```

**Virtual environment issues?**
```bash
# Recreate virtual environment
cd /Users/viclkykumar/NSUT
rm -rf .venv
python3 -m venv .venv
source .venv/bin/activate
pip install -r modal-masters/requirements.txt
```

## Production Deployment

For production, remove `--reload` and use a production-grade server setup:

```bash
uvicorn app:app --host 0.0.0.0 --port 8000 --workers 4
```

---

**Built with ❤️ for Modal Masters Challenge 2025**
