import express from 'express';
import fetch from 'node-fetch';
console.log('1');
const app = express();
var ulElement = document.getElementById("ul_listIn");
app.get('/api/news', async (req, res) => {
    try {
        const response = await fetch('https://news.cctv.com/2019/07/gaiban/cmsdatainterface/page/news_1.jsonp');
        const data = await response.json();
        console.log(data);
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
