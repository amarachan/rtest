// import React from 'react'
// import { render } from 'react-dom'
// import { Map, Marker, Popup, TileLayer } from 'react-leaflet'

// const position = [51.505, -0.09]
// const map = (
//   <Map center={position} zoom={13}>
//     <TileLayer
//       url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//       attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
//     />
//     <Marker position={position}>
//       <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
//     </Marker>
//   </Map>
// )

// render(map, document.getElementById('map-container'))

import React from "react";

import { Map, TileLayer } from "react-leaflet";

const MyMap=()=>{
  const position = [1.45, 104.3]
  return (<Map className = "map"
          center = {position}
          zoom ={10}
              style ={{height:400,width:"100%"}}> 
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenstreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
        
  
  </Map>
    
    )
}

export default MyMap




































