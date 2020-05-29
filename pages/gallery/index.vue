<template>
<div>
<body>
<h1>function name</h1>
<div class="grid-container">
  <div>
    <img class='grid-item grid-item-1' src='https://images.unsplash.com/photo-1544568100-847a948585b9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ' alt=''>
  </div>
  <div>
    <img class='grid-item grid-item-2' src='https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ' alt=''>
  </div>
  <div>
    <img class='grid-item grid-item-3' src='https://images.unsplash.com/photo-1510771463146-e89e6e86560e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ' alt=''>
  </div>
  <div>
    <img class='grid-item grid-item-4' src='https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ' alt=''>
  </div>
  <div>
    <img class='grid-item grid-item-5' src='https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ' alt=''>
  </div>
  <div>
    <img class='grid-item grid-item-6' src='https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ' alt=''>
  </div>
  <div>
    <img class='grid-item grid-item-7' src='https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ' alt=''>
  </div>
  <div>
    <img class='grid-item grid-item-8' src='https://images.unsplash.com/photo-1518717758536-85ae29035b6d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ' alt=''>
  </div>
  <div>
    <img class='grid-item grid-item-9' src='https://images.unsplash.com/photo-1535930891776-0c2dfb7fda1a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ' alt=''>
  </div>
  <div>
    <img class='grid-item grid-item-10' src='https://images.unsplash.com/photo-1504595403659-9088ce801e29?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ' alt=''>
  </div>
</div>
</body>
</div>
</template>

<script>
export default {

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
