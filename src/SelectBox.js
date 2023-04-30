import React,{useState} from 'react';
import './App.css';

const CustomSelectBox = ({ options, onChange }) => {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setShowOptions(false);
    onChange(option);
  };
 return (
    <div className="custom-select-box-container">
      <div className="custom-select-box-selected" onClick={() => setShowOptions(!showOptions)}>
        {selectedOption}
      </div>
      {showOptions && (
        <div className="custom-select-box-options">
          {options.map((option, index) => (
            <div
              key={index}
              className={`custom-select-box-option ${option === selectedOption ? 'selected' : ''}`}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomSelectBox;

