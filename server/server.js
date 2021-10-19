const express = require("express");
const app = express();
const pool = require("./db");
const cors = require("cors");


//middleware
app.use(cors());
app.use(express.json());

//Selecting the geometry in a geojson format 
app.get("/geom", async(req, res)=> {
try {
    const geom = await pool.query("SELECT ST_AsGeoJSON(geom) FROM geomtable ORDER BY gid DESC LIMIT 1");
    res.json(geom.rows);
  } catch (err) {
    console.error(err.message);
  }
});


app.listen(5000, () => {
console.log("server is running on port 5000"); 
});