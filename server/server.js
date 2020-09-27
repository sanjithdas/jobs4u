const express = require('express');
const app = express();
const db = require('./models');
const cors = require('cors');
const PORT = process.env.PORT || 8081;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors())
const apiRoutes = require("./routes/apiRoutes");
app.use('/api',apiRoutes);

const userRoutes = require("./routes/user-routes");
app.use('/api/users',userRoutes);

const profileRoutes = require("./routes/profile-routes");
app.use('/api/profiles',profileRoutes);

const postRoutes = require("./routes/post-routes");
app.use('/api/posts',postRoutes);



db.sequelize.sync().then(() =>{
  app.listen(PORT, () =>{
    console.log(`listening on : http://localhost:${PORT}`);
  })
})