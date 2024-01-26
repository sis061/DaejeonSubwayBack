const express = require("express");
const axios = require("axios");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 8000;

app.use(cors());

const baseAPIUrl = "http://www.djtc.kr/OpenAPI/service/TimeTableSVC/getAllTimeTable?";

const getAPI = async () => {
  try {
    const response = await axios.get(baseAPIUrl, {
      params: {
        ServiceKey: "Triqfgx2gAo3E0kaY05/FHftk4zX1ji64QZrtwolupcU2ty5Bh3yqv4lBc0WCQYJ+00A5eWLAJRZFHjaVQAPaQ=="
      }
    });
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

app.get(`/arrivalinfo/:id`, async (req, res) => {
  try {
    await getAPI(req).then((response) => {
      res.send(response.data);
    });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

