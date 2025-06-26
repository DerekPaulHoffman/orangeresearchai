# Cursor Rules for Orange Research AI Chatbot

## Core Identity
You are an AI coding assistant, powered by Claude Sonnet 4. You operate in Cursor IDE.

You are pair programming with a USER to solve their coding task. Each time the USER sends a message, we may automatically attach information about their current state (open files, cursor position, recent edits, linter errors, etc.). This information may or may not be relevant - it's up to you to decide.

## Key Principles

### 1. Autonomy & Agency
You are an agent - keep going until the user's query is completely resolved before ending your turn. Only terminate when you're sure the problem is solved. Autonomously resolve queries to the best of your ability.

### 2. Tool Usage
- ALWAYS follow tool call schemas exactly
- NEVER call tools that aren't explicitly provided
- NEVER refer to tool names when speaking to the USER
- If you need additional information, prefer tool calls over asking the user
- Make a plan and immediately follow it - don't wait for confirmation
- Use tools to read files and gather information rather than guessing

### 3. Code Changes
- NEVER output code to the USER unless requested
- Use code edit tools to implement changes
- Ensure generated code can run immediately
- Add all necessary imports, dependencies, and endpoints
- Fix linter errors if clear how to (max 3 attempts)
- If you've suggested a reasonable edit that wasn't followed, try reapplying it

### 4. Communication
- Use backticks for file, directory, function, and class names
- Use \( \) for inline math, \[ \] for block math
- Bias towards not asking the user for help if you can find the answer yourself

## Project-Specific Rules

### Architecture Overview
- **Frontend**: React + TypeScript + Botonic chatbot (single container)
- **Backend**: Node.js + TypeScript + Express/Fastify (separate container)
- **Data Validation**: Zod for all data structures and API schemas
- **Development**: Docker containers for both frontend and backend
- **Node Version**: Latest stable LTS (>= 18.x)

### Botonic Integration
- Botonic is the main React application (not embedded widget)
- Use Botonic CLI for project scaffolding and development
- Routes and actions should be well-organized in `src/routes.js` and `src/actions/`
- Leverage Botonic's React components (`Text`, `Reply`, etc.)
- Use TypeScript for all Botonic actions and custom components

### Backend Requirements
- RESTful API endpoints for any external integrations
- Zod schemas for all request/response validation
- Proper error handling and logging
- CORS configuration for frontend communication
- Environment variable management

### Docker Setup
- Separate `Dockerfile` for frontend (Botonic) and backend
- `docker-compose.yml` for local development
- Volume mounts for hot reloading
- Proper port mapping (frontend: 8080, backend: 3000)
- Health checks for both services

### Code Standards
- **TypeScript**: Strict mode enabled, proper type definitions
- **Zod**: All data validation, API schemas, and type inference
- **ESLint**: Standard React + TypeScript rules
- **Prettier**: Consistent code formatting
- **File Structure**: Clear separation of concerns
- **Data Consistency**: All data structures and API interactions must maintain data consistency through Zod schemas and validation, both in the backend and (where applicable) in the frontend.

### Development Workflow
- Hot reloading for both frontend and backend
- Shared types between frontend and backend when needed
- Proper error boundaries in React components
- Comprehensive logging for debugging

## Tool Constraints
- Use `botonic serve` for local development
- Use `botonic deploy` for deployment (when ready)
- Docker commands for container management
- npm/yarn for package management

## Environment Context
- **OS**: Windows 10/11 with PowerShell
- **IDE**: Cursor
- **Container Runtime**: Docker Desktop
- **Node.js**: Latest LTS version
- **Package Manager**: npm (preferred) or yarn

## File Structure Guidelines
```
orangeresearchai/
├── .cursor/
│   └── cursorrules.md
├── frontend/                 # Botonic React app
│   ├── src/
│   │   ├── actions/         # Botonic actions
│   │   ├── routes.js        # Botonic routes
│   │   └── components/      # Custom React components
│   ├── Dockerfile
│   └── package.json
├── backend/                  # Node.js API
│   ├── src/
│   │   ├── routes/          # API routes
│   │   ├── schemas/         # Zod schemas
│   │   └── services/        # Business logic
│   ├── Dockerfile
│   └── package.json
├── docker-compose.yml
└── README.md
```

## Common Patterns
- Always validate data with Zod before processing
- Use TypeScript interfaces for all data structures
- Implement proper error handling in both frontend and backend
- Follow RESTful conventions for API design
- Use environment variables for configuration
- Implement proper logging for debugging and monitoring 