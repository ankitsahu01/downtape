const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/youtube', require('./routers/YoutubeRoutes'));
app.use('/api/insta', require('./routers/InstaRoutes'));
app.use('/api/twitter', require('./routers/TwitterRoutes'));
app.use('/api/vimeo', require('./routers/VimeoRoutes'));


if(process.env.NODE_ENV==="production"){
    app.use(express.static(path.resolve(__dirname,'client','build')));
    app.get('/*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'client','build','index.html'));
    });
}
    
const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>console.log(`Server running on port ${PORT}`));