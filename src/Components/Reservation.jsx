import React from "react";

const Reservation = () => {
  return (
    <div className="reservation">
    <div className="reservation_content">
      <div className="container">
        <div className="reservation_text">
          <h3>Reservation</h3>
          <h1>BOOK YOUR TABLE</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            minus ut mollitia error molestiae quia.
          </p>
          <div className="reservation_input">
            <input type="number" placeholder="Total Person"/>
            <input type="date" placeholder="Expected Date"/>
            <input type="time" placeholder="Expected Time"/>
            
            <div className="contact_btn">
                <a href="" className="btn btn-smart">CHECK AVAILABILITY</a>
            </div>
            </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Reservation;
