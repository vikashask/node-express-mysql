# node-express-mysql
steps to configure project

1.Install node.js (https://nodejs.org/en/)
2.Install express generator
3.npm install express -generator -g 
for node-express-generator 
sudo apt install node-express-generator
4.express /tmp/foo && cd /tmp/foo
5.npm install
6.npm install mysql –save
npm install cors –save

7.npm start



Node JS Assessment

### 1. Assume sample form with user name and password is available. Using Node JS create custom validation for the password field. (Password should have at least 1 uppercase, 1 lowercase, 1 number, 1 special character, minimum of 8 characters, and maximum of 16 characters)
   check localhost:3000/users/login

###2. Create "My to do list for Monday" using Node JS
        a. Weekly call at 8 AM
        b. Team meeting at 10 AM
        c. Follow up meeting with the clients
        d. Weekly Sales call at 6:30 PM
        
        /todo: list of tasks.    
        /todo/add: add a task.    
        /todo/delete/:id: delete task 
        Use Mysql database

in mysql task table= 
column Meeting_id  = 1,2,3,4

1=weekly,2=team meeting,3=follow up meeting,4= weekly sales meeting

