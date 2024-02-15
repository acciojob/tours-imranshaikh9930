import React from 'react'
import Tour from './Tour'
function Tours({arr,removeTour}) {
  return (
    <section>
        <h2>Tours</h2>
        <div className="tour-list">
            {
                arr.map((tour)=>(
                    <Tour key={tour.id} tour={tour} removeTour={removeTour}/>
                ))
            }
        </div>
    </section>
  )
}

export default Tours