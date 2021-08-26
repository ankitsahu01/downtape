const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/youtube', require('./routers/YoutubeRoutes'));
app.use('/api/insta', require('./routers/InstaRoutes'));
app.use('/api/fb', require('./routers/FbRoutes'));


if(process.env.NODE_ENV==="production"){
    app.use(express.static(path.resolve(__dirname,'client','build')));
    app.get('/*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'client','build','index.html'));
    });
}

// const fbdl= require('fbdl-core');
// const url = "https://www.facebook.com/zeemusiccompany/videos/531377684265559";
// fbdl.getInfo(url).then(response=>console.log(response)).catch(err=>console.log(err));


    
const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>console.log(`Server running on port ${PORT}`));