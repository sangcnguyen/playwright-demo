pipeline {
  agent { 
    dockerfile true 
    args '-t playwright-local'
  }

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
    stage('Run tests') {
      steps {
        sh 'npm run ci:test'
      }
    }
    stage('Generate report') {
      steps {
        sh 'npm run publish:report'
      }
    }

    stage('Upload to s3') {
      steps {
        withAWS(region:'ap-southeast-1',credentials:"${aws_credential}") {
          s3Upload(file:'allure-report/index.html', bucket:"${bucket}", path:'alllure-report')}
        }
      }
    }
  }

  post {
    always {
      junit 'junit/*.xml'
  }
} 
