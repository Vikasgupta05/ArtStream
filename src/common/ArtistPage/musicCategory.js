// import React, { useState, useEffect } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { Container, Row, Card, Button } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import MainCategory from "./MainCategory";




// // const Musicians = () => {
// //   const initialMusicians = [
// //     { name: "Musician 1", image: "https://via.placeholder.com/150" },
// //     { name: "Musician 2", image: "https://via.placeholder.com/150" },
// //     { name: "Musician 3", image: "https://via.placeholder.com/150" },
// //   ];

// //   const [musicians, setMusicians] = useState(initialMusicians);

// //   useEffect(() => {
// //     const newMusician = {
// //       name: "New Musician",
// //       image: "https://via.placeholder.com/150",
// //     };
// //     const timer = setTimeout(() => {
// //       setMusicians((prevMusicians) => [...prevMusicians, newMusician]);
// //     }, 3000);

// //     return () => clearTimeout(timer);
// //   }, []);

// //   return <MainCategory categoryTitle="Musicians" artists={musicians} />;




  
// // };




import React,{useState} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Musicians = () => {
  const Musicians = [
    { id: 1, name: "Jordain Schwieso", headline: "Job of the artist is always to deepen the mystery." },
    { id: 2, name: "Minette Beisley", headline: "Job of the artist is always to deepen the mystery." },
    { id: 3, name: "Mile Dudleston", headline: "Job of the artist is always to deepen the mystery." },
    { id: 4, name: "Ianthe Abbs", headline: "Job of the artist is always to deepen the mystery." },
    { id: 5, name: "Ania Duggon", headline: "Job of the artist is always to deepen the mystery." },
    { id: 6, name: "Neddie Dossit", headline: "Job of the artist is always to deepen the mystery." },
    { id: 7, name: "Almeta Raubenheimer", headline: "Job of the artist is always to deepen the mystery." },
  ];

  const [data, setData] = useState(Musicians);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <span>next</span>,
    prevArrow: <span>prev</span>,
     autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Container className="px-5 py-3" fluid style={{ backgroundColor: "#efeeea" }}>
      <h3 style={{textAlign:"left"}} >New Musicians</h3>
      <hr />
      <Slider {...settings}>
        {data.map((el) => (
          <div key={el.id} style={{ padding: "10px" }}>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                style={{ height: "190px" }}
                variant="top"
                src={"https://tse1.mm.bing.net/th?id=OIP.GPFEY6kfgxbsja6gmrW6rwHaE7&pid=Api"}
              />
              <Card.Body>
                <Card.Title>{el.name}</Card.Title>
                <Link to={`/`}>
                  <Button style={{ width: "100%" }} variant="primary">
                    Book
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </div>
        ))}
      </Slider>
    </Container>
  );
};

export default Musicians;
