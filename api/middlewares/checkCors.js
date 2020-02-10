const cors = require('cors');

const corsOptions = {
  origin: 'https://cpt-project.firebaseapp.com/',
  credentials: true
};

module.exports = cors(corsOptions);
