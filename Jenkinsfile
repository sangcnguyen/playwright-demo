pipeline {
  agent {
    docker {
      image 'node:16.20.1-alpine3.18' 
    }
  }

  stages {
    stage('Install packages') {
      steps {
        echo 'Install packages'
        sh 
        '''
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