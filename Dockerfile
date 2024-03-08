# Get the latest version of Playwright
FROM mcr.microsoft.com/playwright:v1.42.1-jammy

# Set the working directory
WORKDIR /tests

# Copy the rest of the application files
COPY . /tests

# Install java
RUN apt-get update && \
    apt-get install -y openjdk-8-jdk && \
    apt-get install -y ant && \
    apt-get clean;

# Install dependencies
RUN npm ci