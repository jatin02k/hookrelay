import app from "./app.js";

const PORT = process.env.PORT || 3000

app.listen(PORT, ()=>{
    console.log(`Express App is live at http://localhost:${PORT}`)
})