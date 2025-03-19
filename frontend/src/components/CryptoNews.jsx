import { useState, useEffect } from "react";
import { getCryptoNews } from "../api";
import { Card, CardContent, Typography, Box } from "@mui/material";

const CryptoNews = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        const fetchNews = async () => {
            const data = await getCryptoNews();
            setNews(data);
        };
        fetchNews();
    }, []);

    return (
        <Box p={2}>
            <Typography variant="h5" textAlign={'center'}>Crypto News</Typography>
            {news.map((article, index) => (
                <Card key={index} sx={{ my: 2 }}>
                    <CardContent>
                        <Typography variant="h6">{article.title}</Typography>
                        <Typography variant="body2">{article.published_at}</Typography>
                        <a href={article.url} target="_blank" rel="noopener noreferrer">
                            Read More
                        </a>
                    </CardContent>
                </Card>
            ))}
        </Box>
    );
};

export default CryptoNews;
