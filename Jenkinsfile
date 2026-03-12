
pipeline {
    agent any

    environment {
        DOCKER_HUB_REPO = "vaibhavswarnkar2006/react_app"
        EC2_IP = "13.60.197.148"
        EC2_USER = "ec2-user"
    }

    stages {
        stage('Clone Code') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/vaibhav1-hack/React_app_automated-with-jenkins.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t ${DOCKER_HUB_REPO}:latest .'
            }
        }

        stage('Push to Docker Hub') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: 'docker-creds',
                    usernameVariable: 'DOCKER_USER',
                    passwordVariable: 'DOCKER_PASS'
                )]) {
                    sh 'echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin'
                    sh 'docker push ${DOCKER_HUB_REPO}:latest'
                }
            }
        }

        stage('Deploy to EC2') {
    steps {
        sh '''
            ssh -o StrictHostKeyChecking=no \
            -i /home/ec2-user/fourth.pem \
            ${EC2_USER}@${EC2_IP} "
            docker pull ${DOCKER_HUB_REPO}:latest &&
            docker stop react-app || true &&
            docker rm react-app || true &&
            docker run -d -p 80:80 --name react-app ${DOCKER_HUB_REPO}:latest
            "
        '''
    }
}
    }

    post {
        success {
            echo 'Pipeline completed — React app deployed successfully!'
        }
        failure {
            echo 'Pipeline failed — check logs above.'
        }
    }
}
