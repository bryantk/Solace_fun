"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [advocates, setAdvocates] = useState([]);
  const [filteredAdvocates, setFilteredAdvocates] = useState([]);
  const [page, setPage] = useState([0]);

  useEffect(() => {
    console.log("fetching advocates...");
    getAdvocates(page)
  }, []);

  async function getAdvocates(page: number=0) {
    const response = await fetch("/api/advocates?" + new URLSearchParams({
      cursor: page,
    }).toString());

    return response.json().then((jsonResponse) => {
      setAdvocates(jsonResponse.data);
      setFilteredAdvocates(jsonResponse.data);
    });
  }

  const onChange = (e) => {
    // Should filter out garbage, like all whitespace
    // Populate from params
    const searchTerm = e.target.value;

    document.getElementById("search-term").innerHTML = searchTerm;

    console.log("filtering advocates...");
    const filteredAdvocates = advocates.filter((advocate) => {
      console.log(advocate.specialties);
      const searchableTerms = [
        advocate.firstName,
        advocate.lastName,
        advocate.city,
        advocate.degree,
        advocate.yearsOfExperience.toString()
      ].concat(
        advocate.specialties.join(' ')
      ).join(' ').toLowerCase()
      
      return searchableTerms.includes(searchTerm.toLowerCase());
    });

    setFilteredAdvocates(filteredAdvocates);
  };

  const onClick = () => {
    console.log(advocates);
    setFilteredAdvocates(advocates);
  };

  function formatPhoneNumber(phoneNumberInt: Number) {
    const match = phoneNumberInt.toString().match(/^(\d{3})(\d{3})(\d{4})/)
    if (match) {
      return `(${match[1]}) ${match[2]}-${match[3]}`;
    }
    return phoneNumberInt;
  }

  return (
    <main style={{ margin: "24px" }}>
      <h1>Solace Advocates</h1>
      <hr />
      <br />
      <div id="search-box">
        <p>Search</p>
        <p>
          Searching for: <span id="search-term"></span>
        </p>
        <input style={{ border: "1px solid black" }} onChange={onChange} />
        <br />
        <button id="reset-button" onClick={onClick}>Reset Search</button>
      </div>
      <hr />
      <br />
      <table className="orderedTable" style={{ "width": "100%"}}>
        <thead>
          <tr>
            <th style={{ "width": "10%"}}>First Name</th>
            <th style={{ "width": "10%"}}>Last Name</th>
            <th style={{ "width": "10%"}}>City</th>
            <th style={{ "width": "5%"}}>Degree</th>
            <th style={{ "width": "50%"}}>Specialties</th>
            <th style={{ "width": "100px"}}>Years of Experience</th>
            <th style={{ "width": "10%"}}>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {filteredAdvocates.map((advocate) => {
            return (
              <tr key={advocate.id} style={{"height": "150px"}}>
                <td>{advocate.firstName}</td>
                <td>{advocate.lastName}</td>
                <td>{advocate.city}</td>
                <td>{advocate.degree}</td>
                <td>
                  <div style={{ "font-size": "small", "overflow-y": "auto", "height": "150px", "padding": "5px" }}>
                    {advocate.specialties.sort().map((s) => (
                      <div>{s}</div>
                    ))}
                  </div>
                </td>
                <td>{advocate.yearsOfExperience}</td>
                <td>{formatPhoneNumber(advocate.phoneNumber)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
}
