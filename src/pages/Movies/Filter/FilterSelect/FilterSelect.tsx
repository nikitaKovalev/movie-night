import "./FilterSelect.css";

interface Option {
  label: string;
  value: any;
}

interface MoviesFilterSelectProps {
  name: string;
  value: any;
  options: Option[];
  onValueChange: (value: Option['value']) => void;
}

export default function MoviesFilterSelect(
  {name, value, options, onValueChange}: MoviesFilterSelectProps
) {
  return (
    <select 
      className="mn-filter__select" 
      name={name} 
      value={value}
      onChange={(event) => onValueChange(event.target.value)}
      id={name} 
    >
      {
        options.map(opt => 
          <option key={opt.value + opt.label} value={opt.value}>
            {opt.label}
          </option>
        )
      }
    </select>
  );
}