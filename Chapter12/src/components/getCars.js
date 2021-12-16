// Fetch all cars
const getCars = (url) => {
  fetch(url + 'api/cars')
  .then((response) => response.json())
  .then((result) => {return result;}) 
}

export {getCars}
  