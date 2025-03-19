const express = require("express");
const axios = require("axios");
const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const response = await axios.get("https://cryptopanic.com/api/v1/posts/", {
            params: {
                auth_token: process.env.CRYPTO_NEWS_API_KEY,
                filter: "hot",
            },
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch crypto news" });
    }
});

module.exports = router;
