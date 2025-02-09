# *Number Classification API*

## *Overview*
This API takes a number as a query parameter and returns its mathematical properties along with a fun fact.

## *Features*
- Determines if a number is *prime, perfect, or an Armstrong number*.
- Identifies whether the number is *odd or even*.
- Calculates the *sum of its digits*.
- Fetches a *fun fact* from the [Numbers API](http://numbersapi.com/).

## *API Endpoint*
### **GET /api/classify-number?number=<integer>**
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
    "number": "abc",
    "error": true
}


---

## *Setup & Installation*
### *1. Clone the repository*
sh
git clone https://github.com/yadekola/hng-number-classification-api.git

cd hng-number-classification-api


### *2. Install dependencies*
sh
npm install


### *3. Run the server locally*
sh
node index.js
npm start

or with *nodemon*:
sh
npx nodemon index.js

The server will run at http://localhost:3000.

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
