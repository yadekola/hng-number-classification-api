# *Number Classification API*

## *Overview*
This is a simple API that classifies numbers based on their mathematical properties. It determines whether a number is prime, perfect, or an Armstrong number, calculates the sum of its digits, and fetches a fun fact about the number from the Numbers API.


## Features
- Checks if a number is *prime*
- Checks if a number is *perfect*
- Checks if a number is an *Armstrong number*
- Determines if a number is *odd or even*
- Calculates the *sum of the digits*
- Fetches a *fun fact* from the Numbers API


## *API Endpoint*
### *GET /api/classify-number?number={number}*

#### *Example Request:*
sh
https://hng12-number-classification-api.vercel.app/api/classify-number?number=371


#### *Example Response:*
json
{
    "number": 371,
    "is_prime": false,
    "is_perfect": false,
    "properties": ["armstrong", "odd"],
    "digit_sum": 11,
    "fun_fact": "371 is an Armstrong number because 3^3 + 7^3 + 1^3 = 371"
}


#### *Error Response (400 Bad Request)*
json
{
    "number": "alphabet",
    "error": true
}



---

## Installation & Running Locally
### *1. Clone the repository*
sh
git clone https://github.com/yadekola/hng-number-classification-api.git

### **2. Navigate into the project directory:**
   sh
   cd hng-number-classification-api
   

### *3. Install dependencies*
sh
npm install

### **4. Create a .env file and set up the port:**
   sh
   PORT=3000



### *5. Run the server locally*
sh
node index.js
npm start

or with *nodemon*:
sh
npx nodemon index.js

The server will run at http://localhost:3000.

### **6. Test the API locally:**

http://localhost:3000/api/classify-number?number=371

---

## *Deployment*
This API is deployed on *Vercel*.

### *Steps to Deploy on Vercel*
1. Install Vercel CLI:
   sh
   npm install -g vercel
   
2. Deploy the project:
   sh
   vercel
   
3. Use the provided Vercel URL to access your API.

---

## *Technologies Used*
- *Node.js* - JavaScript runtime
- *Express.js* - Web framework
- *Axios* - HTTP requests
- *CORS* - Cross-Origin Resource Sharing
- *Dotenv* - Environment variables

---

## *Contributing*
Feel free to *fork* this repository, open *issues, and submit **pull requests*.

---

## *License*
This project is *MIT Licensed*.
