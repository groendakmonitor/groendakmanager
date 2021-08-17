import { BiodiversityData } from "models/biodiversity"
import { ChangeEvent, useState } from "react";
const monthNames = [
  "january",
  "february",
  "march",
  "april",
  "may",
  "june",
  "july",
  "august",
  "september",
  "october",
  "november",
  "december"
];

interface Props {
  data: BiodiversityData
  onChange: (name: string, value: number) => void;
}

const BiodiversityRow = (props: Props) => {
  const { data, onChange } = props;
  const text = `${data.name} (${monthNames[data.date_month]} ${data.date_day})`
  const [value, setValue] = useState(data.biodiversity);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.currentTarget.value);
    setValue(newValue);
    onChange(data.name, newValue);
  }
  return (
    <tr>
      <td>{text}</td>
      <td>
        <input type="number" value={value} onChange={handleChange} />
      </td>
    </tr>
  )
}

export default BiodiversityRow;