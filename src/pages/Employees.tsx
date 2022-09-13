import React, { useState, useEffect } from "react";
import Main from "../components/Layout/Main";
import EmployeesList from "../components/List/EmployeesList";
import Search from "../components/List/Search";
import Sorter from "../components/List/Sorter";

const Employees: React.FC = () => {
  const [searchValue, setSearchValue] = useState<string>("");

  const stored = localStorage.getItem("employees");

  useEffect(() => {
    if (typeof stored === "string") {
      const data = JSON.parse(stored);
      console.log(data);
      const filteredData = data.filter((employee: any) =>
        employee.firstName.toLowerCase().includes(searchValue.toLowerCase())
      );
      console.log(filteredData);
    }
  }, [stored, searchValue]);

  return (
    <Main>
      <h2 className="uppercase font-bold text-center mt-10 text-3xl">
        Current employees
      </h2>
      <div className="flex justify-between w-full max-w-[1110px] mx-auto mt-8">
        <div>
          Show
          <Sorter />
          entries
        </div>
        <Search value={searchValue} setValue={setSearchValue} />
      </div>
      <EmployeesList />
    </Main>
  );
};

export default Employees;
