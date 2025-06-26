FROM node:20

WORKDIR /app

# Only copy package.json to avoid lockfile issues
COPY package.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Expose port
EXPOSE 8080

# Start Botonic development server
CMD ["npm", "start"] 