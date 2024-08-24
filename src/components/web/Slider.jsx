import { useState, useEffect } from "react";

// Import API service
import Api from "../../services/Api";

// Import Carousel component
import { Carousel } from "react-bootstrap";

// Import Loading component
import Loading from "../general/Loading";

export default function Slider() {
  // Initialize state
  const [sliders, setSliders] = useState([]);
  const [loadingSlider, setLoadingSlider] = useState(true);

  // Fetch data
  const fetchDataSliders = async () => {
    // Set loading state to true
    setLoadingSlider(true);

    await Api.get("/api/public/sliders").then((response) => {
      // Assign response to state "sliders"
      setSliders(response.data.data);

      // Set loading state to false
      setLoadingSlider(false);
    });
  };

  // useEffect hook
  useEffect(() => {
    // Call method "fetchDataSliders"
    fetchDataSliders();
  }, []);

  return (
    <>
      {loadingSlider ? (
        <Loading />
      ) : sliders.length === 0 ? (
        <>
        
        </>
      ) : (
        <Carousel
          prevIcon={
            <i className="fa fa-chevron-left fa-lg carousel-custom text-dark shadow-sm"></i>
          }
          nextIcon={
            <i className="fa fa-chevron-right fa-lg carousel-custom text-dark shadow-sm"></i>
          }
        >
          {sliders.map((slider) => (
            <Carousel.Item key={slider.id}>
              <img
                className="d-block w-100"
                src={slider.image}
                style={{ height: "500px", objectFit: "cover" }}
                alt={`Slider ${slider.id}`}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      )}
    </>
  );
}
