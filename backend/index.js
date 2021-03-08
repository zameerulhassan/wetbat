const express = require("express");

const quotesRouter = require("./routes/quotes");

const cors = require("cors");

const PORT = process.env.PORT || 4000;

const app = express();

app.use(cors());
app.use(express.json());

app.use(quotesRouter);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
