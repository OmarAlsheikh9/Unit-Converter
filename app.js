import express from "express";
import cors from "cors";
import {lengthSchema, weightSchema, tempSchema} from './schema/inputsSchema.js'
import {units} from './units.js'
const app = express();
app.use(cors());
app.use(express.json());

///////////////////////////////////////////////////////

function validateSchema(schema) {
  return (req, res, next) => {
    const result = schema.safeParse({...req.body, ...req.params});
    if (!result.success) {
      const messages = result.error.issues
        .map((err) => {
          const field = err.path.join(".");
          return field ? `${field}: ${err.message}` : err.message;
        })
        .join(", ");
      return res.status(400).json({ errors: messages });
    }
    next();
  };
}

app.post("/length/:from/:to", validateSchema(lengthSchema), (req, res) => {
  const { value} = req.body;
  const {from ,to} = req.params;
  const baseValue = value * units.length.toBase[from];
  const convertedValue = (baseValue / units.length.toBase[to]).toFixed(6);
  res.status(200).json({ result: convertedValue });
});
app.post("/weight/:from/:to", validateSchema(weightSchema), (req, res) => {
  const { value} = req.body;
  const {from ,to} = req.params;
  const baseValue = value * units.weight.toBase[from];
  const convertedValue = (baseValue / units.weight.toBase[to]).toFixed(6);
  res.status(200).json({ result: convertedValue });
});
app.post("/temperature/:from/:to", validateSchema(tempSchema), (req, res) => {
  const { value} = req.body;
  const {from ,to} = req.params;
  const baseValue = units.temperature.toBase[from](value);
  const convertedValue = units.temperature.fromBase[to](baseValue).toFixed(6);
  res.status(200).json({ result: convertedValue });
});
app.all('/{*any}',(req,res)=>{
  res.status(404).json({message:"Not Found"});
})
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});