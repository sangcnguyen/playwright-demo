# Get the latest version of Playwright
FROM mcr.microsoft.com/playwright:v1.41.1-jammy

# Set the working directory
WORKDIR /tests

# Copy the rest of the application files
COPY . /tests

# Install dependencies
RUN npm ci

# Install deps
RUN npx playwright install --with-deps