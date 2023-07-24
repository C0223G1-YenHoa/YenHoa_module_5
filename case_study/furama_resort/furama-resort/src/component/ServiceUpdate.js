function ServiceUpdate() {
  return (
    <>
      <div className="container">
        <div className="text">
          UPDATE SERVICE
        </div>
        <form action="#">
          <div className="form-row">
            <div className="input-data">
              <input id={1} type="text" required />
              <div className="underline" />
              <label htmlFor={1}>Service Name</label>
            </div>
            <div>
              <div className="dropdown">
                <input type="checkbox" id="dropdown1" />
                <label className="dropdown__face" htmlFor="dropdown1">
                  <div className="dropdown__text">Service Type</div>
                  <div className="dropdown__arrow" />
                </label>
                <ul className="dropdown__items">
                  <li>Room</li>
                  <li>House</li>
                  <li>Villa</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="form-row">
            <div className="input-data">
              <input id={3} type="number" required />
              <div className="underline" />
              <label htmlFor={3}>Rental Costs</label>
            </div>
            <div className="input-data">
              <input id={4} type="number" required />
              <div className="underline" />
              <label htmlFor={4}>Max number of people</label>
            </div>
          </div>
          <div className="form-row">
            <div className="input-data">
              <input id={2} type="number" required />
              <div className="underline" />
              <label htmlFor={2}>Usable Area</label>
            </div>
            <div>
              <div className="dropdown">
                <input type="checkbox" id="dropdown" />
                <label className="dropdown__face" htmlFor="dropdown">
                  <div className="dropdown__text">Type</div>
                  <div className="dropdown__arrow" />
                </label>
                <ul className="dropdown__items">
                  <li>Year</li>
                  <li>Month</li>
                  <li>Day</li>
                </ul>
              </div>
              <svg>
                <filter id="goo">
                  <feGaussianBlur in="SourceGraphic" stdDeviation={10} result="blur" />
                  <feColorMatrix in="blur" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
                  <feBlend in="SourceGraphic" in2="goo" />
                </filter>
              </svg>
            </div>
          </div>
          <div className="form-row">
            <div className="input-data">
              <input id={5} type="text" required />
              <div className="underline" />
              <label htmlFor={5}>Standard</label>
            </div>
            <div className="input-data">
              <input id={6} type="text" required />
              <div className="underline" />
              <label htmlFor={6}>Description</label>
            </div>
          </div>
          <div className="form-row">
            <div className="input-data">
              <input id={7} type="number" required />
              <div className="underline" />
              <label htmlFor={7}>Pool</label>
            </div>
            <div className="input-data">
              <input id={8} type="number" required />
              <div className="underline" />
              <label htmlFor={8}>Floor</label>
            </div>
            <div className="input-data">
              <input id={9} type="text" required />
              <div className="underline" />
              <label htmlFor={9}>Free</label>
            </div>
          </div>
          <div className="form-row submit-btn">
            <div className="input-data">
              <div className="inner" />
              <input type="submit" defaultValue="submit" />
            </div>
          </div>
        </form>
      </div>

    </>
  )
}
export default ServiceUpdate;