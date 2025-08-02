import express from "express";
import authRoute from "./routes/auth.route.js"
import cors from "cors"

const PORT = 3000
const app = express()

const allowedOrigins = [
  "http://localhost:5173", 
];

// ✅ Correct CORS configuration
app.use(   
  cors({
    origin: allowedOrigins, 
    credentials: true, 
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);


app.use(express.json())


app.use("/api/auth", authRoute)

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server is running on PORT ${PORT}`)   
})