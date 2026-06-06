from fastapi import FastAPI, HTTPException

app = FastAPI(title="StoreTrack API")

products = [
    {"id": 1, "name": "Mouse", "sku": "MOU001", "stock": 10},
    {"id": 2, "name": "Keyboard", "sku": "KEY001", "stock": 5}
]

customers = [
    {"id": 1, "name": "Rakesh", "email": "rakesh@example.com"}
]

orders = []

@app.get("/")
def home():
    return {"message": "StoreTrack API Running"}

@app.get("/products")
def get_products():
    return products

@app.post("/products")
def add_product(product: dict):
    for p in products:
        if p["sku"] == product["sku"]:
            raise HTTPException(status_code=400, detail="SKU already exists")
    products.append(product)
    return product

@app.get("/customers")
def get_customers():
    return customers

@app.post("/customers")
def add_customer(customer: dict):
    for c in customers:
        if c["email"] == customer["email"]:
            raise HTTPException(status_code=400, detail="Email already exists")
    customers.append(customer)
    return customer

@app.get("/orders")
def get_orders():
    return orders

@app.post("/orders")
def create_order(order: dict):
    product_id = order["product_id"]
    quantity = order["quantity"]

    for product in products:
        if product["id"] == product_id:

            if product["stock"] < quantity:
                raise HTTPException(
                    status_code=400,
                    detail="Insufficient stock"
                )

            product["stock"] -= quantity
            orders.append(order)

            return {
                "message": "Order Created",
                "remaining_stock": product["stock"]
            }

    raise HTTPException(
        status_code=404,
        detail="Product Not Found"
    )