import { Items } from "./CardContainer"

interface Props {
  items: Items[];
}



const Card = ({ items }: Props) => {
  return (
    <>
      {items.map((item) => <div className='card-wrap' >
        <div className="img-wrap">
          <img src={item.src} alt="images" />
        </div>
        <div className='card-content'>
          <h2>{item.name}</h2>
          <h4>{item.age}</h4>
        </div>
      </div>)}

    </ >
  )
}

export default Card
