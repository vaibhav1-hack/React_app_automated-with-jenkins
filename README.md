**Overview**

This project demonstrates a complete CI/CD pipeline for a React application using Jenkins, Docker, Docker Hub, and AWS EC2.

Whenever code is pushed to GitHub, Jenkins automatically:

Pulls the latest source code

Builds a Docker image of the React application

Tags the image with the Jenkins build number

Pushes the image to Docker Hub

Deploys the container on an AWS EC2 instance

This automates the build → containerization → deployment process.

Architecture
Developer
   │
   ▼
GitHub Repository
   │
   ▼
Jenkins Pipeline
   │
   ├── Build Docker Image
   ├── Tag Image (Build Number)
   ├── Push to Docker Hub
   │
   ▼
AWS EC2 Instance
   │
   ├── Pull Latest Image
   └── Run Docker Container
Tech Stack
**Application**

React

JavaScript

Node.js

**DevOps**
Jenkins (CI/CD)

Docker

Docker Hub

AWS EC2

GitHub

**CI/CD Pipeline Flow**
Step 1 – Developer Pushes Code

Code changes are pushed to the GitHub repository.

Step 2 – Jenkins Pipeline Triggered

Jenkins pulls the latest code.

Step 3 – Build Docker Image

The application is containerized.

docker build -t username/react-app:BUILD_NUMBER .
Step 4 – Push Image to Docker Hub
docker push username/react-app:BUILD_NUMBER
Step 5 – Deploy to EC2

Jenkins connects to EC2 and runs:

docker pull username/react-app:BUILD_NUMBER
docker run -d -p 80:3000 username/react-app:BUILD_NUMBER

The updated application is now live.

Project Structure
React_app_automated-with-jenkins
│
├── src
├── public
├── Dockerfile
├── Jenkinsfile
├── package.json
└── README.md
Jenkins Pipeline Stages

The Jenkins pipeline includes the following stages:

1. Checkout

Pull source code from GitHub.

2. Build Docker Image

Build container image using Dockerfile.

3. Tag Image

Tag image with Jenkins build number.

4. Push to Docker Hub

Authenticate and push image.

5. Deploy to EC2

Pull the latest image and run container.

Running the Project Locally

Clone repository:

git clone https://github.com/vaibhav1-hack/React_app_automated-with-jenkins.git

cd React_app_automated-with-jenkins

Build Docker image:

docker build -t react-app .

Run container:

docker run -p 80:80 react-app

Open browser:

http://localhost/
AWS Deployment

Requirements:

EC2 instance with Docker installed

Security group allowing HTTP traffic

Docker Hub credentials configured in Jenkins

Deployment happens automatically through the Jenkins pipeline.

Key DevOps Concepts Demonstrated

Continuous Integration with Jenkins

Docker containerization

Docker Hub image registry

Automated deployment on AWS EC2

CI/CD pipeline automation
