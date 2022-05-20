import React from 'react';
import ReactDOM from 'react-dom/client';
import { createServer, Model } from "miragejs"
import { App } from './App';

createServer({
  models: {
    transaction: Model,
  },
  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 0,
          title: "Freelance",
          type: "income",
          amount: 6000,
          category: "Job",
          createdAt: new Date("2021-01-12 09:00:00")
        },
        {
          id: 1,
          title: "Rent",
          type: "outcome",
          amount: 2000,
          category: "House",
          createdAt: new Date("2021-01-15 09:00:00")
        },
      ]
    })
  },
  routes() {
    this.namespace = "api"
    this.get("/transactions", (schema) => {
      return schema.db.transactions;
    });
    this.post("/transactions", (schema, request) => {
      const data = JSON.parse(request.requestBody)
      return schema.create("transaction", data)
    })
  }
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
