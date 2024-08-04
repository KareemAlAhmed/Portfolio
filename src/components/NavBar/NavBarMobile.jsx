import React, { useEffect } from 'react'
import "./NavBarMobile.css"
export default function NavBarMobile() {
  document.querySelectorAll(".menu__btn").forEach(dropDownFunc);

// Dropdown Open and Close function
function dropDownFunc(dropDown) {
  if (dropDown.classList.contains("menu__btn") === true) {
    dropDown.addEventListener("click", function (e) {
      e.preventDefault();
      console.log(dropDown)
      if (this.nextElementSibling.classList.contains("active") === true) {
        // Close the clicked dropdown
        this.parentElement.classList.remove("active");
      } else {
        // Close the opend dropdown
        closeDropdown();
        // add the open and active class(Opening the DropDown)
        this.parentElement.classList.add("active");
      }
    });
  }
}

// Listen to the doc click
window.addEventListener("click", function (e) {
  // Close the menu if click happen outside menu
  if (e.target.closest(".menu") === null) {
    // Close the opend dropdown
    closeDropdown();
  }
});

// Click for Mobile
window.addEventListener("touchstart", function (e) {
  // Close the menu if click happen outside menu
  if (e.target.closest(".menu") === null) {
    // Close the opend dropdown
    closeDropdown();
  }
});

// Close the openend Dropdowns
function closeDropdown() {
  // remove the open and active class from other opened Dropdown (Closing the opend DropDown)
  document.querySelectorAll(".menu").forEach(function (container) {
    container.classList.remove("active");
  });
}
useEffect(()=>{ document.querySelectorAll(".menu__btn").forEach(dropDownFunc)},[])
  return (
    <div className="wrapMenu showForMob">
    <div className="menu menu--top-right" id="menu_top_right">
      <a className="menu__btn" dd-nav-expand="menu_top_right" href='' onClick={(e)=>e.preventDefault()} >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/></svg>
      </a>
      <ul className="menu__list">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">News</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </div>
  </div>
  )
}
