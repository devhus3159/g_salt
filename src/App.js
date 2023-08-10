import React from "react";
import bottles from "./bottles.png";
import bundle from "./bundle.png";
import cans from "./cans.png";
import collections from "./collections.png";
import hydrate from "./hydrate.png";
import tubs from "./tubs.png";
import "./App.css";

export const Desktop = () => {
  return (
    <div className="desktop">
      <div className="div">
        <div className="overlap-group">
          <div className="rectangle" />
        </div>
        <div className="rectangle-2" />
        <img src={tubs} className="image" alt=""/>
        <img src={hydrate} className="img" alt=""/>
        <img src={bundle} className="image-2" alt=""/>
        <img src={collections} className="image-3" alt=""/>
        <img src={cans} className="image-4" alt=""/>
        <img src={bottles} className="image-5" alt=""/>
        <div className="text-wrapper">Energy</div>
        <div className="text-wrapper-2">Hydration</div>
        <div className="text-wrapper-3">Bundles</div>
        <div className="text-wrapper-4">Collectors Editions</div>
        <div className="text-wrapper-5">Cans</div>
        <div className="text-wrapper-6">Shakers</div>
      </div>
    </div>
  );
};

export default App;
