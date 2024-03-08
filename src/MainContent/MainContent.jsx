import React, { useState } from 'react'
import Card from './Cards/Card';
import "./styles/MainContent.css"

function MainContent() {
  return ( <>
    <section className="game-cards">
      <div className="search-bar-div">
        <input placeholder='Enter game name' type="text" />
      </div>
      <div className="main-cards-div">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
    </section>
  </> );
}

export default MainContent;