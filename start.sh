#!/bin/bash

# Modal Masters - Startup Script
# This script activates the virtual environment and starts the FastAPI server

echo "🚀 Starting Modal Masters Server..."
echo ""

# Activate virtual environment
source /Users/viclkykumar/NSUT/.venv/bin/activate

# Start the FastAPI server
echo "✨ Server starting at http://localhost:8000"
echo "📱 Press CTRL+C to stop the server"
echo ""

/Users/viclkykumar/NSUT/.venv/bin/python -m uvicorn app:app --reload --host 0.0.0.0 --port 8000
