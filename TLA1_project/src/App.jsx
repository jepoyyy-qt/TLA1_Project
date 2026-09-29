import { useState } from "react";
import IncomeForm from "./components/IncomeForm";
import IncomeTable from "./components/IncomeTable";
import Dashboard from "./components/Dashboard";
import "./App.css";


function App() {

  const [categories, setCategories] = useState([]);


  function addCategory(category){

    setCategories([
      ...categories,
      category
    ]);

  }


  function deleteCategory(id){

    setCategories(
      categories.filter(
        item => item.id !== id
      )
    );

  }


  return (

    <div className="container">

      <h1>
        💰 Smart Income Category Ledger
      </h1>


      <Dashboard 
        total={categories.length}
      />


      <IncomeForm 
        addCategory={addCategory}
      />


      <IncomeTable
        categories={categories}
        deleteCategory={deleteCategory}
      />


    </div>

  )

}


export default App;