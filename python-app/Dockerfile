# Use an official Python runtime as a parent image
FROM python:3.12-slim

# Set the working directory in the container
WORKDIR /app

# Copy requirements.txt
COPY requirements.txt ./

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the application code by ignoring files in .dockerignore
COPY . .

# Expose the port the app runs on
EXPOSE 8000

# Define the command to run the app
CMD ["fastapi", "run", "main.py" , "--host", "0.0.0.0", "--port", "8000"]