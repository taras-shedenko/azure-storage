import "dotenv/config";
import app from "./app.js";

const port = process.env.PORT;

if (!port) throw new Error("Missing environment variable PORT!");

app.listen(port, () => console.log(`App listening on port ${port}`));
