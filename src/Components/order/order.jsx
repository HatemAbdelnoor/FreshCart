import React, { useState } from 'react';

const OrderRequestForm = () => {
  const [shippingAddress, setShippingAddress] = useState('');
  const [details, setDetails] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create the order request object
    const orderRequest = {
      shippingAddress,
      details,
      phone,
      city
    };

    // Perform actions with the order request, such as sending it to an API
    console.log('Order Request:', orderRequest);

    // Reset the form fields
    setShippingAddress('');
    setDetails('');
    setPhone('');
    setCity('');
  };

  return <> 
  <div className='container-fluid col-md-10 d-flex justify-content-center mt-5  align-content-center'>  
  
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="shippingAddress">Shipping Address:</label>
        <input
          type="text"
          id="shippingAddress"
          value={shippingAddress}
          onChange={(e) => setShippingAddress(e.target.value)}
          required
        />
      </div>

      <div>
        <label htmlFor="details">Details:</label>
        <textarea
          id="details"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          required
        ></textarea>
      </div>

      <div>
        <label htmlFor="phone">Phone:</label>
        <input
          type="text"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
      </div>

      <div>
        <label htmlFor="city">City:</label>
        <input
          type="text"
          id="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
        />
      </div>

      <button type="submit">Submit</button>
    </form>
    </div>
    </>
};

export default OrderRequestForm;