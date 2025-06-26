# Orange Research AI Development Script
param(
    [Parameter(Position=0)]
    [ValidateSet("start", "stop", "restart", "logs", "status", "build")]
    [string]$Command = "start"
)

Write-Host "Orange Research AI Development Environment" -ForegroundColor Yellow
Write-Host ""

switch ($Command) {
    "start" {
        Write-Host "Starting development containers..." -ForegroundColor Green
        docker-compose up --build -d
        Write-Host ""
        Write-Host "Services started successfully!" -ForegroundColor Green
        Write-Host "Frontend: http://localhost:8080" -ForegroundColor Cyan
        Write-Host "Backend: http://localhost:3000" -ForegroundColor Cyan
        Write-Host "Health: http://localhost:3000/api/health" -ForegroundColor Cyan
    }
    "stop" {
        Write-Host "Stopping development containers..." -ForegroundColor Yellow
        docker-compose down
        Write-Host "Services stopped!" -ForegroundColor Green
    }
    "restart" {
        Write-Host "Restarting development containers..." -ForegroundColor Yellow
        docker-compose down
        docker-compose up --build -d
        Write-Host "Services restarted!" -ForegroundColor Green
    }
    "logs" {
        Write-Host "Showing container logs..." -ForegroundColor Cyan
        docker-compose logs -f
    }
    "status" {
        Write-Host "Container status:" -ForegroundColor Cyan
        docker-compose ps
    }
    "build" {
        Write-Host "Building containers..." -ForegroundColor Yellow
        docker-compose build --no-cache
        Write-Host "Build complete!" -ForegroundColor Green
    }
}

Write-Host "" 