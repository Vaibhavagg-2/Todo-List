# Use Node.js LTS (Long Term Support) as base image
FROM node:20-slim

# Create app directory
WORKDIR /usr/src/app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy app source
COPY . .

# Build the application
RUN npm run build

# Expose port 8080 (webpack-dev-server default port)
EXPOSE 8080

# Start the application
CMD ["npm", "start"] 