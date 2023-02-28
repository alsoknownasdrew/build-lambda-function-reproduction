import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { buildLambdaFunction } from "@aws-solutions-constructs/core";
import { Code, Runtime } from 'aws-cdk-lib/aws-lambda';


export class BuildLambdaFunctionReproductionStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    buildLambdaFunction(this, {
      lambdaFunctionProps: {
        functionName: 'my-test-function-1',
        runtime: Runtime.NODEJS_18_X,
        code: Code.fromAsset('lambda'),
        handler: 'hello-world.index'
      }
    });

    buildLambdaFunction(this, {
      lambdaFunctionProps: {
        functionName: 'my-test-function-2',
        runtime: Runtime.NODEJS_18_X,
        code: Code.fromAsset('lambda'),
        handler: 'hello-world.index'
      }
    });
  }
}
