import Card from "./Card"

export interface Items {
  src: string;
  name: string;
  age: number;
}
interface Props {
  items: Items[];
}

const CardContainer = ({ items }: Props) => {
  return (
    <div className='card-container'>
      <h1>{items.length} Birthdays Today</h1>
      <Card items={items} />
      <button>Clear All</button>
    </div>
  )
}

export default CardContainer
