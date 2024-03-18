pipeline {
  agent any
  // agent { 
  //   dockerfile true
  // }

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
      steps {     
        sh '''
          npm ci 
          npx playwright install --with-deps
        '''
      }
    }
    stage('Run tests') {
      steps {
        catchError(buildResult: 'SUCCESS', stageResult: 'SUCCESS') {
          sh 'npm run ci:test'
        }
      }
    }
    stage('Copy history into allure-results') {
      steps {
        sh '''
          npm run generate:history
          cp -r allure-report/history allure-results
        '''     
      }
    }
    stage('Generate single report') {
      steps {
        sh 'npm run generate:report'
      }
    }
    stage('Upload to s3') {
      steps {
        withAWS(region:'ap-southeast-1',credentials:"${aws_credential}") {
          s3Upload(file:'allure-report/index.html', bucket:"${bucket}", path:'index.html')}
        }
    }
    stage('Remove all files under allure-results') {
      steps {
        catchError(buildResult: 'SUCCESS', stageResult: 'SUCCESS') {
          sh 'rm -f allure-results/*'
        }
      }
    }
  }
}