Steps to reproduce the error mentioned in https://github.com/awslabs/aws-solutions-constructs/pull/910:

Install the dependencies:

`npm i`

Synthesize the app:

`npx cdk synth`

This will throw the following error:

`Error: There is already a Construct with name 'LambdaFunctionServiceRole' in BuildLambdaFunctionReproductionStack [BuildLambdaFunctionReproductionStack]`
