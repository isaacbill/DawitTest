**ContactFormApp**

**Table of Contents**
Dependencies Installation
Database Setup
Running the Application
API Endpoint Documentation
Frontend Setup

**Dependencies Installation**
**Laravel Backend:**
Make sure you have PHP and Composer installed.
Clone the repository: git clone <(https://github.com/isaacbill/DawitTest.git)>
Navigate to the backend directory: cd DawitInsurance
Install Laravel dependencies: composer install
**Angular Frontend:**
Make sure you have Node.js and npm installed.
Navigate to the frontend directory: cd Frontend\contact-form-app
Install Angular CLI globally: npm install -g @angular/cli
Install project dependencies: npm install
**Database Setup
Laravel Backend:**
Create a MySQL database.
Copy the .env.example file to .env: 
Update the database connection details in the .env file.
Run database migrations to create tables: php artisan migrate

**Running the Application**
**Laravel Backend:**
Start the Laravel development server: php artisan serve
The backend API will be available at http://localhost:8000
create a user in the users table and use B-crypt generator to generate encoded password
use the details for basic Authentication
**Angular Frontend:**
Start the Angular development server: ng serve
The frontend application will be available at http://localhost:4200

**API Endpoint Documentation**
POST /api/inquiries
Description: Endpoint to handle incoming contact form submissions.
Request Body:
json
{
  "name": "string",
  "email": "string",
  "message": "string"
}
Response:
Success: Status 200
Error: Status 422 with validation errors

**Frontend Setup
Angular Frontend:**
Open src/environments/environment.ts and update the apiBaseUrl to http://localhost:8000/api.
Implement the contact form component using Angular Reactive Forms.
Implement form validation to ensure required fields are filled out correctly.
Submit form data to the backend API endpoint /api/inquiries.
Provide feedback to users upon successful submission or encountered errors.

