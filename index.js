const express = require("express");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());



const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.vu8ej.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
console.log(uri);

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error

  }
}
run().catch(console.dir);

const databaseCollection = client.db("WanderAsia").collection("Touristspot");

// Add a Tour (POST)
app.post("/addtour", async (req, res) => {
  const add=req.body
  console.log(add);
  const result=await databaseCollection.insertOne(add)
  res.send(result)
});
//Updated spot

app.put('/Touristspot/:id', async (req, res) => {
  const id = req.params.id;
  console.log(id);

  try {
    const filter = { _id: new ObjectId(id) };
    const option = { upsert: true };
    const Updated = req.body;
    const Updatespot = {
      $set: {
        username: Updated.username,
        PhotoUrl: Updated.PhotoUrl,
        spot: Updated.spot,
        country: Updated.country,
        location: Updated.location,
        cost: Updated.cost,
        season: Updated.season,
        travelTime: Updated.travelTime,
        short: Updated.short
      }
    };

    const result = await databaseCollection.updateOne(filter, Updatespot, option);
    res.json(result);
  } catch (error) {
    console.error("Error updating:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});



//
app.get('/Touristspot/:id', (req, res) => {
  const id = req.params.id;
  // Fetch data logic here
  res.json({ message: "Tourist spot details", id });
});


// Get All Tours (GET)
app.get("/addtour", async (req, res) => {
  try {
    const result = await databaseCollection.find().toArray();
    res.status(200).json(result);
  } catch (error) {
    console.error("Error fetching tours:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});



app.get("/Touristspot", async (req, res) => {
  try {
    let query = {}; // Default: Fetch all data

    if (req.query.email) {
      console.log("Fetching data for email:", req.query.email);
      query.email = req.query.email.trim();
    }

    const result = await databaseCollection.find(query).toArray();
    res.status(200).json(result);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).send({ message: "Internal Server Error" });
  }
});


//Delete


app.delete('/Touristspot/:id',async(req,res)=>{
  const id=req.params.id
  const query={_id: new ObjectId(id)}
  const result=await databaseCollection.deleteOne(query)
  res.send(result)
})




// app.get("/Touristspot",async(req,res)=>{
//   console.log(req.query.email);
//   let query={}
//   if(req.query?.email){
//     query={email:req.query.email}
//   }
//   const result =await databaseCollection.find(query).toArray()
//   res.send(result)
// })

// Root Routez
app.get("/", (req, res) => {
  res.send("Server is running...");
});

// Start Server
app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});

//WanderAsia
//nL3czC3T5IDA1tbw