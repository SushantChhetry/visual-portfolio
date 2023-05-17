import React, { useState } from "react";

const yelp = () => {
  const [location, setLocation] = useState("");
  const [restaurants, setRestaurants] = useState([]);

  const search = async () => {
    const apiKey = "YOUR_YELP_FUSION_API_KEY";
    const url = `https://api.yelp.com/v3/businesses/search?location=${location}&categories=restaurants`;

    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    });

    const data = await response.json();
    setRestaurants(data.businesses);
  };

  return (
    <div>
      <div>
        <h1>Yelp Search</h1>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button onClick={search}>Search</button>
        <ul>
          {restaurants.map((restaurant) => (
            <li key={restaurant.id}>
              <h2>{restaurant.name}</h2>
              <img src={restaurant.image_url} alt={restaurant.name} />
              <p>{restaurant.location.address1}</p>
              <p>{restaurant.phone}</p>
              <p>
                {restaurant.rating} stars ({restaurant.review_count} reviews)
              </p>
            </li>
          ))}
        </ul>
      </div>
      );
    </div>
  );
};

export default yelp;
