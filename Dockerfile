# Get the latest version of Playwright
FROM mcr.microsoft.com/playwright:v1.42.1-jammy

# Set the working directory
WORKDIR /tests

COPY package*.json ./

# Install dependencies
RUN npm ci

# Install java
RUN apt-get update && \
    apt-get install -y openjdk-8-jdk && \
    apt-get install -y ant && \
    apt-get clean;

# Copy the rest of the application files
COPY . .