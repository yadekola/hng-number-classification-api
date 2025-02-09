require("dotenv").config();
const express = require("express");
const cors = require("cors");
const axios = require("axios");
const { classifyNumber } = require("./utils/helpers");

const app = express();
app.use(cors());

app.get("/api/classify-number", async (req, res) => {
    const { number } = req.query;

    // Validate input
    if (!number || isNaN(number)) {
        return res.status(400).json({ number, error: true });
    }

    const num = parseInt(number, 10);
    const classification = classifyNumber(num);

    try {
        // Fetch fun fact from Numbers API
        const { data: funFact } = await axios.get(`http://numbersapi.com/${num}/math`);
        classification.fun_fact = funFact;
    } catch (error) {
        classification.fun_fact = "Could not retrieve a fun fact.";
    }

    res.json(classification);
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
