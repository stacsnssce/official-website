<template>
  <div class="bg">
    <img class="bgimg" src="../assets/images/college.png" alt="Bgimage" />
    <div class="about">
      <h1 class="head-about">About</h1>
      <div class="container">
        <p class="abtext">Students' Association of Computer Science (STACS) is the departmental association of both B.Tech and M.Tech students of the Computer Science and Engineering Department. This association will be an integration of students into academic communities at the department level, crossing the course boundary, providing a platform to organise a range of activities with the support and resources of the department. The association will provide opportunities for students to share a range of extra-curricular experiences.</p>
      </div>
      <div class="abtcse">
        <h1 class="head-csed">About CSED</h1>
        <div class="container">
        <p class="abcse">The department of computer science & engineering is the latest addition to NSSCE in the academic year 1999 - 2000. Identification of India as a potential source of computer professionals and keeping in mind the employment potential in this sector, the department aims at providing competent professionals to contribute its share to this Technologies boom. Faculty members and supporting staff with rich experience are appointed in the department.Our vision includes imparting quality education to the students in the domain of Computer Science and Engineering with a focus to create and disseminate the knowledge of problem solving using computers.</p>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.bg {
  background: #13a59b;
}
.bgimg {
  height: 700px;
  width: 100%;
  background-size: cover;
  background-position: center;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
}
.head-about {
  color: white;
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
.abtext{
  color: white;
  text-align: justify;
  font-size: large;
}
.abtcse{
  background: white;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
.head-csed{
  text-align: center;
}
.abtcse{
  color: black;
  text-align: justify;
  font-size:large;
}
</style>
