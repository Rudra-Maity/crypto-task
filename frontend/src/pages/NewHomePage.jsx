import { Container, Typography, Button, Box } from "@mui/material";
import CryptoPrices from "../components/CryptoPrices";
import PageRenderer from "../components/GetPage";

const NewHomePage = () => {
    return (
        <Container>
            {/* Hero Section */}
            <Box textAlign="center" my={4}>
                <Typography variant="h3">Buy & Sell Cryptocurrency</Typography>
                <Typography variant="h5" color="gray">
                    The easiest way to trade digital assets securely.
                </Typography>
                <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                    Get Started
                </Button>
                <CryptoPrices />
            </Box>

            {/* Features Section */}
            <Box display="flex" justifyContent="space-around" mt={5}>
                <Box textAlign="center">
                    <Typography variant="h5">Secure Trading</Typography>
                    <Typography variant="body1">Industry-leading security measures.</Typography>
                </Box>
                <Box textAlign="center">
                    <Typography variant="h5">Low Fees</Typography>
                    <Typography variant="body1">Affordable transaction costs.</Typography>
                </Box>
                <Box textAlign="center">
                    <Typography variant="h5">Fast Transactions</Typography>
                    <Typography variant="body1">Instant deposits and withdrawals.</Typography>
                </Box>
            </Box>

            {/* Call to Action */}
            <Box textAlign="center" my={5}>
                <Button variant="contained" color="secondary">Start Trading Now</Button>
            </Box>
            <PageRenderer />
        </Container>
    );
};

export default NewHomePage;
