pipeline {
  agent any
  stages {
    stage('Build image') {
      steps {
        sh 'docker build -t playwright-local .'
      }
    }
    stage('Run tests') {
      steps {
        sh 'docker run -it playwright-local npm run ci:test'
      }
    }
  }
  post {
      always {
        junit 'junit/*.xml'
      }
  } 
}
