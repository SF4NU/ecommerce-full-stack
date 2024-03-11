import React, { useState, useEffect } from "react";
import "./styles/Cart.css";
import { time } from "../Cards/utils/time";
import { scrollToTop } from "../Cards/utils/scrollToTop";

function Cart({ storeId, setStoreId }) {
  function removeItem(id) {
    setStoreId((s) => s.filter((item) => item.id !== id));
  }

  function calculateTotal() {
    let total = 0;
    storeId.map((item) => {
      total += item.updatedPrice;
    });
    return total;
  }

  function truncateText(text, maxLength) {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + "...";
    } else {
      return text;
    }
  }

  useEffect(() => {
    const scrollAfterMount = async () => {
      await time(200);
      scrollToTop();
    };
    scrollAfterMount();
  }, []);

  return (
    <>
      <section className="cart-section">
        <div className="main-cart-div">
          <div className="cart">Carrello</div>
          <div className="products-list-div">
            <span>Lista articoli: </span>
            <ul className="ul-items"></ul>
            {storeId
              ? storeId.map((item, index) => (
                  <li key={item.id}>
                    {truncateText(item.name, 13)}&nbsp;&nbsp;
                    <span>
                      {item.updatedPrice} €{" "}
                      <i
                        className="fa-solid fa-circle-xmark"
                        onClick={() => {
                          removeItem(item.id);
                        }}></i>
                    </span>
                  </li>
                ))
              : "Nessun articolo"}
          </div>
          <div className="total-div">
            Il tuo totale è di: {calculateTotal()} €
          </div>
          <div className="total-div">Acquista con:</div>
          <div className="payment-methods">
            <i className="fa-brands fa-cc-paypal fa-3x"></i>

            <i className="fa-brands fa-cc-mastercard fa-3x"></i>
            <i className="fa-brands fa-cc-visa fa-3x"></i>
          </div>
          <div className="total-div buy-button">Procedi al pagamento</div>
        </div>
      </section>
    </>
  );
}

export default Cart;
