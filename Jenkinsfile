pipeline {
  agent {
    docker {
      image 'mcr.microsoft.com/playwright:v1.39.0-jammy'
    }
  }
  triggers { cron('H 4/* 0 0 1-5') }
  stages {
    stage('Install packages') {
      steps {
        sh '''
        printenv
        ci
        '''
      }
    }
    stage('Run tests') {
      steps {
        sh 'npm run test'
      }
    }
  }
  post {
      always {
        junit 'junit/*.xml'
      }
  }
}
