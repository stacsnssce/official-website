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
     <h1 id="title" class="center">About STACS</h1>
      <p id="para">Students' Association of Computer Science (STACS) is the departmental association of both B.Tech and M.Tech students of the Computer Science and Engineering Department. Association will be an integration of students into academic communities at the department level, crossing the course boundary, providing a platform to organise a range of activities with the support and resources of the department. The association will provide opportunities for students to share a range of extra-curricular experiences.</p>
    </div>
    <div id="achieve" class="section center">
     <h1>ACHIEVEMENTS</h1>
    </div>
    <div id="notify" class="section">
     <h1 id="text_notify"><span>Recent</span><span> Notifications</span></h1>
        <ul id="link_test" class="container hover:underline text-blue-500 text-lg">
        <li><a href="http://stacs.nssce.ac.in/events/interview.html">Interview with Prasanth Nair IAS by Meekha Saji</a><br></li>
        <li><a href="http://stacs.nssce.ac.in/events/ieeetalkfy.html">Talk by IEEE SB NSSCE Chairman, as part of SIP for the FY students.</a><br></li>
        <li><a href="http://stacs.nssce.ac.in/events/fossblender.html">FOSS Blender Workshop</a></li>
        </ul>
    </div>
  </div>
</template>
<script>
export default {

}
</script>

<style lang='scss'>
  #landing{
    height: 280vh;
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
    margin-top: 6vh;
    font-size: 30px;
    font-weight: bold;
}
  #main{
  @import url('https://fonts.googleapis.com/css2?family=Rakkas&display=swap');
  margin-top: 26vh;
  font-size: 60px;
  font-family: 'Rakkas', cursive;
  font-weight: bold;
}
  #sub{
  @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
  font-family: 'Press Start 2P', cursive;
  font-weight: bold;
  letter-spacing: 200px;
  margin-left: 128px;
  margin-top: 24vh;
  animation: type 4s steps(20);
  overflow: hidden;
  white-space: nowrap;
  animation-iteration-count: infinite;
  text-emphasis-color: rgb(6, 25, 194);
}
  #about{
  background-color: rgb(167, 214, 238);
  float: right;
  background-image: url('~@/assets/images/comp.png');
  background-position: right;
  background-repeat: no-repeat;
  background-size: 700px;
}
  #title{
  font-family: monospace;
  font-weight: bold;
  text-align: left;
  padding-left: 4vh;
}
  #para{
  text-align: left;
  padding: 4vh;
  padding-top: 10vh;
  font-size: large;
  width: 50%;
  height: 52vh;
  background-image: url('~@/assets/images/cloud.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: 510px;
  line-height: 24pt;
}
  #achieve{
  padding-top: 100vh;
  font-family: monospace;
  font-weight: bold;
  background-color: white;
}
  #content{
  padding-top: 60vh;
}
#ctitle{
  padding-bottom: 60vh;
}
  #notify{
  background-color: white;
  background-image: url('~@/assets/images/bell.png');
   background-repeat: no-repeat;
   height: 80vh;
   padding-top: 10vh;
   padding-left: 10vh;
   background-size: 250px;
   background-position-x: 72px;
   background-position-y: 200px;
}
  #text_notify{
  //padding-top: 4vh;
  font-weight: bold;
  font-size: 8vh;
  padding-left: 4vh;
}
  #link_test{
 font-size: 4vh;
 float: right;
 padding-right: 12vh;
 margin-right: 12vh;
 height: 90%;
 list-style-type: disc;
}

@keyframes type{
  0%{
    width:0ch;
  }
  100%{
    width: 20ch;
  }
}
</style>
