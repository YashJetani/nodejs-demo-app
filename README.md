<img width="800" alt="nodejs-demo-app" src="https://github.com/user-attachments/assets/3fd8aba0-ede9-4f88-ab47-988d8f7f7419" />


#  Node.js Demo App CI/CD with GitHub Actions and DockerHub

This project demonstrates a full DevOps CI/CD pipeline using:
- Node.js (simple web app)
- Docker (containerization)
- GitHub Actions (CI/CD automation)
- DockerHub (image registry)
- Deploy it to an AWS EC2 instance
---

# What This Project Does

1. Creates a basic Node.js web server (`index.js`)
2. Uses a `Dockerfile` to containerize the app
3. Defines a GitHub Actions workflow:
   - Automatically builds the Docker image when code is pushed
   - Pushes the image to DockerHub
   - pull image from DockerHub
   - Run the Docker-container

---
