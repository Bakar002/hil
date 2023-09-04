import React, { useState } from "react";
import "./App.css";
import { Container } from "@mui/material";

import Gallery from "./Components/Gallery";
import Description from "./Components/Description";
import MobileGallery from "./Components/MobileGallery";
import prod1 from "../Product2/Pictures/B25.png" ;
import prod2 from "../Product2/Pictures/p2.25.jpeg";
import prod3 from "../Product2/Pictures/p250.png";
import prod4 from "../Product2/Pictures/p400.jpg";
import prod5 from "../Product2/Pictures/p900.png";


import thumb1 from "../Product2/Pictures/B25.png" ;
import thumb2 from "../Product2/Pictures/p2.25.jpeg";
import thumb3 from "../Product2/Pictures/p250.png";
import thumb4 from "../Product2/Pictures/p400.jpg";
import thumb5 from "../Product2/Pictures/p900.png";


const IMAGES = [prod1, prod2,prod3,prod4,prod5];
const THUMBS = [thumb1, thumb2,thumb3,thumb4,thumb5];

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
  const [qun, setqun] = useState("25kg");
  const [pack, setpack] = useState("Bag");
  const handleDataFromChild1 = (data) => {
    setDataFromChild(data);
    console.log(data)
    if (data==="/static/media/B25.a6225db397d7ce6730bf.png") {
      setqun("25kg")
      setpack("bag")
    }
    else if(data==="/static/media/p2.25.e1065ef4e8e6e5bf4f8e.jpeg"){
      setqun("2.25kg")
      setpack("pouch")
    }
    else if(data==="/static/media/p250.2fa69a3d384695abef6e.png"){
      setqun("250GM")
      setpack("pouch")
    }
    else if(data==="/static/media/p400.099223f244380660e57b.jpg"){
      setqun("400GM")
      setpack("pouch")
    }
    else if(data==="/static/media/p900.b09fc495bb31c23d139e.png"){
      setqun("900GM")
      setpack("pouch")
    }
  };

  const handleDataFromChild = (data) => {
    setDataFromChild(data);
    console.log(data)
    if (data==="/static/media/B25.a6225db397d7ce6730bf.png") {
      setqun("25kg")
      setpack("bag")
    }
    else if(data==="/static/media/p2.25.e1065ef4e8e6e5bf4f8e.jpeg"){
      setqun("2.25kg")
      setpack("pouch")
    }
    else if(data==="/static/media/p250.2fa69a3d384695abef6e.png"){
      setqun("250GM")
      setpack("pouch")
    }
    else if(data==="/static/media/p400.099223f244380660e57b.jpg"){
      setqun("400GM")
      setpack("pouch")
    }
    else if(data==="/static/media/p900.b09fc495bb31c23d139e.png"){
      setqun("900GM")
      setpack("pouch")
    }
  };

  return (
    <main className="App mt-8 min-h-screen" >
      <Container component="section" maxWidth={"lg"}>
     
        <section className="core">
          <Gallery IMAGES={IMAGES} THUMBS={THUMBS} prod1={prod1} sendDataToParent={handleDataFromChild}/>
          <MobileGallery IMAGES={IMAGES} THUMBS={THUMBS} prod1={prod1} sendDataToParent1={handleDataFromChild1} />
          <Description
         
            qun={qun}
            pack={pack}
          />
        </section>
      </Container>
    
    </main>
  );
}

export default Product;
