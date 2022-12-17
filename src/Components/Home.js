import React from "react";
import "./Home.css";
import search from "./img/search.png";
import send from "./img/send.png";
import card from "./img/card.jfif";

const Home = () => {

    const mystyle = {
        color: "white",
        backgroundColor: "rgba(50,184,173,255)",
        
      };

  return (
    <div>
      <div className="header">
        <p>
          {" "}
          Medical Darpan {">"} Search {">"} Fabilflu Tablet{" "}
        </p>
      </div>

      <div className="search">
        <form action="/" method="get">
          {/* <label htmlFor="search-bar">
                 <span className="visually-hidden">Search</span>
              </label> */}
          <input
            type="text"
            id="header-search"
            placeholder="Paracetamol"
            name="s"
          />
          <button type="submit">Search</button>
        </form>
      </div>

      <div className="title">
        <p>
          {" "}
          <font>Paracetamol </font> (128 products) &nbsp;
          <span style={mystyle}> Aceclofenac &nbsp;&nbsp;x </span> &nbsp;&nbsp;
          <span style={mystyle}> 500 mg &nbsp;&nbsp;x &nbsp;</span> &nbsp;&nbsp;
          <span className="Remove"> Remove all</span>
        </p>
      </div>

      <div className="aside">
        <div className="aside-title">
          <p style={{fontSize:10, fontWeight:600}}> Related Category </p>
        </div>
        <div className="aside-content">
          <ul>
            <li> Paracetamol Tablets </li>
            <li> Paracetamol Syrup </li>
            <li> Paracetamol Powder </li>
            <li style={mystyle} > Aceclofenac &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; x </li>
            <li> Magaladrate Simethicone Oral Suspension </li>
            <li> Mefenamic Paracetamol Syrup </li>
          </ul>
        </div>
        <div className="aside-title">
          <p style={{fontSize:10, fontWeight:600}}> Related Brands </p>
        </div>
        <div className="aside-content">
          <ul>
            <li> Comol Paracetamol </li>
            <li> Pandal Paracetamol Tablets </li>
            <li> Combiflam </li>
            <li> Crocin Tablets </li>
            <li> Calpol Paracetamol Tablets </li>
            <li> Sumo Tablet </li>
          </ul>
        </div>
        <div className="aside-title">
          <p style={{fontSize:10, fontWeight:600}}> Business Type </p>
        </div>
        <div className="aside-content">
          <ul>
            <li> Wholesaler </li>
            <li> Manufacturer </li>
            <li> Retailer </li>
            <li> Exporter </li>
          </ul>
        </div>
        <div className="aside-title">
          <p style={{fontSize:10, fontWeight:600}}> Strength </p>
        </div>
        <div className="aside-content">
          <ul>
            <li style={mystyle}> 500 mg &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x</li>
            <li> 650 mg  </li>
          </ul>
        </div>
        <div className="aside-title">
          <p style={{fontSize:10, fontWeight:600}}> Manufacturer </p>
        </div>
        <div className="aside-content">
          <ul>
            <li> Intas Pharmaceutical Ltd </li>
            <li> Alkem Laboratories Ltd </li>
          </ul>
        </div>
        <div className="aside-title">
          <p style={{fontSize:10, fontWeight:600}}> Prescription/Non prescription </p>
        </div>
        <div className="aside-content">
          <ul>
            <li> Intas Pharmaceutical Ltd </li>
            <li> Alkem Laboratories Ltd </li>
          </ul>
        </div>
      </div>

      <div className="main">
        <div className="main-card">
          <div className="card-item">
              <img src={card} alt=" " />
              <div className="lines">
                <p className="desc"> Favipiravir 400mg (Fabiflu) Tablets </p>
                <p className="price">
                  {" "}
                 <b> <span style={{fontSize: 12, color: "rgba(117,11,11,255)" }}>Rs. 1,775 </span></b> {"/"} stripe{" "}
                </p>
                <div className="details">
                  <h4 style={{fontWeight:550, color:"rgba(0, 0, 0)"}}> Glenmark Pharmaceutical Limited</h4>
                  <h6 style={{fontWeight:500, color:"rgba(18, 18, 18, 0.555)"}}> PARVAT PATIYA, SURAT, GUJARAT</h6>
                </div>
                <br />
              </div>
                            
              <hr style={{color: "rgba(182,182,182,255)" }}/>
              <div className="contact">
                <img src={send} alt="send" />
                <a href="#">Contact Supplier </a>
              </div>
          </div>
          
          <div className="card-item">
              <img src={card} alt=" "  />
              <div className="lines">
                <p className="desc"> Favipiravir 400mg (Fabiflu) Tablets </p>
                <p className="price">
                  {" "}
                  <b> <span style={{fontSize: 12, color: "rgba(117,11,11,255)" }}>Rs. 1,775 </span></b> {"/"} stripe{" "}
                </p>
                <div className="details">
                  <h4 style={{fontWeight:550, color:"rgba(0, 0, 0)"}}> Glenmark Pharmaceutical Limited</h4>
                  <h6 style={{fontWeight:500, color:"rgba(18, 18, 18, 0.555)"}}> PARVAT PATIYA, SURAT, GUJARAT</h6>
                </div>
                  <br />
              </div>
                            
              <hr style={{color: "rgba(182,182,182,255)" }}/>
              <div className="contact">
                <img src={send} alt="send" />
                <a href="#">Contact Supplier </a>
              </div>
          </div>
          <div className="card-item">
              <img src={card} alt=" "  />
              <div className="lines">
                <p className="desc"> Favipiravir 400mg (Fabiflu) Tablets </p>
                <p className="price">
                  {" "}
                  <b> <span style={{fontSize: 12, color: "rgba(117,11,11,255)" }}>Rs. 1,775 </span></b> {"/"} stripe{" "}
                </p>
                <div className="details">
                  <h4 style={{fontWeight:550, color:"rgba(0, 0, 0)"}}> Glenmark Pharmaceutical Limited</h4>
                  <h6 style={{fontWeight:500, color:"rgba(18, 18, 18, 0.555)"}}> PARVAT PATIYA, SURAT, GUJARAT</h6>
                </div>
                  <br />
              </div>
                            
              <hr style={{color: "rgba(182,182,182,255)" }}/>
              <div className="contact">
                <img src={send} alt="send" />
                <a href="#">Contact Supplier </a>
              </div>
          </div>
          <div className="card-item">
              <img src={card} alt=" "  />
              <div className="lines">
                <p className="desc"> Favipiravir 400mg (Fabiflu) Tablets </p>
                <p className="price">
                  {" "}
                  <b> <span style={{fontSize: 12, color: "rgba(117,11,11,255)" }}>Rs. 1,775 </span></b> {"/"} stripe{" "}
                </p>
                <div className="details">
                  <h4 style={{fontWeight:550, color:"rgba(0, 0, 0)"}}> Glenmark Pharmaceutical Limited</h4>
                  <h6 style={{fontWeight:500, color:"rgba(18, 18, 18, 0.555)"}}> PARVAT PATIYA, SURAT, GUJARAT</h6>
                </div>
                  <br />
              </div>
                            
              <hr style={{color: "rgba(182,182,182,255)" }}/>
              <div className="contact">
                <img src={send} alt="send" />
                <a href="#">Contact Supplier </a>
              </div>
          </div>
          <div className="card-item">
              <img src={card} alt=" "  />
              <div className="lines">
                <p className="desc"> Favipiravir 400mg (Fabiflu) Tablets </p>
                <p className="price">
                  {" "}
                  <b> <span style={{fontSize: 12, color: "rgba(117,11,11,255)" }}>Rs. 1,775 </span></b> {"/"} stripe{" "}
                </p>
                <div className="details">
                  <h4 style={{fontWeight:550, color:"rgba(0, 0, 0)"}}> Glenmark Pharmaceutical Limited</h4>
                  <h6 style={{fontWeight:500, color:"rgba(18, 18, 18, 0.555)"}}> PARVAT PATIYA, SURAT, GUJARAT</h6>
                </div>
                  <br />
              </div>
                            
              <hr style={{color: "rgba(182,182,182,255)" }}/>
              <div className="contact">
                <img src={send} alt="send" />
                <a href="#">Contact Supplier </a>
              </div>
          </div>
          <div className="card-item">
              <img src={card} alt=" "  />
              <div className="lines">
                <p className="desc"> Favipiravir 400mg (Fabiflu) Tablets </p>
                <p className="price">
                  {" "}
                  <b> <span style={{fontSize: 12, color: "rgba(117,11,11,255)" }}>Rs. 1,775 </span></b> {"/"} stripe{" "}
                </p>
                <div className="details">
                  <h4 style={{fontWeight:550, color:"rgba(0, 0, 0)"}}> Glenmark Pharmaceutical Limited</h4>
                  <h6 style={{fontWeight:500, color:"rgba(18, 18, 18, 0.555)"}}> PARVAT PATIYA, SURAT, GUJARAT</h6>
                </div>
                  <br />
              </div>
                            
              <hr style={{color: "rgba(182,182,182,255)" }}/>
              <div className="contact">
                <img src={send} alt="send" />
                <a href="#">Contact Supplier </a>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
