import React from "react";
import Yelp from "yelp-fusion";

const API_KEY = `hbTTBsVNv7GMAyhQ2rOB_5U4Hp4KzhzLZwyIXexTgdel2kIaoSTabmO-cRJjM6ItQp8OQ3v9AqxAREWwIMw8Ds-wyUaop90KUQBcaKBmd9Ieu31HQo1i6OFisURNZHYx`;

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
