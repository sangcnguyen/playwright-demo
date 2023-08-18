pipeline {
   agent { docker { image 'mcr.microsoft.com/playwright:v1.37.0-jammy' } }

  stages {
    stage('Install packages') {
      steps {
        sh '''
        printenv
        npm ci
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