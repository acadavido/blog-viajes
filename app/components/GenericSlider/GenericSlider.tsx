import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useEffect, useState } from "react";
import BlogCard from "../BlogCard/BlogCard";

interface Item {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

export interface GenericSliderProps {
  items: Item[];
}
export default function GenericSlider({ items }: GenericSliderProps) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <div>Loading...</div>;
  }

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {items.map((item, index) => (
          <div key={index}>
            <BlogCard
              id={item.id}
              image={item.image}
              title={item.title}
              description={item.description}
              link={item.link}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
