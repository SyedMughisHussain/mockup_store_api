import app from "./index.js";
import connectDB from "./db/connectDB.js";

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 3000, () => {
      console.log(`Server running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("Error: ", err);
  });
