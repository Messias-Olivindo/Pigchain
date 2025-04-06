from fastapi import FastAPI
from backend.services.service import LNbits


app = FastAPI()
client = LNbits("localhost:3007")  # ou o IP do LNbits local

@app.get("/")
def root():
    return {"message": "Pigchain API working!"}

@app.post("/create")
def create_wallets():
    account = client.create_account("super-jaba")
    wallet1 = client.create_wallet(account.adminkey, "wallet1")
    wallet2 = client.create_wallet(account.adminkey, "wallet2")
    
    invoice = client.create_invoice(wallet1.inkey, 100, "invoice from wallet1")
    payment = client.pay_invoice(wallet2.adminkey, invoice.bolt11)
    
    return {
        "wallet1": wallet1.name,
        "wallet2": wallet2.name,
        "invoice": invoice.memo,
        "payment_status": payment.status
    }
