<template>
  <div>
    <meta name="viewport" content="width=device-width,initial-scale=1">

    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    >
    <link rel="stylesheet" href="style.css">
    <h3 style="margin-left:4%">Our Faculties</h3>
    <div class="row" style="margin-left:3%">
      <div class="column">
        <div class="card">
          <img class="img1" src="~/assets/images/Sindhu.jpg" style="width:100%;height:250px">
          <h5>Dr. Sindhu S</h5>
          <p class="title">Head Of The Deapartment</p>
          <a href="http://nssce.ac.in/profile-faculty-view/ce.php?id=32">
            <button class="button">
              View Profile
              <i class="fa fa-info-circle"></i>
            </button>
          </a>
        </div>
      </div>
      <div class="column" style="margin-left:3%">
        <div class="card">
          <img class="img2" src="~/assets/images/Syam.jpg" style="width:100%;height:250px">
          <h5>Prof. Syam Sankar</h5>
          <p class="title">Assistant Professor</p>
          <a href="http://nssce.ac.in/profile-faculty-view/ce.php?id=125">
            <button class="button">
              View Profile
              <i class="fa fa-info-circle"></i>
            </button>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
* {
  box-sizing: border-box;
}
body {
  font-family: Arial, Helvetica, sans-serif;
  background-color: #ffffff;
}

.column {
  float: left;
  display: table-cell;
  margin: 0 auto;
  width: 25%;
  padding: 10px 10px;
}

.row:after {
  content: "";
  display: table;
  clear: both;
}
.img1 {
  border-radius: 50%;
  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.2);
}
.img2 {
  border-radius: 50%;
  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.2);
}
/* Style the counter cards */
.card {
  box-shadow: 10px 10px 10px 10px rgba(0, 0, 0, 0, 2);
  padding: 16px;
  text-align: center;
  background-color: #ffffff;
  margin-left: 2%;
  border-radius: 30px;
}
.button {
  border: 2px solid #ffffff;
  color: #0084FF;
  border-radius: 30px;
  background-color: #ffffff;
  text-align: center;
  display: inline-block;
  font-size: 13px;
  margin: 4px 2px;
  transition-duration: 0.4s;
  cursor: pointer;
}

button:hover {
  text-decoration: underline;
}
/* Responsive columns - one column layout (vertical) on small screens */
@media screen and (max-width: 600px) {
  .column {
    width: 100%;
    display: block;
    margin-bottom: 20px;
  }
}
</style>
