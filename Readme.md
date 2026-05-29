# Invoice App

A fullstack invoice management web application built with vanilla JavaScript on the frontend and Node.js + Express on the backend, connected to a PostgreSQL database.

---

## Features

- **Invoice Details View** — displays invoice number, issue date, due date, customer name, and payment status
- **Bill To Section** — shows client name, address, email, and phone
- **Add Invoice Items** — modal form to enter item name, description, quantity, and unit price
- **Auto Calculations** — automatically computes line total, subtotal, 8% tax, and grand total as items are added
- **Invoice Table** — dynamically renders added items; shows an empty state when no items exist
- **Auto Invoice Numbering** — generates sequential invoice numbers (e.g. `INV-2026-001`) using `localStorage` as a counter
- **Save Invoice** — sends invoice data to the backend via a POST request
- **UI Buttons** — Send Invoice, Record Payment, Download PDF, Add Note (UI present; backend integration in progress)

---

## Tech Stack

| Layer     | Technology                        |
|-----------|-----------------------------------|
| Frontend  | HTML, CSS, Vanilla JavaScript (ES Modules) |
| Backend   | Node.js, Express.js (v5)          |
| Database  | PostgreSQL (via `pg` Pool)        |
| Dev Tools | Nodemon, dotenv, CORS             |

---

## Project Structure

```
Invoice-App/
├── backend/
│   ├── server.js                   # Express server entry point, CORS config
│   ├── package.json
│   └── src/
│       ├── config/
│       │   └── db.js               # PostgreSQL connection pool (dotenv)
│       └── routes/
│           └── invoiceRoutes.js    # GET and POST /api/invoices
│
└── frontend/
    └── src/
        ├── index.html              # Main invoice page
        ├── main.js                 # Entry point — wires all modules together
        ├── config.js               # API base URL config
        ├── apis/
        │   └── saveInvoice.js      # POST request to save invoice
        ├── modules/
        │   ├── invoiceNumber.js    # Generates INV-YYYY-NNN using localStorage
        │   ├── invoiceData.js      # Holds invoice data object in memory
        │   ├── invoiceDetails.js   # Renders header details to the DOM
        │   ├── billTo.js           # Renders client info to the DOM
        │   ├── addItem.js          # Opens/closes the Add Item modal
        │   ├── getItemData.js      # Reads form inputs, validates, triggers calculations
        │   ├── addTableRow.js      # Appends item rows and totals to the table
        │   └── toggleTableState.js # Shows/hides empty state vs table
        ├── utils/
        │   ├── calculations.js     # lineTotal, subTotal, tax (8%), grandTotal
        │   └── demo.js             # Scratch file for JS experiments
        └── css/
            ├── nav.css
            ├── header.css
            ├── bill-to-section.css
            ├── invoice-items.css
            ├── notes.css
            └── send-invoice.css
```

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18+
- [PostgreSQL](https://www.postgresql.org/) running locally

### 1. Clone the repository

```bash
git clone https://github.com/keshavgit23/Invoice-App.git
cd Invoice-App
```

### 2. Set up the backend

```bash
cd backend
npm install
```

Create a `.env` file inside `backend/`:

```env
DB_USER=your_postgres_username
DB_PASSWORD=your_postgres_password
DB_HOST=localhost
DB_NAME=your_database_name
DB_PORT=5432
```

Start the server:

```bash
npm run dev     # with nodemon (auto-restart)
# or
npm start       # with node
```

The backend runs on `http://localhost:5000`.

### 3. Run the frontend

Open `frontend/src/index.html` directly in your browser, or serve it using VS Code's Live Server extension (recommended — runs on `http://127.0.0.1:5500`).

> The backend CORS config allows `http://127.0.0.1:5500` and `http://localhost:5000` by default.

---

## API Endpoints

| Method | Endpoint        | Description              |
|--------|-----------------|--------------------------|
| GET    | `/api/invoices` | Health check for routes  |
| POST   | `/api/invoices` | Receives invoice payload |

---

## Known Limitations / Work in Progress

- Invoice data is stored in a JS object in memory on the frontend; full DB persistence for items is not yet implemented
- Edit, Delete, and Download PDF features are UI-only — not yet connected to the backend
- Input validation exists in JS modules but no backend validation is wired up yet
- `saveInvoice.js` sends an empty body to the API — payload integration pending

---

## Future Improvements

- Connect full invoice payload to the PostgreSQL database
- Add invoice listing page (view all saved invoices)
- Implement edit and delete invoice functionality
- Add PDF download using a library like `pdfkit` or `puppeteer`
- Add form validation feedback visible to the user (not just `console.log`)

---

## Author

**Keshav** — [GitHub](https://github.com/keshavgit23)
