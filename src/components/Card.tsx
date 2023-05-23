import { Items } from "./CardContainer"

interface Props {
  items: Items[];
}



const Card = ({ items }: Props) => {
  return (
    <>
      {items.map((item) => <div key={item.name} className='card-wrap' >
        <div className="img-wrap">
          <img src={item.src} alt="images" />
        </div>
        <div className='card-content'>
          <h3 style={{ color: '#1E293B', fontWeight: '600' }}>{item.name}</h3>
          <h4 style={{ color: '#64748B' }}>{item.age}</h4>
        </div>
      </div>)}

    </ >
  )
}

export default Card
