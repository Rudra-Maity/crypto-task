import { useState, useEffect } from "react";
import { getCryptoPrices } from "../api";
import { Box, Typography } from "@mui/material";

const CryptoPrices = () => {
    const [prices, setPrices] = useState({});

    useEffect(() => {
        const fetchPrices = async () => {
            const data = await getCryptoPrices();
            setPrices(data);
        };
        fetchPrices();
        const interval = setInterval(fetchPrices, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <Box display="flex" justifyContent="center" gap={2} p={2} color={'red'}>
            <Typography variant="h6">BTC: ${prices.bitcoin?.usd}</Typography>
            <Typography variant="h6">ETH: ${prices.ethereum?.usd}</Typography>
            <Typography variant="h6">GMX: ${prices.gmx?.usd}</Typography>
        </Box>
    );
};

export default CryptoPrices;
