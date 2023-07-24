function ContractCreation() {
    return (
        <>
            <div id="container" >
                <h1>• Contract •</h1>
                <div className="underline">
                </div>
                <div className="icon_wrapper">
                    <div className="icon">
                        <span style={{ fontSize: '60px' }}><i className="fa-solid fa-file-signature" /></span>
                    </div>
                </div>
                <form action="#" method="post" id="contact_form">
                    <div className="telephone">
                        <label htmlFor="message_input" />
                        <input type="text" name="message" placeholder="Contract" id="message_input" required />
                    </div>
                    <div className="name">
                        <label htmlFor="name_input">CHECK IN</label>
                        <br />
                        <br />
                        <input type="date" placeholder="Check in" name="name" id="name_input" required />
                    </div>
                    <div className="email">
                        <label htmlFor="email_input">CHECK OUT</label>
                        <br />
                        <br />
                        <input type="date" placeholder="check out" name="email" id="email_input" required />
                    </div>
                    <div className="telephone">
                        <label htmlFor="deposit" />
                        <input type="text" placeholder="Deposit" name="telephone" id="deposit" required />
                    </div>
                    <div className="telephone">
                        <label htmlFor="telephone_input" />
                        <input type="text" placeholder="total" name="telephone" id="telephone_input" required />
                    </div>
                    <div className="submit">
                        <input type="submit" defaultValue="Send" id="form_button" />
                    </div>
                </form>{/* // End form */}
            </div>{/* // End #container */}

        </>
    )
}
export default ContractCreation;