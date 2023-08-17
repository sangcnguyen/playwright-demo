pipeline {
  agent any

  stages {
    stage('Install packages') {
      steps {
        sh '''
        printenv
        npm install
        npx playwright install --with-deps
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