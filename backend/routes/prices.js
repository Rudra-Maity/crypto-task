const express = require("express");
const axios = require("axios");
const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const response = await axios.get(
            "https://api.coingecko.com/api/v3/simple/price",
            { params: { ids: "bitcoin,ethereum,gmx", vs_currencies: "usd" ,kind:'price'} }
        );
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch prices" });
    }
});

module.exports = router;
