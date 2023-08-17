pipeline {
  agent any

  parameters {
    booleanParam(name: "BUILD_IMAGE", defaultValue: false)
  }

  stages {
    stage('Build image') {
      steps {
        when { expression { params.BUILD_IMAGE } }
        sh 'docker build -t playwright-local .'
      }
    }
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
