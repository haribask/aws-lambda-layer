#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { lambdaLayerStack } from '../lib/lambda-layer-stack';

const app = new cdk.App();
/*new s3Stack(app, 'S3Stack', {
});*/
new lambdaLayerStack(app, 'LambdaLayerStack', {
});
