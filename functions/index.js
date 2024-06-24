
const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const stripe = require("stripe")(process.env.STRIPE_KEY);

app.use(cors({ origin:true})); //true
app.use(express.json());

app.get("/", (req, res) => res.status(200).send("HELLO OMAR"));

app.post("/payment/create", async (req, res) => {
  try {
    const total = req.query.total;
    console.log(`payment request this amount`, total);
    const paymentIntent = await stripe.paymentIntents.create({
      amount: parseInt(total),
      currency: "usd",
    });
    
    res.status(201).send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    console.log("something went to wrong", error.message);
  }
});

app.listen(3000, (error) => {
  if (!error) {
    console.log("web server listening on port 30000");
  }
});
exports.api=onRequest(app)


