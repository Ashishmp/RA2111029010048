const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// POST endpoint
app.post('/bfhl', (req, res) => {
    const { data } = req.body;

    // Check if data is provided and is an array
    if (!Array.isArray(data)) {
        return res.status(400).json({ error: 'Invalid data format. Data should be an array.' });
    }

    const numbers = [];
    const alphabets = [];
    let highestAlphabet = '';

    data.forEach(item => {
        if (!isNaN(item)) {
            numbers.push(item);
        } else if (typeof item === 'string') {
            alphabets.push(item);
            if (item.toLowerCase() > highestAlphabet.toLowerCase()) {
                highestAlphabet = item;
            }
        }
    });

    res.json({
        is_success: true,
        user_id: "Ashish Ranjan_15062003",  // updated details
        email: "ar9034@srmist.edu.in",        // updated details
        roll_number: "RA2111029010048",    // updated details
        numbers: numbers,
        alphabets: alphabets,
        highest_alphabet: highestAlphabet ? [highestAlphabet] : []
    });
});

// GET endpoint
app.get('/bfhl', (req, res) => {
    res.json({ operation_code: 1 });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});