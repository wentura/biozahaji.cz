import React from "react";
import BezKempu from "./social/bezkempu";
import Fb from "./social/fb";
import Ig from "./social/ig";
export default function Social() {
  return (
    <div className="flex gap-4">
      <Fb />
      <Ig />
      <BezKempu />
    </div>
  );
}
