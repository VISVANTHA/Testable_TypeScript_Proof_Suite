import { NodeSDK } from "@opentelemetry/sdk-node";
const sdk = new NodeSDK({});
await sdk.start();
console.log("opentelemetry sdk started");
await sdk.shutdown();
console.log("opentelemetry sdk shutdown ok");
