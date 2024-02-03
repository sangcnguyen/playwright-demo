pipeline {
  agent any
  triggers { cron('H 4/* 0 0 1-5') }
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
