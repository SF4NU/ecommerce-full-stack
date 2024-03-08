import React, { useState } from "react";
import "./styles/slider.css"

function Slider() {
  return ( <>
  <div id="hcg-slider-1" class="hcg-slider">
	<div class="hcg-slide-container">
	<div class="hcg-slider-body">
		<a class="hcg-slides animated" style="display:flex">
			<span class="hcg-slide-number">1/5</span>
			<img src="https://www.html-code-generator.com/images/slider/1.png" alt="image 1"/>
			<span class="hcg-slide-text">image 1</span>
		</a>
	</div>
</div>
<div class="hcg-slide-dot-control"></div>
</div>

  </> );
}

export default Slider;