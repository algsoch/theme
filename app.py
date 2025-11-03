from fastapi import FastAPI
from fastapi.responses import HTMLResponse, FileResponse
from fastapi.staticfiles import StaticFiles
import os

app = FastAPI(title="Modal Masters - Theme Selector")

# Mount the round1-base directory as static files
app.mount("/themes", StaticFiles(directory="round1-base"), name="themes")

@app.get("/", response_class=HTMLResponse)
async def home():
    """Main landing page with theme selector"""
    return """
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Modal Masters - Theme Selector</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 2rem;
        }
        
        .container {
            max-width: 1200px;
            width: 100%;
        }
        
        .header {
            text-align: center;
            margin-bottom: 3rem;
            color: white;
        }
        
        .header h1 {
            font-size: clamp(2rem, 5vw, 3.5rem);
            font-weight: 700;
            margin-bottom: 0.5rem;
            text-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
        }
        
        .header p {
            font-size: clamp(1rem, 2vw, 1.3rem);
            opacity: 0.95;
            font-weight: 300;
        }
        
        .theme-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 2rem;
            margin-bottom: 2rem;
        }
        
        .theme-card {
            background: white;
            border-radius: 20px;
            padding: 2rem;
            text-align: center;
            transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
            cursor: pointer;
            position: relative;
            overflow: hidden;
        }
        
        .theme-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1));
            opacity: 0;
            transition: opacity 0.4s ease;
        }
        
        .theme-card:hover {
            transform: translateY(-10px) scale(1.02);
            box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
        }
        
        .theme-card:hover::before {
            opacity: 1;
        }
        
        .theme-icon {
            font-size: 4rem;
            margin-bottom: 1rem;
            animation: float 3s ease-in-out infinite;
        }
        
        .theme-card:nth-child(1) .theme-icon { animation-delay: 0s; }
        .theme-card:nth-child(2) .theme-icon { animation-delay: 0.5s; }
        .theme-card:nth-child(3) .theme-icon { animation-delay: 1s; }
        .theme-card:nth-child(4) .theme-icon { animation-delay: 1.5s; }
        
        @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-15px); }
        }
        
        .theme-title {
            font-size: 1.8rem;
            font-weight: 700;
            margin-bottom: 0.5rem;
            color: #333;
        }
        
        .theme-description {
            font-size: 1rem;
            color: #666;
            margin-bottom: 1rem;
            line-height: 1.6;
        }
        
        .theme-animation {
            font-size: 0.9rem;
            color: #764ba2;
            font-weight: 600;
            margin-bottom: 1.5rem;
        }
        
        .theme-link {
            display: inline-block;
            padding: 0.8rem 2rem;
            background: linear-gradient(135deg, #667eea, #764ba2);
            color: white;
            text-decoration: none;
            border-radius: 50px;
            font-weight: 600;
            transition: all 0.3s ease;
            box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
        }
        
        .theme-link:hover {
            transform: scale(1.05);
            box-shadow: 0 6px 25px rgba(102, 126, 234, 0.6);
        }
        
        .footer {
            text-align: center;
            color: white;
            margin-top: 3rem;
            opacity: 0.9;
        }
        
        .stats {
            display: flex;
            justify-content: center;
            gap: 3rem;
            flex-wrap: wrap;
            margin-bottom: 1.5rem;
        }
        
        .stat-item {
            text-align: center;
        }
        
        .stat-number {
            font-size: 2rem;
            font-weight: 700;
            display: block;
        }
        
        .stat-label {
            font-size: 0.9rem;
            opacity: 0.8;
        }
        
        @media (max-width: 768px) {
            .theme-grid {
                grid-template-columns: 1fr;
            }
            
            .stats {
                gap: 1.5rem;
            }
        }
        
        /* Theme-specific colors */
        .theme-card:nth-child(1) .theme-icon { color: #8D6E63; }
        .theme-card:nth-child(2) .theme-icon { color: #4CAF50; }
        .theme-card:nth-child(3) .theme-icon { color: #00E5FF; }
        .theme-card:nth-child(4) .theme-icon { color: #D4AF37; }
    </style>
</head>
<body>
    <div class="container">
        <header class="header">
            <h1>🏆 Modal Masters</h1>
            <p>Choose Your Theme Experience</p>
        </header>
        
        <div class="theme-grid">
            <!-- Indian Architecture -->
            <div class="theme-card" onclick="window.location.href='/themes/indian-architecture/experience.html'">
                <div class="theme-icon">🏛️</div>
                <h2 class="theme-title">Indian Architecture</h2>
                <p class="theme-description">
                    Interactive storytelling journey through India's architectural heritage
                </p>
                <p class="theme-animation">⚡ Visual Storytelling with Real Images</p>
                <a href="/themes/indian-architecture/experience.html" class="theme-link" onclick="event.stopPropagation()">
                    Begin Journey
                </a>
            </div>
            
            <!-- Nature -->
            <div class="theme-card" onclick="window.location.href='/themes/nature/index.html'">
                <div class="theme-icon">🌸</div>
                <h2 class="theme-title">Nature</h2>
                <p class="theme-description">
                    Organic blooming flower with seasonal transformations
                </p>
                <p class="theme-animation">⚡ 6-Petal Bloom (1.6s)</p>
                <a href="/themes/nature/index.html" class="theme-link" onclick="event.stopPropagation()">
                    Explore Ecosystem
                </a>
            </div>
            
            <!-- Space -->
            <div class="theme-card" onclick="window.location.href='/themes/space/index.html'">
                <div class="theme-icon">🚀</div>
                <h2 class="theme-title">Space</h2>
                <p class="theme-description">
                    Minimal sci-fi terminal with orbital mechanics
                </p>
                <p class="theme-animation">⚡ Orbital Rings (1.2s)</p>
                <a href="/themes/space/index.html" class="theme-link" onclick="event.stopPropagation()">
                    Launch Mission
                </a>
            </div>
            
            <!-- Mythology -->
            <div class="theme-card" onclick="window.location.href='/themes/mythology/index.html'">
                <div class="theme-icon">⚡</div>
                <h2 class="theme-title">Mythology</h2>
                <p class="theme-description">
                    Ancient Greek legends with progressive reveal
                </p>
                <p class="theme-animation">⚡ 4-Layer Reveal (1.4s)</p>
                <a href="/themes/mythology/index.html" class="theme-link" onclick="event.stopPropagation()">
                    Enter Realm
                </a>
            </div>
        </div>
        
        <footer class="footer">
            <div class="stats">
                <div class="stat-item">
                    <span class="stat-number">4</span>
                    <span class="stat-label">Unique Themes</span>
                </div>
                <div class="stat-item">
                    <span class="stat-number">100%</span>
                    <span class="stat-label">Accessible</span>
                </div>
                <div class="stat-item">
                    <span class="stat-number">60fps</span>
                    <span class="stat-label">Smooth Animations</span>
                </div>
            </div>
            <p>Built for Modal Masters Challenge 2025 🚀</p>
        </footer>
    </div>
</body>
</html>
    """

@app.get("/health")
async def health_check():
    """Health check endpoint"""
    return {"status": "healthy", "themes": 4}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
