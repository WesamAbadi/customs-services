import React from "react";
import "./Services.css";
import service1 from "../assets/service1.png";
import service2 from "../assets/service2.png";
import service3 from "../assets/service3.png";
function Services() {
  return (
    <section className="services">
      <h2>گروه علــمی، همیشه در خدمت شما</h2>
      <div className="services-cards">
        <div className="card">
          <img src= {service1} alt="Service 1" />
          <h3>بازرگانی علــمی</h3>
        </div>
        <div className="card">
          <img src={service3} alt="Service 2" />
          <h3>گمرک فرودگاه</h3>
        </div>
        <div className="card">
          <img src={service2} alt="Service 3" />
          <h3>گمرک بندر عباس</h3>
        </div>
        <div className="card">
          <img src={service1} alt="Service 4" />
          <h3>گمرک شهریار</h3>
        </div>
      </div>
    </section>
  );
}

export default Services;
