import { defineField, defineType } from "sanity";


export default defineType({
    name: "order",
    title: "Order",
    type: "document",
    fields: [
      defineField({
        name: "email",
        title: "Customer Email",
        type: "string",
      }),
      defineField({
        name: "totalAmount",
        title: "Total Amount",
        type: "number",
      }),
      defineField({
        name: "items",
        title: "Order Items",
        type: "array",
        of: [
          {
            type: "object",
            fields: [
              { name: "title", title: "Product Title", type: "string" },
              { name: "price", title: "Price", type: "number" },
              { name: "quantity", title: "Quantity", type: "number" },
              { name: "image", title: "Image URL", type: "url" },
            ],
          },
        ],
      }),
      defineField({
        name: "createdAt",
        title: "Created At",
        type: "datetime",
      }),
    ],
  });
  