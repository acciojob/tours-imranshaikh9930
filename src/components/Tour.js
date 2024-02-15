import React,{useState} from 'react'

function Tour({tour,removeTour}) {
    const [showMore, setShowMore] = useState(false);

    const toggleShowMore = () => {
      setShowMore(!showMore);
    };
  return (
    <article className="tour">
        <img src={tour.image} alt={tour.name} />
        <div>
            <h3>{tour.name}</h3>
            <p id={`tour-item-para-${tour.id}`}>{showMore ? tour.info : `${tour.info.substring(0, 200)}...`} <button onClick={toggleShowMore} id={`see-more-${tour.id}`}>{showMore ? 'See less' : 'Show more'}</button></p>
            <p>{tour.price}</p>
            <button id={`delete-btn-${tour.id}`} onClick={()=>removeTour(tour.id)}>Delete</button>
        </div>
    </article>
  )
}

export default Tour