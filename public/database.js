const { MongoClient } = require('mongodb');
const exspess = require('express');
const bodyParser = require('body-parser');
// const uri = "mongodb+srv://skiporvaleria27:pYyV7tsTpE-2YBm@cluster0.effhmfh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// const client = new MongoClient(uri);

async function start() {
    try {
        const app = exspess();
        const mongo = await MongoClient.connect('mongodb+srv://skiporvaleria27:pYyV7tsTpE-2YBm@cluster0.effhmfh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
        app.db = mongo.db();

        app.use(
            bodyParser.json({
                limit: "500kb",
            })
        )

    app.use("/appoimentSubmit", require("./contact/appoimentSubmit"));
    const PORT = 3001;
    app.listen(PORT, () => {
        console.log("Server is running on port:" + PORT);
      });
    } catch (error) {
      console.log(error);
    }
    
    
}

start()
