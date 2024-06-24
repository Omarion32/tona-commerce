import React from "react";

import "./home.css";
import Product from "../product/Product";





function Home() {
  return (
    <div>
      <div >
        <img
          className="home_image"
          src="https://m.media-amazon.com/images/I/51AxBGnRSeL._SX1500_.jpg"
          alt=""
        />
        <div className="home_row">
          <Product
            id="123"
            title="The Family Across the Street: A totally unputdownable psychological thriller with a shocking twist"
            price={900}
            rating={4}
            img="	https://m.media-amazon.com/images/I/71KnOamOInL._AC_UL320_.jpg"
          />
          <Product
            id="1234"
            title='"HP Notebook Laptop, 15.6" HD Touchscreen, Intel Core i3-1115G4 Processor, 32GB RAM, 1TB PCIe SSD, Webcam, Type-C, HDMI, SD Card Reader, Wi-Fi, Windows 11 Home, Silver
            "'
            price={452}
            rating={5}
            img="https://m.media-amazon.com/images/I/61oAh3XrX+L._AC_UY218_.jpg"
          />
        </div>
        <div className="home_row">
          <Product id="1235"
            title="Targus Laptop Bag Classic Slim Briefcase Messenger Bag, Spacious, Ergonomic, Foam Padded Laptop Case for Devices"
            price={1200}
            rating={4}
            img="https://m.media-amazon.com/images/I/91snb7T4oeS._AC_UY395_.jpg" />
          <Product id="12311"
            title="Caseology Nano Pop Mag for iPhone 15 Pro Max Case 5G [Dual Layer Silicone Case Compatible with Magsafe] Military Grade Drop Tested (2023) - Burgundy Bean"
            price={4200}
            rating={4}
            img="https://m.media-amazon.com/images/I/61-PP8yn4dL._AC_UY218_.jpg" />
          <Product id="1236"
            title="Cubiker Computer Deska, 63 Inch Modern Simple Style Desk for Home Office, Sturdy Writing Desk with Storage Bag, White "
            price={9999.99}
            rating={4}
            img="https://m.media-amazon.com/images/I/71e6XXGcc5L._AC_UL320_.jpg" />
        </div>
        <div className="home_row">
          <Product id="1237"
            title="SteelSeries Arena 9 Illuminated 5.1 Desktop Gaming Speakers – 5.1 USB Surround Sound – Wireless Rear Speakers – 2-Way Speaker Design – Subwoofer – RGB Light, Bluetooth – PC, PlayStation, Mobile, Mac"
            price={54900}
            rating={4}
            img="	https://m.media-amazon.com/images/I/714pb94-8DL._AC_UY218_.jpg" />
        </div>
        <div className="home_row">
          <Product
            id="123"
            title="ESV Church Bible (Black) Hardcover – October 31"
            price={1100}
            rating={4}
            img="	https://m.media-amazon.com/images/I/61gPEiyt0iL._AC_UL320_.jpg"
          />
          <Product
            id="1234"
            title='"MNSDHFGV Blue Hardcover Quran Mushaf Holy Quran Arabic Only Medium Size 5.5 X 8 In Arabic Text Uthmani Script Cover Design may
            "'
            price={3000}
            rating={5}
            img="https://m.media-amazon.com/images/I/91iGVv1WDGL._AC_UL320_.jpg"
          />
        </div>
        <div className="home_row">
          <Product id="1235"
            title="Canon XA70 Pro Camcorder 1” 4K UHD CMOS Sensor, Dual-Pixel CMOS AF, 15x Optical Zoom, 600x Digital Zoom, Image Stabilization, HDMI, USB Live Streaming, Time Stamp On-Screen Disp. Recording, XLR inputs"
            price={229900}
            rating={4}
            img="https://m.media-amazon.com/images/I/61vbYqOrB6L._AC_UY218_.jpg" />
          <Product id="12311"
            title="ZGFF Heavy Duty Gaming Chair, E-Sports Table Chair Integrated Cockpit, Ergonomic Computer Chair, Adjustable Comes with Massage Lumbar Support + Footrest"
            price={2420400}
            rating={4}
            img="https://m.media-amazon.com/images/I/61Y7LQP5+xL._AC_SX425_.jpg" />
          <Product id="1236"
            title="Gildan Men's Crew T-Shirts, Multipack, Style G1100"
            price={900}
            rating={4}
            img="https://m.media-amazon.com/images/I/81X9VMM-I4L._AC_UL320_.jpg" />
        </div>
      </div>
    </div>
  );
}

export default Home;
