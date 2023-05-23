import Card from "./Card"

interface Items {
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
      <h1>5 Birthdays Today</h1>
      <Card />
      <button>Clear All</button>
    </div>
  )
}

export default CardContainer
