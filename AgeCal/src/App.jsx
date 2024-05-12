import { useState } from "react";
import './App.css'
import AgeCalculatorForm from "./Components/AgeCalculatorForm";
import AgeResults from "./Components/AgeResults";
import { differenceInDays, differenceInMonths, differenceInYears } from "date-fns";

function App() {
  const [age, setAge] = useState(null);
  const [showForm, setShowForm] = useState(true); // State variable to control form visibility

  const CalculateAge = (birthdate) => {
    const today = new Date();
    const birthDateobj = new Date(birthdate);
    const ageYear = differenceInYears(today, birthDateobj);
    const ageMonths = differenceInMonths(today, birthDateobj);
    const ageDays = differenceInDays(today, birthDateobj);

    setAge({
      Years: ageYear,
      Months: ageMonths,
      Days: ageDays,
    });

    // Hide the form when age is calculated
    setShowForm(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-a23c33 to-black flex justify-center items-center">
      <div className="max-w-md px-8 py-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-semibold mb-4 text-center">AGE CALCULATOR</h1>
        {/* Render AgeCalculatorForm only if showForm is true */}
        {showForm && <AgeCalculatorForm CalculateAge={CalculateAge} />}
        {/* Render AgeResults only if age is not null */}
        {age && <AgeResults age={age} />}
      </div>
    </div>
  );
}

export default App;
