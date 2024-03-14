pipeline {
  agent none

  environment {
    aws_credential = "AWS_CREDENTIAL_ID"
    bucket = "alllure-report"
  }

  // parameters {
  //   booleanParam(name: "BUILD_IMAGE", defaultValue: false)
  // }

  stages {
    // stage('Build image') {
    //   when { expression { params.BUILD_IMAGE } }
    //   steps {     
    //     sh 'docker build -t playwright-local .'
    //   }
    // }
    stage('Install deps') {
      agent {
        docker{
          image 'mcr.microsoft.com/playwright:v1.42.1-jammy'
        }
      }
      steps {
        sh 'npm ci'
        sh 'npm run ci:test'
      }
    }
    
    stage('Generate report') {
      agent {
        docker{
          image 'eclipse-temurin:21-alpine'
        }
      }
      steps {
        sh 'npm run publish:report'
      }
    }

    stage('Upload to s3') {
      steps {
        withAWS(credentials:"${aws_credential}") {
          s3Upload(file:"allure-report/index.html", bucket:"${bucket}", path:"alllure-report")}
        }
      }
    }
  }

  post {
    always {
      junit 'junit/*.xml'
  }
} 
