import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import NewHomePage from "./pages/NewHomePage";  // New Coinbase-inspired homepage
import OldHomePage from "./pages/OldHomePage";  // Old GMX homepage
import { AppBar, Toolbar, Button } from "@mui/material";

function App() {
    return (
        <Router>
            <AppBar position="static">
                <Toolbar>
                    <Button color="inherit" component={Link} to="/">Home</Button>
                    <Button color="inherit" component={Link} to="/old-home">Classic GMX</Button>
                </Toolbar>
            </AppBar>

            <Routes>
                <Route path="/" element={<NewHomePage />} />
                <Route path="/old-home" element={<OldHomePage />} />
            </Routes>
        </Router>
    );
}

export default App;
