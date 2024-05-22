import React from 'react'
import './howican.css'

const howican = () => {
  return (
    <>

      <div className="how">
       <div className='h1edit'> <h1>HOW I CAN <br /> HELP YOU</h1></div>

        <div className="cards">
          <div className="card">
            <h2>FREE <br />CONSULTATION</h2>
            <p>Use this area to describe one of <br /> your services.</p>
            <hr />
            <p>45 min</p>
            <button>Book It</button>
          </div>
          <div className="card-1">
            <h2>ONLINE <br />COACHING</h2>
            <p>Use this area to describe one of <br /> your services.</p>
            <hr />
            <p>1hr <br />$70</p>
            <button>Book It</button>
          </div>
          <div className="card-2">
            <h2>SELF- <br />IMPROVEMENT <br />WORKSHOP</h2>
            <p>Use this area to describe one of <br /> your services.</p>
            <hr />
            <p>Mon, Tue, Wed, Thu, Fri <br />1hr <br />$90</p>

            <button>Book It</button>
          </div>
        </div>
        <button className='btn-m'>More Services</button>

      </div>



    </>
  )
}

export default howican
