<template>
  <div >
    <div class="home-top">
        <div><img id="logo" src="~/assets/images/logo2.jpg"><h2>Student's</h2><h2>Association</h2><h2>Computer Science</h2></div>
        <div><img src="~/assets/images/nss.png"></div>
      </div>
      <div class="home-notice-box"><li>Interview with Prasanth Nair IAS by Meekha Saji </li></div>
      <div class="home-about-stacs">
        <div>
          <h1>About STACS</h1>
          <p>The department of computer science & engineering is the latest addition to NSSCE in the academic year 1999-2000.
            Identification of India as a potential source of computer professionals and keep in mind the employment potential in this sector, the department aims at providing competent professionals to contribute its share to this Technologies boom.
            Faculty members and supporting staff with rich experience are appointmented in the department. Our vision includes imparting quality education to the students in the domain of Computer Science and disseminate the knowledge of problem solving using computers.
          </p>
        </div>
          <div class="carousel">
            <a class="carousel-item" href="#one!"><img src="https://lorempixel.com/250/250/nature/1"></a>
            <a class="carousel-item" href="#two!"><img src="https://lorempixel.com/250/250/nature/2"></a>
            <a class="carousel-item" href="#three!"><img src="https://lorempixel.com/250/250/nature/3"></a>
            <a class="carousel-item" href="#four!"><img src="https://lorempixel.com/250/250/nature/4"></a>
            <a class="carousel-item" href="#five!"><img src="https://lorempixel.com/250/250/nature/5"></a>
          </div>
      </div>
      <div class="home-about-cse">
        <div>
          <img src="~/assets/images/home-about-cse.jpg">
        </div>
        <div style="padding-left: 50px;">
          <h1>About CSE Department</h1>
          <p>The department of computer science & engineering is the latest addition to NSSCE in the academic year 1999-2000.
            Identification of India as a potential source of computer professionals and keep in mind the employment potential in this sector, the department aims at providing competent professionals to contribute its share to this Technologies boom.
            Faculty members and supporting staff with rich experience are appointmented in the department. Our vision includes imparting quality education to the students in the domain of Computer Science and disseminate the knowledge of problem solving using computers.
          </p>
        </div>
      </div>
    <div class="home-achivement-events">
      <h1 style=" padding-left:50px">Achivements & Events</h1>
      <div class="home-achivement-events-display">
          <div>
            <h3>Recent Achivements</h3>
            <div class="home-achivement-events-innerbox">
              <dl>
                <li>Gayathry S got selected to attend Summer School at IISc Banglore.</li>
                <li>Winners of EPOCH(Online AI Challenge).</li>
              </dl>
            </div>
          </div>
          <div>
            <h3>Recent Events</h3>
            <div class="home-achivement-events-innerbox">
              <dl>
                <li>Interview with Prasanth Nair IAS by Meekha Saji.</li>
                <li>FOSS Blender Workshop.</li>
                <li>Friday Club Meet-up.</li>
                <li>Talk by IEEE SB NSSCE Chairman, as part of SIP for the FY students.</li>
                <li>Student Introduction Programme (SIP) for the first year students (2019 Addmission) commences on 23rd july 2019</li>
              </dl>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  mounted () {
    this.$materialize.carousel()
  },
  head () {
    return {
      title: 'STACS | Department of Computer Science And Engineering | NSSCE',
      meta: [
        { hid: 'description', name: 'description', content: 'An association of students in Department of Computer Science at NSS College of Engineering where they can develop their technical knowledge and share their talents within' }
      ]
    }
  }
}
</script>
<style lang='scss' scoped>
h2 {
  padding-left: 20px;
}
.home-top {
  display: flex;
  align-items: center;
  background-color: gold;
  padding: 50px;
  #logo{
    height: 260px;
    width: 260px;
    margin: 50px;
  }
}
.home-notice-box{
  background-color: aquamarine;
  list-style: none;
  padding: 2rem;
  margin: 12px auto;
}
.home-about-stacs{
  background-color: gainsboro;
  display: grid;
  grid-template-columns: 55% 40%;
  grid-column-gap: 20px;
  padding: 50px 0px 50px 50px;
  img{
    width: 100%;
    height:60vh;
    padding: 50px;
  }
}
.home-about-cse{
  background-color: rgb(241, 211, 211);
  display: grid;
  grid-template-columns: 40% 55%;
  grid-column-gap: 20px;
  img{
    width: 100%;
    height:60vh;
    padding: 50px;
  }
}
.home-achivement-events{
  background-image: url("../assets/images/home-achivement-events-background-image.jpg");
  padding: 20px;
  h3{
    margin-right: 20px;
  }
  .home-achivement-events-display{
    display: flex;
    justify-content: space-around;
  }
    .home-achivement-events-innerbox{
      background-color: ivory;
      width: 500px;
      height: 500px;
      border: 5px solid green;
      padding: 50px;
      margin: 20px 20px 50px;
  }
}
</style>
