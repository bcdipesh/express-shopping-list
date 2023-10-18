const request = require("supertest");
const api = require("./api");

const items = [
  {
    name: "popsicle",
    price: 1.45,
  },
  {
    name: "cheerios",
    price: 3.4,
  },
];

describe("GET /items", () => {
  test("Gets a list of items", async () => {
    const res = await request(api).get("/items");

    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ items });
  });

  test("Get a specific item", async () => {
    const res = await request(api).get("/items/popsicle");

    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({
      item: {
        name: "popsicle",
        price: 1.45,
      },
    });
  });
});

describe("POST /items", () => {
  test("Add an item to the list", async () => {
    const res = await request(api).post("/items").send({
      name: "kitkat",
      price: 1.99,
    });

    expect(res.statusCode).toBe(201);
    expect(res.body).toEqual({
      added: {
        name: "kitkat",
        price: 1.99,
      },
    });
  });
});

describe("PATCH /items/:name", () => {
  test("Updates a single item", async () => {
    const res = await request(api).patch("/items/popsicle").send({
      name: "cherries",
    });

    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({
      updated: {
        name: "cherries",
        price: 1.45,
      },
    });
  });
});

describe("DELETE /items/:name", () => {
  test("Deletes a single item", async () => {
    const res = await request(api).delete("/items/popsicle");

    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({
      message: "Deleted",
    });
  });
});
