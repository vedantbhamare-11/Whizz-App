import { useState } from "react";

type DropdownOption = {
  label: string;
  value: string;
  isChecked?: boolean;
};

type DropdownProps = {
  title: string;
  options: DropdownOption[];
  onOptionChange?: (value: string, isChecked: boolean) => void; // Optional callback
};

const Dropdown: React.FC<DropdownProps> = ({ title, options, onOptionChange }) => {
  const [selectedOptions, setSelectedOptions] = useState<{ [key: string]: boolean }>({});

  // Handle checkbox change
  const handleOptionChange = (value: string, isChecked: boolean) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [value]: isChecked,
    }));

    if (onOptionChange) {
      onOptionChange(value, isChecked);
    }
  };

  return (
    <div className="w-auto">
      <div className="text-lg font-semibold mb-2">{title}</div>
      <div className="space-y-2">
        {options.map((option) => (
          <div key={option.value} className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={selectedOptions[option.value] || false}
              onChange={(e) =>
                handleOptionChange(option.value, e.target.checked)
              }
              className="form-checkbox h-4 w-4 accent-[#3CAE06]" 
            />
            <label className="text-sm">{option.label}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
