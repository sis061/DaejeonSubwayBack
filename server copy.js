// const express = require("express");
// const axios = require("axios");
// const cors = require("cors");
// const app = express();
// const port = 8000;

// app.use(cors());

// const baseAPIUrl = "http://www.djtc.kr/OpenAPI/service/TimeTableSVC/getTimeTable?";

// const getAPI = async (params) => {
//   try {
//     const response = await axios.get(baseAPIUrl, {
//       params: {
//         ...params,
//         drctType: 1,
//         dayType: 0,
//         ServiceKey: "Triqfgx2gAo3E0kaY05/FHftk4zX1ji64QZrtwolupcU2ty5Bh3yqv4lBc0WCQYJ+00A5eWLAJRZFHjaVQAPaQ=="
//       }
//     });
//     return response.data;
//   } catch (error) {
//     console.error(error);
//     throw error;
//   }
// };

// app.get(`/arrivalinfo/:id`, async (req, res) => {
//   try {
//     const stationId = (req.params.id).substr(1);
//     // console.log(stationId);
//     const apiResponse = await getAPI({ stNum: stationId });
//     res.json(apiResponse);
//   } catch (error) {
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });

