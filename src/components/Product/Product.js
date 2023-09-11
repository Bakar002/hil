import React, { useState } from "react";
import "./App.css";
import { Container } from "@mui/material";

import Gallery from "./Components/Gallery";
import Description from "./Components/Description";
import MobileGallery from "./Components/MobileGallery";
import prod1 from "../Product/Pictures/c170.webp" ;
import prod2 from "../Product/Pictures/c390.webp";


import thumb1 from "../Product/Pictures/c170.webp";
import thumb2 from "../Product/Pictures/c390.webp";


const IMAGES = [prod1, prod2, ];
const THUMBS = [thumb1, thumb2];

function Product() {
  const [quant, setQuant] = useState(0);
  const [orderedQuant, setOrderedQuant] = useState(0);


  const addQuant = () => {
    setQuant(quant + 1);
  };

  const removeQuant = () => {
    setQuant(quant - 1);
  };
  const [dataFromChild, setDataFromChild] = useState(null);
  const [qun, setqun] = useState("170GM");
  const [pack, setpack] = useState("");

  const handleDataFromChild = (data) => {
    setDataFromChild(data);
    console.log(data)
    if (data==="/static/media/c390.43b16a0da0ff6b4c01d9.webp") {
      setqun("390GM")
    }
    else{
      setqun("170GM")
    }
  };
  const handleDataFromChild1 = (data) => {
    setDataFromChild(data);
    console.log(data)
    if (data==="/static/media/c390.43b16a0da0ff6b4c01d9.webp") {
      setqun("390GM")
    }
    else if(data==="/static/media/c170.43b16a0da0ff6b4c01d9.webp"){
      setqun("170GM")
    }
  };

  return (
    <main className="App container min-h-screen ">
      <Container component="section" maxWidth={"lg"}>
     
        <section className="core">
          <Gallery IMAGES={IMAGES} THUMBS={THUMBS} prod1={prod1} sendDataToParent={handleDataFromChild}/>
          <MobileGallery IMAGES={IMAGES} THUMBS={THUMBS} prod1={prod1} sendDataToParent1={handleDataFromChild1} />
          <Description
         
            qun={qun}
            pack="tin"
          />
        </section>
      </Container>
    
    </main>
  );
}

export default Product;
