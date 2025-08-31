const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const ComplaintsSchema = require("./model/complaints");

const app = express();

app.use(express.json());
app.use(cors());


mongoose.connect("mongodb://localhost:27017/ComplaintSystem").then(() => {
    console.log("The Connection Is good");
})

// post 
app.post("/create/complaint", async (req, res) => {
    const createData = ComplaintsSchema(req.body);

    const saveData = await createData.save();

    if (saveData) {
        res.send(saveData);
    }
});

// Read
app.get("/read/complaint", async (req, res) => {
    const getData = await ComplaintsSchema.find();

    if (getData) {
        res.send(getData);
    }
});

// Update
app.put("/update/complaint/:id", async (req, res) => {
    const updateData = await ComplaintsSchema.updateOne(
        { _id: req.params.id },
        { $set: req.body }
    );

    if (updateData) {
        res.send("success updated");
    }
});

// delete
app.delete("/delete/complaint/:id", async (req, res) => {
    const deleteData = await ComplaintsSchema.deleteOne(
        { _id: req.params.id }
    );

    if(deleteData){
        res.send("success deleted");
    }
});

app.listen(5555, () => console.log("The server is Working"));