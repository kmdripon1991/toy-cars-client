import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Card from "./Card";

const ShopCategory = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch("https://glitter-tidy-gondola.glitch.me/cars")
      .then((res) => res.json())
      .then((data) => setCars(data));
  }, []);

  const sportsCars = cars.filter((car) => car.toy_category === "Sports Cars");
  const trucks = cars.filter((car) => car.toy_category === "Trucks");
  const miniFireTrucks = cars.filter(
    (car) => car.toy_category === "Mini Fire Trucks"
  );
  // console.table(sportsCar, truck, miniFireTruck)
  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>Sports Car</Tab>
          <Tab>Truck</Tab>
          <Tab>Mini Fire Truck</Tab>
        </TabList>

        <TabPanel>
          <div className="grid grid-cols-3 gap-3">
            {sportsCars.map((item) => (
              <Card key={item._id} item={item}></Card>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-3 gap-3">
            {trucks.map((item) => (
              <Card key={item._id} item={item}></Card>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-3 gap-3">
            {miniFireTrucks.map((item) => (
              <Card key={item._id} item={item}></Card>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ShopCategory;
