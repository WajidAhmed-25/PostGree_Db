const { Pool } = require('pg')
 
const pool = new Pool({
  connectionString: "postgres://default:FIDrnaP9yMj3@ep-lingering-sun-12113083-pooler.us-east-1.postgres.vercel-storage.com:5432/verceldb?sslmode=require",
})

pool.connect((err) => {
    if (err) throw err
    console.log("Connect to PostgreSQL successfully!")
})

module.exports = pool