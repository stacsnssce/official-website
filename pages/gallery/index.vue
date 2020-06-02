<template>
<div>
<body>
<h1>Lorem ipsum 1</h1>
<div class="grid-container">
  <div>
    <img class='grid-item grid-item-1' src='https://via.placeholder.com/400x300.png' alt=''>
  </div>
  <div>
    <img class='grid-item grid-item-1' src='https://via.placeholder.com/400x300.png' alt=''>
  </div>
  <div>
    <img class='grid-item grid-item-1' src='https://via.placeholder.com/400x300.png' alt=''>
  </div>
  <div>
    <img class='grid-item grid-item-1' src='https://via.placeholder.com/400x300.png' alt=''>
  </div>
  <div>
    <img class='grid-item grid-item-1' src='https://via.placeholder.com/400x300.png' alt=''>
  </div>
  <div>
    <img class='grid-item grid-item-1' src='https://via.placeholder.com/400x300.png' alt=''>
  </div>
  <div>
    <img class='grid-item grid-item-1' src='https://via.placeholder.com/400x300.png' alt=''>
  </div>
  <div>
    <img class='grid-item grid-item-1' src='https://via.placeholder.com/400x300.png' alt=''>
  </div>
  <div>
    <img class='grid-item grid-item-1' src='https://via.placeholder.com/400x300.png' alt=''>
  </div>
  <div>
    <img class='grid-item grid-item-1' src='https://via.placeholder.com/400x300.png' alt=''>
  </div>
</div>
</body>
</div>
</template>

<script>
import axios from 'axios'
export default {
  async asyncData (context) {
    return await axios
      .get(
        'https://raw.githubusercontent.com/stacsnssce/webdata/master/gallery.json'
      )
      .then(({ data }) => {
        return {
          content: data
        }
      })
  }
}
</script>
<style>
body {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: sans-serif;
}

h1 {
  font-size: 30px;
  color: black;
  padding: 5px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  transition: all 0.25s ease-in-out;
  width: 1200px;
  height: 4m0px;
}

.grid-container {
  columns: 5 200px;
  column-gap: 1.5rem;
  width: 90%;
  margin: 0 auto;
}
.grid-container div {
  width: 150px;
  margin: 0 1.5rem 1.5rem 0;
  display: inline-block;
  width: 100%;

  padding: 5px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  transition: all 0.25s ease-in-out;
}
.grid-container div:hover img {
  filter: grayscale(0);
}
.grid-container div:hover {
  border-color: coral;
}
.grid-container div img {
  width: 100%;
  border-radius: 5px;
  transition: all 0.25s ease-in-out;
}
.grid-container div p {
  margin: 5px 0;
  padding: 0;
  text-align: center;
  font-style: italic;
}

</style>
