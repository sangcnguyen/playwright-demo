# Get the latest version of Playwright
FROM mcr.microsoft.com/playwright:v1.48.1-noble

# Set the working directory
WORKDIR /tests

COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the application files
COPY . .

CMD ["npm", "run", "ci:test"]