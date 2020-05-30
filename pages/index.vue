<template>
  <div id="landing" class="section">
    <h1 id="main" style="color: black;" class="center">
      Student's Association of Computer Science
    </h1>
    <h6 id="mainText" class="center">
      Department of Computer Science and Engineering
    </h6>
    <h1 id="sub" style="color: rgb(68, 123, 241);" class="center">
      STACS
    </h1>
  <div id="about" class="section">
    <h1 id="title" class="center">
      About STACS
    </h1>
    <p id="para">
      Students' Association of Computer Science (STACS) is the departmental association of both B.Tech and M.Tech students of the Computer Science and Engineering Department. Association will be an integration of students into academic communities at the department level, crossing the course boundary, providing a platform to organise a range of activities with the support and resources of the department. The association will provide opportunities for students to share a range of extra-curricular experiences.
    </p>
  </div>
  <section>
    <div id="short" class="row">
      <div class="col s4 offset-m1 m6">
        <div id="motive" class="card">
           <div class="col s11 center">
          <div id="icon" class="icon-container">
            <div class="card-body">
              <h5 class="card-title center">Students</h5>
                <p class="card-text center">
                They are the builders of the technological histories.
                They initiate, innovate and bring advancement to the world.
                Having the power, these ignited minds will the fire of the future.
              </p>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="short" class="row">
      <div class="col s4 offset-m2 m4">
        <div id="motive" class="card">
          <div class="col s11 center">
          <div id="icon" class="icon-container">
            <div class="card-body">
              <h5 class="card-title center">Association</h5>
              <p class="card-text center">
               Alone we have only one idea but in a group we have plenty.
               Groups give us many ways to accomplish a goal.
               The role of togetherness is inevitalbe.
              </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="short" class="row">
      <div class="col s4 offset-m2 m4">
        <div id="motive" class="card">
          <div class="col s11 center">
          <div id="icon" class="icon-container">
            <div class="card-body">
              <h5 class="card-title center">Computer Science</h5>
              <p class="card-text center">
               Computers have become a lifestyle and so as computer science.
               We are living in a world where computers have a viatl role.
               They grow with the growing world.
              </p>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
    <div id="achieve" class="section center section">
      <h1>ACHIEVEMENTS</h1>
      <div class="carousel carousel-slider center">
        <div class="carousel-fixed-item center">
      </div>
      <div class="carousel-item white-text" href="#one!">
        <div class="row valign-wrapper">
          <div class="col s12 offset-m2 m4">
            <div class="card color">
              <div class="card-content white-text">
                <span class="card-title">Achievement Title</span>
                <p>This is a description about the achievement.</p>
              </div>
              <div id="card_link" class="card-action">
                <a href="#">This is a link</a>
                <a href="#">This is a link</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="carousel-item white-text" href="#two!">
        <div class="row valign-wrapper">
          <div class="col s12 offset-m2 m4">
            <div class="card color">
              <div class="card-content white-text">
                <span class="card-title">Achievement Title</span>
                <p>This is a description about the achievement.</p>
              </div>
              <div id="card_link" class="card-action">
                <a href="#">This is a link</a>
                <a href="#">This is a link</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="carousel-item white-text" href="#three!">
        <div class="row valign-wrapper">
          <div class="col s12 offset-m2 m4">
            <div class="card color">
              <div class="card-content white-text">
                <span class="card-title">Achievement Title</span>
                <p>This is a description about the achievement.</p>
              </div>
              <div id="card_link" class="card-action">
                <a href="#">This is a link</a>
                <a href="#">This is a link</a>
              </div>
            </div>
         </div>
        </div>
      </div>
    </div>
    <div id="notify" class="section">
     <h1 id="text_notify">
       <span>Recent</span>
       <span> Events</span>
      </h1>
      <section>
      <div class="row">
        <div class="col s12">
          <div class="col s6">
           <img class="materialboxed" width="100" src="https://lorempixel.com/250/250/nature/1">
            <a href="http://stacs.nssce.ac.in/events/interview.html">Interview with Prasanth Nair IAS by Meekha Saji</a>
          </div>
          <div class="col s6">
           <img class="materialboxed" width="100" src="http://stacs.nssce.ac.in/assets/images/Ieeetalkfy.jpg">
            <a href="http://stacs.nssce.ac.in/events/ieeetalkfy.html">Talk by IEEE SB NSSCE Chairman, as part of SIP for the FY students.</a>
          </div>
          <div class="col s6">
            <img class="materialboxed" width="100" src="http://stacs.nssce.ac.in/assets/images/fridayphoto.jpg">
            <a href="http://stacs.nssce.ac.in/events/ffc.html">Friday Photo Club Meet-up</a>
          </div>
          <div class="col s6">
            <img class="materialboxed" width="100" src="https://lorempixel.com/250/250/nature/1">
            <a href="http://stacs.nssce.ac.in/events/interview.html">Interview with Prasanth Nair IAS by Meekha Saji</a>
          </div>
        </div>
      </div>
      </section>
    </div>
  </div>
  </div>
</template>
<script>
export default {
  mounted () {
    this.$materialize.carousel()
  }
}
</script>
<style lang='scss' scoped>
  #landing{
    height: 2580px;
    background-image: url('~@/assets/images/nss.png');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: 1000px;
    opacity: 90%;
    z-index: -1;
}
  #mainText{
    margin-top: 39px;
    font-size: 30px;
    font-weight: bold;
}
  #main{
  margin-top: 170px;
  font-size: 60px;
  font-family: serif;
  font-weight: bold;
}
  #sub{
  font-weight: bold;
  letter-spacing: 200px;
  margin-left: 180px;
  margin-top: 157px;
  color: #13a59b;
  white-space: nowrap;
}
#short{
  position: relative;
  float: left;
  padding-top: 26px;
}
#motive{
  padding-top: 65px;
  width: 400px;
  height: 300px;
  border: 0!important;
  box-shadow: none;
}
.card-title.center{
  font-weight: 800;
  color:#5d9793;
}
.card-text{
  text-align: center;
  margin-top: 1em ;
  margin-bottom: 1em ;
  line-height: 24pt;
}
#about{
  background-color: #7fe9e2;
  background-image: url('~@/assets/images/logo2.jpg');
  background-position: right;
  background-repeat: no-repeat;
  background-size: 706px;
}
  #title{
  font-family: monospace;
  font-weight: bold;
  text-align: left;
  padding-left: 26px;
}
  #para{
  text-align: left;
  padding: 26px;
  padding-top: 65px;
  font-size: large;
  width: 50%;
  height: 340px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 510px;
  line-height: 24pt;
}
  #achieve{
  padding-top: 316px;
  font-weight: bold;
  background-color: white;
  text-align: center;
}
.card.color{
 width:900px;
 height: 400px;
 background-color: #13a59b;
}
.card-action{
  margin-top: 210px;
}
  #notify{
  margin-bottom: -80px;
  margin-top: 20px;
  background-repeat: no-repeat;
  height: auto;
  padding-top: 52px;
  padding-left: 65px;
  background-size: 250px;
  background-position-x: 40px;
  background-position-y: 200px;
}
  #text_notify{
  font-weight: bold;
  font-size: 48px;
  float: left;
}
.col.s6{
  font-size: 26px;
  color: #0a9aee;
  padding: 40px;
  text-align: left;
  font-weight: 400;
  height: auto;
}
.materialboxed{
  float: left;
  padding: 10px;
  width: 200px;
  height: 150px;
}
</style>
