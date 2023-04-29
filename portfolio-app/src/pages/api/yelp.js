import React from "react";
import Yelp from "yelp-fusion";

const API_KEY = ``;

const yelpClient = Yelp.client(API_KEY);

const searchParams = {
  term: "sushi",
};

yelpClient
  .search(searchParams)
  .then((response) => {
    const business = response.jsonBody.businesses;
    console.log(business);
  })
  .catch((err) => {
    console.log(err);
  });
