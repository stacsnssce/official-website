<template>
  <div>
    <div class="home-top">
      <div>
        <img id="logo" src="~/assets/images/logo2.jpg">
        <div class="home-logo-h2">
          <h2>Student's</h2><h2>Association</h2><h2>Computer Science</h2>
        </div>
      </div>
      <div><img class="home-college-image" src="~/assets/images/nss-home-top.png"></div>
    </div>
    <div class="home-notice-box">
      <li>Interview with Prasanth Nair IAS by Meekha Saji </li>
    </div>
    <div class="home-about-stacs">
      <div>
        <h1 class="home-about-stacs-h1">About STACS</h1>
        <p class="home-about-stacs-p">
          The department of computer science & engineering is the latest addition to NSSCE in the academic year 1999-2000.
          Identification of India as a potential source of computer professionals and keep in mind the employment potential in this sector, the department aims at providing competent professionals to contribute its share to this Technologies boom.
          Faculty members and supporting staff with rich experience are appointmented in the department. Our vision includes imparting quality education to the students in the domain of Computer Science and disseminate the knowledge of problem solving using computers.
        </p>
      </div>
      <div>
        <div class="carousel">
          <a class="carousel-item" href="#one!"><img src="~/assets/images/home-about-stacs-carousel-image1.png"></a>
          <a class="carousel-item" href="#two!"><img src="~/assets/images/home-about-stacs-carousel-image2.png"></a>
          <a class="carousel-item" href="#three!"><img src="~/assets/images/home-about-stacs-carousel-image3.png"></a>
        </div>
      </div>
    </div>
    <div class="home-about-cse">
      <div>
        <img src="~/assets/images/home-about-cse.jpg" class="home-about-cse-img">
      </div>
      <div>
        <h1 class="home-about-cse-h1">About CSE Department</h1>
        <p class="home-about-cse-p">
          The department of computer science & engineering is the latest addition to NSSCE in the academic year 1999-2000.
          Identification of India as a potential source of computer professionals and keep in mind the employment potential in this sector, the department aims at providing competent professionals to contribute its share to this Technologies boom.
          Faculty members and supporting staff with rich experience are appointmented in the department. Our vision includes imparting quality education to the students in the domain of Computer Science and disseminate the knowledge of problem solving using computers.
        </p>
      </div>
    </div>
    <div class="home-achivement-events">
      <h1 class="home-achivement-events-h1">
        Achivements & Events
      </h1>
      <div class="home-achivement-events-display">
        <div>
          <h3 class="home-achivement-events-h3">Recent Achivements</h3>
          <div class="home-achivement-events-innerbox">
            <dl>
              <li>Gayathry S got selected to attend Summer School at IISc Banglore.</li>
              <li>Winners of EPOCH(Online AI Challenge).</li>
            </dl>
          </div>
        </div>
        <div>
          <h3 class="home-achivement-events-h3">
            Recent Events
          </h3>
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
.home-top{
  padding-left: 100px;
  display: grid;
  grid-template-columns:5fr 8fr;
  grid-column-gap: 50px;
  #logo{
    height: 260px;
    width: 300px;
  }
  .home-logo-h2 {
  line-height: 1.2;
  margin: 0px;
  }
  .home-college-image{
    max-height: 1200px;
    height: auto;
    width: 100%;
    margin: 0px;
    padding-right: auto;
    margin-left: 0px;
  }
}
.home-notice-box{
  background-color: rgb(198, 231, 229);
  padding: 5rem 10rem;
  font-size: 150%;
  color: #155CB4;
  text-align: left;
  font-size: 28px;
  letter-spacing: 0px;
}
.home-about-stacs{
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-column-gap: 50px;
  padding: 100px 100px 150px 120px;
  background-color: #F5FAFE;
  .home-about-stacs-h1{
    text-align: left;
    margin: 0px;
    padding: 10px 0px;
  }
  .home-about-stacs-p{
    text-align: left;
    margin: 0px;
    padding: 50px 0px;
    line-height: 1.5;
    font-size: 22px;
    font-family: sans-serif;
  }
}
.home-about-cse{
  display: grid;
  grid-template-columns: 45% 55%;
  grid-column-gap: 100px;
  padding: 160px 160px 160px 100px;
  .home-about-cse-p{
    text-align: left;
    margin: 0px;
    color: #424242;
    padding: 80px 160px 40px 80px;
    line-height: 1.5;
    font-size: 22px;
    font-family: sans-serif;
  }
  .home-about-cse-h1{
    margin: 0px;
    padding-left: 80px;
    text-align: left;
    color: #2E2E38;
  }
  .home-about-cse-img{
    width: 100%;
    height: 60vh;
  }
}
.home-achivement-events{
  background-image: url("../assets/images/home-achivement-events-background-image.png");
  background-size: contain;
    padding: 100px;
  .home-achivement-events-h1{
    margin: 0px;
    padding: 2rem 0rem 4rem 0rem;
    text-align: left;
    font: Bold 40px/43px Source Sans Pro;
    letter-spacing: 0px;
    color: #2E2E38;
    opacity: 1;
    }
  .home-achivement-events-display{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 100px;
    .home-achivement-events-h3{
      margin: 0px;
      padding: 50px 0px;
      text-align: left;
      font: Bold 28px/28px Source Sans Pro;
      letter-spacing: 0px;
      color: #2E2E38;
      opacity: 1;
    }
    .home-achivement-events-innerbox{
      background-color: #F5F7F8;
      width: auto;
      height: 550px;
      padding: 50px;
      margin-bottom: 50px;
      color: #155CB4;
      font: Bold 16px/18px Roboto;
      line-height: 2;
    }
  }
}
</style>
