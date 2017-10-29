# MEAN-auth-app
Back End  
Building a REST API using Node.js, Express, MonGoose, and Passport  
-create some end points for registration, adding users to the database, authentication, getting users profile data and so on

Token Generation and Authentication  
-adding authentication using Passport and JWT (Json Web Tokens)  
-specify which routes and end points the user will need a token for  
-if they don't provide the token, then they won't be authorized to use that endpoint  
-use Passport/JWT as well to generate the tokens  

CORS  
-enabling CORS (Cross Origin Resource Sharing)  
-during development, the back end server and front end angular app will be on different ports so in order to make requests to the front end, will need to enbable this  
-use / include module and add middleware  

Mongoose ODM  
-using Mongoose for our ODM (Object Document Mapper)  
-used to make models  

Front End  
Angular 2 / Angular-CLI (Command Line Interface)  
-compile in express public folder, allow to run client and server both on one port  

Angular Router, HTTP Module  
Angular 2 - JWT  
-used to handle the authentication tokens  

Auth Guard  
-for authentication routes  

Angular Flash Message Module  
-ex: log out pop up message  

Compile & Deploy  

