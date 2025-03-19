import { Container, Typography, Button, Box } from "@mui/material";
import CryptoPrices from "../components/CryptoPrices";
import CryptoNews from "../components/CryptoNews";

const HomePage = () => {
    return (
        <Container>
            <Box textAlign="center" my={4}>
                <Typography variant="h3">Welcome to GMX</Typography>
                <Typography variant="h5" color="gray">
                    Trade, Invest, and Stay Updated with the Latest Crypto Trends.
                </Typography>
                <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                    Get Started
                </Button>
            </Box>
            
            <CryptoPrices />
            <CryptoNews />
        </Container>
    );
};

export default HomePage;
