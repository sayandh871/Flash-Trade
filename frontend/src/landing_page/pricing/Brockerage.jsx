import React from 'react';
function Brockerage() {
    return ( 
        <div className="container">
            <div className="row">
                <div className="col-8">
                    <h3 className='fs-2 text-center mb-5'><a href="" style={{textDecoration:'none'}}>Brockerage calculator</a></h3>
                    <ul className='text-muted fs-5 ms-5'>
                        <li>Call & Trade and RMS auto-square: Additional charges of ₹50 + GST per order.</li>
                        <li>Digital contract notes will be sent via e-mail.</li>
                        <li>Physical copies of contract notes, if required, shall be charged ₹20 per contract note. Courier charges apply.</li>
                        <li>For NRI account (non-PIS), 0.5% or ₹100 per executed order for equity (whichever is lower).</li>
                        <li>For NRI account (PIS), 0.5% or ₹200 per executed order for equity (whichever is lower).</li>
                        <li>If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.</li>
                    </ul>
                </div>
                <div className="col-4">
                    <h2><a href="" style={{textDecoration:'none'}}>List of charges</a></h2>
                </div>
            </div>
        </div>
     );
}

export default Brockerage;