import React, { useState } from "react";
import "./styles/Profile.css";
function Profile() {
  return (
    <>
      <section className="profile-section">
        <div className="profile-div-registration">
          <div className="registration-title">
            <h2>Registrati</h2>
          </div>
          <form action="" method="post" className="form-registration">
            <div>
              <span>Inserisci nome utente:</span>
              <br />
              <input type="text" placeholder="Nome utente" />
            </div>
            <div>
              <span>Inserisci email:</span>
              <br />
              <input type="text" placeholder="email@gmail.com" />
            </div>
            <div>
              <span>Inserisci password:</span>
              <br />
              <input type="password" placeholder="●●●●●●●●" />
            </div>
            <div>
              <span>Conferma password:</span>
              <br />
              <input type="password" placeholder="●●●●●●●●" />
            </div>
            <div>
              <button type="button">Continua</button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default Profile;
