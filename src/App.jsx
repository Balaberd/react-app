import React, { useState } from "react";
import Filter from "features/components/Filter/Filter";
import Header from "features/components/Header/Header";
import Table from "features/components/Table/Table";

function App() {
  const [additionalFilterVisibility, setAdditionalFilterVisibility] =
    useState(false);
  const handleToggleAdditionalFilter = () =>
    setAdditionalFilterVisibility(!additionalFilterVisibility);
  return (
    <div className="pageWrapper">
      <Header />
      <Filter
        additionalFilterVisibility={additionalFilterVisibility}
        handleToggleAdditionalFilter={handleToggleAdditionalFilter}
      />
      <Table additionalFilterVisibility={additionalFilterVisibility} />
    </div>
  );
}

export default App;
