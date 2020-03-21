import React, { Component } from "react";
import Title from "./Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "free cocktail",
        info: "welcome to my resort"
      },
      {
        icon: <FaHiking />,
        title: "Endless Hiking",
        info: "welcome to my resort"
      },
      {
        icon: <FaShuttleVan />,
        title: "Free ShuttleVan",
        info: "welcome to my resort"
      },
      {
        icon: <FaBeer />,
        title: "Best Beer",
        info: "welcome to my resort"
      }
    ]
  };

  render() {
    return (
      <section className="services">
        <Title title="services"></Title>
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
