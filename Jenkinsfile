pipeline {
  agent { dockerfile true }
  stages {
    // stage('Build image') {
    //   steps {
    //     sh 'docker build -t playwright-local .'
    //   }
    // }
    stage('Run tests') {
      steps {
        sh 'npm run ci:test'
      }
    }
  }
  post {
      always {
        junit 'junit/*.xml'
      }
  } 
}
