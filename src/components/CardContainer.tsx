import Card from "./Card"

export interface Items {
  src: string;
  name: string;
  age: number;
}
interface Props {
  items: Items[];
  handleClear: () => void;
  handleReset: () => void;
}

const CardContainer = ({ items, handleClear, handleReset }: Props) => {
  return (
    <div className='card-container'>
      <h2 style={{ marginBottom: '10px' }}>{items.length} Birthdays Today</h2>
      <Card items={items} />
      {/* Implement clear all functioanlity - pass it to parent and setData to an empty [] */}
      <button className='btn-primary' onClick={handleClear}>Clear All</button>
      <button className='btn-outline' onClick={handleReset}>Reset</button>
    </div>
  )
}

export default CardContainer
