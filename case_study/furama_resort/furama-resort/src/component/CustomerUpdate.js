function CustomerUpdate() {
    return (
        <>
            <div>
                <div className="eight">
                    <h1>UPDATE CUSTOMER</h1>
                </div>
                <div className="container">
                    <form>
                        <div className="row">

                            <label htmlFor="username">
                            <i className="fa-solid fa-user"/> Name
                            </label>
                            <input id="username" name="username" type="text" placeholder="e.g. john doe" required />


                        </div>
                        <div className="row">
                            <div className="field col-6 mt-3">
                                <div htmlFor="dateOfBirth" style={{ paddingLeft: '5px' }}>
                                <i className="fa-solid fa-transgender" /> Gender
                                </div>
                                <span style={{ float: 'left', marginLeft: '80px' }}> <input type="radio" name="gender" defaultValue="Female" /> Female</span>
                                <span style={{ float: 'left', marginLeft: '60px' }}> <input type="radio" name="gender" defaultValue="Male" />Male</span>
                            </div>
                            <div className="field col-6 mt-3">
                                <label htmlFor="dateOfBirth">
                                <i className="fa-solid fa-calendar-days"/>Day of Birth
                                </label>
                                <input id="dateOfBirth" name="dd/mm/yyyy" type="date" placeholder="e.g. john doe" required />
                            </div>
                        </div>
                        <div className="row">
                            <div className="field col-6" tabIndex={2}>
                                <label htmlFor="email">
                                <i className="fa-solid fa-envelope"/>Your Email
                                </label>
                                <input id="email" name="email" type="text" placeholder="email@domain.com" required />
                            </div>
                            <div className="field col-6 mt-0" tabIndex={2}>
                                <label htmlFor="citizenId">
                                <i className="fa-solid fa-id-card"/>ID Card
                                </label>
                                <input id="citizenId" name="email" type="text"  required />
                            </div>
                        </div>
                        <div className="row">
                            <div className="field col-6" tabIndex={2}>
                                <label htmlFor="tel">
                                <i className="fa-solid fa-phone"/>Tel
                                </label>
                                <input id="tel" name="tel" type="text" placeholder="(+84) xxxxx xxxx" required />
                            </div>
                            <div className="field col-6 mt-0" tabIndex={2}>
                                <label htmlFor="address">
                                <i className="fa-solid fa-location-dot"/>Address
                                </label>
                                <input id="address" name="address" type="text" required />
                            </div>
                        </div>
                        <button type="reset">UPDATE</button>
                    </form>
                </div>
            </div>

        </>
    )
}
export default CustomerUpdate;