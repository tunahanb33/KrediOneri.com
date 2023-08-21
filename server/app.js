require('dotenv').config();
require('./database/dbConnection');
const express = require('express');
const app = express();
const apiRoutes = require('./Routes/apiRoutes');
const adminRoutes = require('./Routes/adminRoutes');
const calculationToolsRoutes = require('./Routes/calculationToolsRoutes');
app.use(require('cors')());
app.use(express.json());
const port = process.env.SERVER_PORT || 3000;

app.listen(port, () => {
    console.log(`${port} portu dinleniyor.`);
    app.use('/api', apiRoutes);
    app.use('/api/admin', adminRoutes);
    app.use('/api/CalculationTools', calculationToolsRoutes);
});