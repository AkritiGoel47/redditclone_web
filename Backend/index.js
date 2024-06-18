const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const { mongoose } = require("mongoose");
const authRoute = require ('./routes/authRoutes');
const adminRoute = require('./routes/adminroutes')
const commonRoute = require('./routes/commonRoute')
const app = express();
const PORT = 8000 || process.env.PORT;
app.use(express.json());
dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Database Connected"))
  .catch((err) => console.log("Database not Connected", err));

const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
};
app.use(cors(corsOptions));
app.options("*", cors(corsOptions));

app.use('/api',authRoute);
app.use('/api/admin',adminRoute);
app.use('/api',commonRoute);



app.use(express.static('public'));



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
