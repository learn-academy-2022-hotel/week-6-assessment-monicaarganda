# ASSESSMENT 6: Interview Practice Questions


Answer the following questions.


First, without external resources. Challenge yourself to answer from memory.


Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.


1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?


Your answer: In order to fix this mistake, I would have to create another model called Students by using the command, ($rails generate model Students example:string cohort_id:integer). cohort_id is the foreign that is accessing the primary key of the Cohort table. Then I would access my Student model and add the foreign key (belongs_to) to the model that was created, inside of the class. For example it will read "belongs_to :cohort" because the students belong to their specific cohort.


Researched answer: If the both models are already created and then the foreign key was forgotten it is possible to add the foreign key to the Student controller in the create method. In order to do this we would have to create a variable that calls on the controller using dot notation and the name of your foreign_id set to equal the controller dot notation id. For example, (@model2.category_id = @model1.id). Once this is completed we will have to set the update, delete and strong param methods to include this new column name.
(https://stackoverflow.com/questions/31489320/how-to-add-foreign-key-value-on-controller-create-in-a-partial) This is the link I used to explain how to add a foreign key if it was forgotten in the beginning.


2. Which RESTful routes must always be passed params? Why?


Your answer: RESTful routes that must pass params are destroyed, created and updated. This is because these methods are changing the data that was originally input. Since these methods are essentially allowing the user to change the user interface it is setting regulations and security to the data being changed, in order to keep the integrity of your app.


Researched answer: The Restful routes that always pass params are show, edit, update and destroy. Params are extensions of the url and allows the page to bring the user the id that is being called on without manually having to enter the specific id that instance holds. This makes the app more seamless, and brings the user to the necessary thought from them. The reason the Restful routes show, edit, update and destroy access the params is because they are only handling/ focusing on one instance at a time rather than displaying a list of the instances. The link I used to gain more information on this topic is (https://www.branch.io/glossary/query-parameters/).


3. Name three rails generator commands. What is created by each?


Your answer:
Three different rails generator commands are:
- $ rails generator Model : This command generates the Model for the database. This command takes in the name of the model I want to create, and the name of each column along with the preferred datatype the column needs to be filled with.
- $ rails generator Controller : This command generates the controller for the database, for the naming conventions this will be named the same as the model to keep consistency. In the controller is where the methods are stored, these tell the url how to interact and what to do as well as what is stored in the user interface.
- $ rails generator Resource : This command generates both the model and controller at the same time, eliminating performing this action in two steps as well as creating the files for testing within the app. With using the resource command this also eliminates the step of manually entering the routes for the created methods within the controller file.




Researched answer(reworked my previous answer):
- $ rails generator Model : This command generates the Model for the database. This command takes in the name of the model I want to create, and the name of each column along with the preferred datatype the column needs to be filled with. The name of the model has a naming convention of uppercase and singular. Creating a model allows for the crud and http verbs to be used and applied to the database. The model stores all of the logic and performs the majority of the action in the Ruby class. (https://dev.to/vinistock/understanding-and-writing-rails-generators-10h1)


- $ rails generator Controller : This command generates the controller for the database, for the naming conventions this will be named the same as the model to keep consistency. In the controller is where the methods are stored, these tell the url how to interact and what to do as well as what is stored in the user interface. The controller links the interaction between the user, views and the model; it controls how the data is displayed to the user. The controller is important because with the model holds all of the logic the controller is what performs that logic of the methods it is holding. (https://www.tutorialspoint.com/ruby-on-rails/rails-controllers.htm)


- $ rails generator Resource : This command generates both the model and controller at the same time, eliminating performing this action in two steps as well as creating the files for testing within the app. With using the resource command this also eliminates the step of manually entering the routes for the created methods within the controller file. This command is used to help save time while creating an all


4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?


action: "GET" location: /students
- index: This method is used to access all of the instances that were created in the console.
action: "POST" location: /students
- create: This method is used to create a new instance of the controller by accessing them all and making sure it has not been stored yet.
action: "GET" location: /students/new
- new: This method gives the user the ability to add to the instance with information of their own if it has not already been stored.
action: "GET" location: /students/2
- show: This method is calling on one the instances created and showing the details of the instance at id 2.
action: "GET" location: /students/2/edit
- edit: This method allows the user to update an entry to their preference.
action: "PATCH" location: /students/2
- update: This method accesses the instance at id 2 and updates the information with the new values given.
action: "DELETE" location: /students/2
- destroy: This method is responsible for deleting an entry that is unwanted


5. As a developer, you are making an application to manage your to do list. Create 10 user stories that wi`ll help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).


- Chore Tracker App
- User Story 1: As a user, In order to interact with the Chore tracker application I need to see a list of all chores.


- User Story 2: As a user, In order to interact with the Chore tracker application I need to see the details of one chore.


- User Story 3: As a user, In order to interact with the Chore tracker application I need to see a form where I can fill out information for a new chore.


- User Story 4: As a user,In order to interact with the Chore tracker application I need to create a new chore.


- User Story 5: As a user, In order to interact with the Chore tracker application I need to be able to delete a chore.


- User Story 6: As a user, In order to interact with the Chore tracker application I need to see a form to update an existing chore on the app.


- User Story 7: As a user, In order to interact with the Chore tracker application I need to see a form where I can fill out information to edit an existing chore.


- User Story 8: As a user, In order to create a secure Chore tracker application, I need to ensure only valid data is entered into the database.


- User Story 9: As a user, In order to interact with the Chore tracker application I need to see pleasant stylings on the app.


- User Story 10: As a user, In order to interact with the Chore tracker application I need to be able to access the application on a live url.
