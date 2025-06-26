# Orange Research AI Chatbot

An intelligent research assistant chatbot built with Botonic, React, TypeScript, and Node.js.

## 🏗️ Architecture

- **Frontend**: Botonic React chatbot (Port 8080)
- **Backend**: Node.js Express API with TypeScript (Port 3000)
- **Data Validation**: Zod schemas
- **Development**: Docker containers with hot reloading

## 🚀 Quick Start

### Prerequisites

- Docker Desktop
- Node.js 20+ (for local development)
- npm or yarn

### Running with Docker

1. **Clone and navigate to the project:**
   ```bash
   cd orangeresearchai
   ```

2. **Start the development containers:**
   ```bash
   docker-compose up --build
   ```

3. **Access the applications:**
   - Frontend (Botonic): http://localhost:8080
   - Backend API: http://localhost:3000
   - Health Check: http://localhost:3000/api/health

### Local Development

1. **Install dependencies:**
   ```bash
   # Frontend
   cd frontend
   npm install
   npm install -g @botonic/cli

   # Backend
   cd ../backend
   npm install
   ```

2. **Start development servers:**
   ```bash
   # Frontend (in frontend directory)
   npm run dev

   # Backend (in backend directory)
   npm run dev
   ```

## 📁 Project Structure

```
orangeresearchai/
├── .cursor/
│   └── cursorrules.md          # Cursor IDE rules
├── frontend/                   # Botonic React app
│   ├── src/
│   │   ├── actions/           # Botonic actions
│   │   ├── routes.js          # Botonic routes
│   │   └── components/        # Custom React components
│   ├── Dockerfile
│   └── package.json
├── backend/                    # Node.js API
│   ├── src/
│   │   ├── routes/            # API routes
│   │   ├── schemas/           # Zod schemas
│   │   ├── middleware/        # Express middleware
│   │   └── index.ts           # Main server file
│   ├── Dockerfile
│   ├── tsconfig.json
│   ├── nodemon.json
│   └── package.json
├── docker-compose.yml
└── README.md
```

## 🛠️ Development

### Frontend (Botonic)

- **Framework**: Botonic with React
- **Language**: TypeScript
- **Port**: 8080
- **Hot Reload**: Enabled
- **Commands**:
  - `npm run dev` - Start development server
  - `npm run build` - Build for production
  - `npm run deploy` - Deploy to Botonic platform

### Backend (Node.js)

- **Framework**: Express with TypeScript
- **Validation**: Zod schemas
- **Port**: 3000
- **Hot Reload**: Nodemon with ts-node
- **Commands**:
  - `npm run dev` - Start development server
  - `npm run build` - Compile TypeScript
  - `npm start` - Start production server

## 🔧 Configuration

### Environment Variables

Create `.env` files in both frontend and backend directories:

**Backend (.env):**
```env
NODE_ENV=development
PORT=3000
CORS_ORIGIN=http://localhost:8080
```

**Frontend (.env):**
```env
NODE_ENV=development
```

## 📝 API Endpoints

### Health Check
- `GET /api/health` - Service health status

### Root
- `GET /` - API information

## 🧪 Testing

```bash
# Frontend tests (when implemented)
cd frontend
npm test

# Backend tests (when implemented)
cd backend
npm test
```

## 🚀 Deployment

### Docker Production Build

```bash
# Build production images
docker-compose -f docker-compose.prod.yml up --build
```

### Botonic Deployment

```bash
cd frontend
npm run deploy
```

## 🤝 Contributing

1. Follow the TypeScript and ESLint rules
2. Use Zod for all data validation
3. Write meaningful commit messages
4. Test your changes before submitting

## 📄 License

MIT License - see LICENSE file for details