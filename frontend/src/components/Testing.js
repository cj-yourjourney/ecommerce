import React from "react";
import { useState, useEffect } from "react";

function Testing(person) {
  console.log("testing some code")

  const [dogImage, setDogImage] = useState(null)
  console.log("1:" + dogImage)

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => setDogImage(data.message));
  }, []);

  return (
    <div>
        {dogImage && <img src={dogImage}/> }
    </div>
  )
}

export default Testing;
