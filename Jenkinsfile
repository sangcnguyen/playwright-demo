pipeline {
  agent any

  stages {
    stage('Install packages') {
      steps {
        sh '''
        printenv
        npm install
        '''
      }
    }

    stage('Run tests') {
      steps {
        sh 'npm run test'
      }
    }

  }
}