import React, { useState } from "react";
import DataFile from "../components/Catalog/data";

// Components
import Layout from "../Layout/layout";
import CatalogList from "../components/Catalog/CatalogList";
import Filters from "../components/Catalog/filters/filters";
import Features from "../components/Catalog/Features/features"

const MembersPage = () => {
  const [filter, setFilter] = useState([]);
  const [categories] = useState(DataFile)

  const handleChange = () => {
    var checkboxes = document.querySelectorAll("input[type=checkbox]:checked");
    var filters = [];
    for (var i = 0; i < checkboxes.length; i++) {
      filters.push(checkboxes[i].value);
    }
    setFilter(filters);
  };

  return (
      <Layout>
        <div style={{ maxWidth: "1140px", margin: "auto" }}>
        <h1 style={{ marginTop: "2rem" }}>Service Mesh Catalog </h1>
        <Features />
        <div style={{display: "flex", gap:"2rem"}}>
              <Filters handleChange={handleChange} resources={filter} data={categories} />
              <CatalogList  resources={filter} />
              </div>
              </div>
      </Layout>
  );
};

export default MembersPage;
