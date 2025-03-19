import { Container, Typography, Button } from "@mui/material";
import CryptoPrices from "../components/CryptoPrices";
import CryptoNews from "../components/CryptoNews";
import PageRenderer from "../components/GetPage";

const OldHomePage = () => {
    return (
        <Container>
            <Typography variant="h3">Welcome to GMX</Typography>
            <Typography variant="body1">
                This is the original GMX homepage. You can still access all features here.
            </Typography>
            <Button variant="contained" color="primary">Explore GMX</Button>
            <CryptoPrices />
                <CryptoNews />
                {/* <PageRenderer /> */}
        </Container>
    );
};

export default OldHomePage;
