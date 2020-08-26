# First_Angular
My first Angular Application

## Steps:
### First week:
1. Initialize begin angular app
- `npm install -g @angular/cli@6.2.1`
- `ng new conFusion --style=scss`
- Go to conFusion, `ng serve` to start to serve the app via localhost:4200

2. Setting up
- `npm install @angular/material@6.4.7 @angular/cdk@6.4.7 --save`
- `npm install --save @angular/animations@6.1.7 hammerjs@2.0.8`

3. Angular Components
- To generate a component `ng g component *componentName*`

4. Angular Services
- To generate a service `ng g service *serviceName*`

5. Add an Angular Router Module
- `ng generate module *name*`, I use as app-routing

6. Set up a Server using JSON-SERVER
- `npm install json-server -g`
- Create a json-server folder anywhere you comfort with
- Create db.json, `json-server --watch db.json -d 2000`
- Result:
`\{^_^}/ hi!
Loading db.json
  Done
  Resources
http://localhost:3000/dishes
http://localhost:3000/promotions
http://localhost:3000/leaders
http://localhost:3000/feedback`
- You can also see images folder in json-server by access `http://localhost:3000/images/<image name>.png`