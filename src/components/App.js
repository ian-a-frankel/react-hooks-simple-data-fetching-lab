// create your App component here

import React, { useEffect, useState } from "react";

function App() {
    const [picture, setPicture] = useState(<p>Loading...</p>)
    useEffect(() => {
        fetch("http://dog.ceo/api/breeds/image/random")
          .then((response) => response.json())
          .then(data => {
            setPicture(<img src={data.message}/>)
            }
          );
      }, [setPicture])

      return picture
}

export default App