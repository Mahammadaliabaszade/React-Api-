import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
const url = "https://restcountries.eu/rest/v2/all";
const Countries = () => {
  const [countries, setCountries] = useState([]);

  const fetchcountry = async () => {
    const response = await fetch(url);
    const countries = await response.json();
    setCountries(countries);
    console.log(countries);
  };
  useEffect(() => {
    fetchcountry();
  }, []);
  return (
    <>
      <section className="grid">
        {countries.map((country) => {
          const {
            numericCode,
            name,
            population,
            region,
            capital,
            flag,
          } = country;
          return (
            <article key={numericCode}>
              <div>
                <img src={flag} />
                <div className="details">
                  <h2>{name}</h2>
                  <h4>
                    Population: <span> {population}</span>
                  </h4>
                  <h4>
                    Capital:<span> {capital}</span>
                  </h4>
                  <h4>
                    Region:<span> {region}</span>
                  </h4>
                  <Link
                    to={`/countries/${name}`}
                    className="btn"
                    style={{ fontSize: "20px" }}
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </>
  );
};

export default Countries;
