function PP(limite) {

    function getPatapouf(max) {
      return Math.floor(Math.random() * max);
    }
  
    const img = getPatapouf(limite);
  
    return(`http://jdocopilot.me/pps/${img}.jpg`);
  
  }
  
  export {PP};