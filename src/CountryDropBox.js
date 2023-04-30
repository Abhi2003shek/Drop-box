import React, { useState } from 'react';
import CustomSelectBox from './SelectBox';
import './App.css';
const CountryStateDropdown = () => {

const countryOptions = ['Select a country','India', 'USA', 'Canada'];
const stateOptions = {
  'Select a country': [],
  India: ['Select a state','Karnataka','Himachal Pradesh','Punjab','Kerala'],
  USA: ['Select a state', 'California', 'Florida', 'Texas'],
  Canada: ['Select a province', 'Ontario', 'Quebec', 'British Columbia'],
};

  const [selectedCountry, setSelectedCountry] = useState('Select a country');
  const [selectedState, setSelectedState] = useState('');

  const handleCountryChange = (country) => {
    setSelectedCountry(country);
    setSelectedState('');
  };

  const handleStateChange = (state) => {
    setSelectedState(state);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedCountry === 'Select a country') {
      alert('Please select a country');
      return;
    }
    if (selectedState === '') {
      alert('Please select a state/province');
      return;
    }else{
        alert("Country & State Submitted");
            setSelectedCountry('Select a country');
            setSelectedState('');
    }
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <CustomSelectBox options={countryOptions} onChange={handleCountryChange} />
        {selectedCountry !== 'Select a country' && (
          <CustomSelectBox options={stateOptions[selectedCountry]} onChange={handleStateChange} />
        )}
        <button type="submit" className='button1'>Submit</button>
      </form>
    </div>
  );
};

export default CountryStateDropdown;
