# json-web-token

This project is to understand how Token based authentication works between client and server in cross domain using (Json Web Token Standard).

Steps to deploy the application:
-----------------------------------

1. Start Mongo DB Client and Server (xxx points to your folder path)
    "xxx\MongoDB\Server\3.4\bin\mongod.exe" --dbpath "xxx\data"
    "xxx\MongoDB\Server\3.4\bin\mongo.exe"

2. Deploy the backend application which exposes services
    npm run auto-start

3. Deploy the UI
    npm install
    ng serve



