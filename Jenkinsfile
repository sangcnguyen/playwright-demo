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
        echo 'npx playwright --version'
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
