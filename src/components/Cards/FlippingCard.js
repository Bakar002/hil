import { useRef } from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import { Link } from 'react-router-dom';
import "./FlippingCard.css"
function FlippingCard({ title, detail, image, path }) {
  const ref = useRef();
  return (
    <div className="">
    <Flippy
      flipOnHover={true}
      flipOnClick={true}
      flipDirection="horizontal"
      ref={ref}
      style={{  width: '300px', height: '400px', borderRadius: '10px', border:'none'}}
    >
      <FrontSide style={{  backgroundColor: 'transparent', height: '400px', boxShadow: 'none', border: 'none'}}>
        <img src={image} alt={title} className="w-full h-full object-contain  " />
       
      </FrontSide>
      <BackSide style={{ backgroundColor: 'white', borderRadius: '10px', height: 'auto', width: '250px', marginTop: '20px' }}>
  <div className="text-black h-full flex flex-col justify-between p-2">
    <div className="mb-1">
      <h3 className="text-2xl font-semibold mx-auto">{title}</h3>
      <p className="mt-2">{detail}</p>
    </div>
    <div className="flex justify-center mx-auto">
      <Link to={path}>
        <button type="button" className="btn btn-red" onClick={() => scrollToTop()}>
          Get the product
        </button>
      </Link>
    </div>
  </div>
</BackSide>



    </Flippy>
    </div>
  )
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
export default FlippingCard;