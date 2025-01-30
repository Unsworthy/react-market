import { useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import banner1 from "../assets/valooe.jpg";
import banner2 from "../assets/valorun.jpg";
import banner3 from "../assets/jett.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import CardProduct from "../component/CardProduct";
import { useSelector } from "react-redux";

const Home = () => {
  const [bannerData] = useState([
    {
      title: "Banner 1",
      Image: banner1,
    },
    {
      title: "Banner 2",
      Image: banner2,
    },
    {
      title: "Banner 3",
      Image: banner3,
    },
  ]);

  const { product } = useSelector((root) => root);

  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    autoplay: true,
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <Slider {...settings}>
          {bannerData.map((banner, index) => (
            <img src={banner.Image} alt={banner.title} key={index} />
          ))}
        </Slider>
      </div>
      <div className="container">
        <div className="row">
          {product?.map((product, index) => (
            <CardProduct key={index} {...product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
