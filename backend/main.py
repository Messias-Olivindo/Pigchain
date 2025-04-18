#
#   Written by Pavel Kononov from LightningBounties.com
#   For MIT Bitcoin Hackathon 2025
#
#   Happy hacking!
#

from backend.services.service import LNbits
from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def root():
    return {"message": "Pigchain is ON!"}



def main() -> None:
    client = LNbits("https://demo.lnbits.com")

    account = client.create_account(name="user")

    wallet1 = client.create_wallet(
        account_api_key=account.adminkey,
        name="my_wallet_1"
    )
    wallet2 = client.create_wallet(
        account_api_key=account.adminkey,
        name="my_wallet_2"
    )
    
    invoice = client.create_invoice(
        wallet_key=wallet1.inkey, 
        amount_sats=100, 
        memo="invoice from wallet1"
    )

    client.pay_invoice(
        wallet_adminkey=wallet2.adminkey,
        invoice=invoice.payment_request
    )


if __name__ == "__main__":
    main()