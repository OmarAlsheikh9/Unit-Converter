# Unit Converter

A simple web application to convert between different units of measurement, built with **Node.js** and **Express**.

> 🔗 Project from [roadmap.sh](https://roadmap.sh/projects/unit-converter)

---

## Features

- Convert between units of **Length**, **Weight**, and **Temperature**
- Clean, responsive UI with tab-based navigation
- Input validation on the server using **Zod**
- RESTful API with proper error handling

## Supported Units

| Category    | Units                                                          |
|-------------|----------------------------------------------------------------|
| Length      | Millimeter, Centimeter, Meter, Kilometer, Inch, Foot, Yard, Mile |
| Weight      | Milligram, Gram, Kilogram, Ounce, Pound                        |
| Temperature | Celsius, Fahrenheit, Kelvin                                    |

---

## Tech Stack

- **Backend:** Node.js, Express 5
- **Validation:** Zod
- **Frontend:** Vanilla HTML, CSS, JavaScript

## Project Structure

```
unit-converter/
├── app.js              # Express server & routes
├── units.js            # Unit definitions & conversion logic
├── schema/
│   └── inputsSchema.js # Zod validation schemas
├── unit_converter_pro.html  # Frontend UI
└── package.json
```

---

## Getting Started

### Prerequisites

- Node.js v18+

### Installation

```bash
git clone https://github.com/OmarAlsheikh9/Unit-Converter.git
cd unit-converter
npm install
```

### Run

```bash
npm start
```

Then open `unit_converter_pro.html` in your browser.

---

## API Endpoints

All endpoints accept a `POST` request with `{ "value": number }` in the body.

| Method | Endpoint                        | Description              |
|--------|---------------------------------|--------------------------|
| POST   | `/length/:from/:to`             | Convert length units     |
| POST   | `/weight/:from/:to`             | Convert weight units     |
| POST   | `/temperature/:from/:to`        | Convert temperature units|

### Example

```bash
curl -X POST http://localhost:3000/length/cm/m \
  -H "Content-Type: application/json" \
  -d '{"value": 100}'

# Response
{ "result": "1.000000" }
```

### Valid Unit Keys

- **Length:** `mm`, `cm`, `m`, `km`, `in`, `ft`, `yd`, `mi`
- **Weight:** `mg`, `g`, `kg`, `oz`, `lb`
- **Temperature:** `C`, `F`, `K`
