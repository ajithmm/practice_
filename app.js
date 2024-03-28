const express =  require('express');
const path = require('path');
const app = express();


app.use(express.urlencoded({extended : true}));
app.use(express.json());
var bodyParser = require("body-parser");

// 

const { connectMongoDB } = require("./connection");
const mongoURI = "mongodb://127.0.0.1:27017/user_new";
connectMongoDB(mongoURI);

// app.use
// ((session)=>({
//   seceret : "my secrete key",
//   saveUnintialized : true,
//   resave : false,
// })
// );

// app.use((req,res,next) => {
//   res.locals.message = req.session.message;
//   delete req.session.message;
//   next();
// });

app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'views'));

const homeRoutes = require("./routes/userRoutes");
app.use("/", homeRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});




