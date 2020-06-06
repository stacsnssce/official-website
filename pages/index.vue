<template>
  <div>
    <div class="home-top">
      <div><img id="logo" src="~/assets/images/logo2.jpg"><h2>Student's</h2><h2>Association</h2><h2>Computer Science</h2></div>
      <div><img class="nss-college-image" src="~/assets/images/nss-home-top.png"></div>
    </div>
    <div class="home-notice-box">
      <li>Interview with Prasanth Nair IAS by Meekha Saji </li>
    </div>
    <div class="home-about-stacs">
      <div>
        <h1>About STACS</h1>
        <p>
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
        <img src="~/assets/images/home-about-cse.jpg">
      </div>
      <div style="padding-left: 50px;">
        <h1>About CSE Department</h1>
        <p>
          The department of computer science & engineering is the latest addition to NSSCE in the academic year 1999-2000.
          Identification of India as a potential source of computer professionals and keep in mind the employment potential in this sector, the department aims at providing competent professionals to contribute its share to this Technologies boom.
          Faculty members and supporting staff with rich experience are appointmented in the department. Our vision includes imparting quality education to the students in the domain of Computer Science and disseminate the knowledge of problem solving using computers.
        </p>
      </div>
    </div>
    <div class="home-achivement-events">
      <h1 style=" padding-left:50px">
        Achivements & Events
      </h1>
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
          <h3>
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
p {
  font-size: larger;
}
.home-top{
  padding-left: 80px;
  display: grid;
  grid-template-columns:5fr 8fr;
  grid-column-end: 50px;
  #logo{
    height: 260px;
    width: 300px;
  }
  img{
    max-height: 500px;
    height: auto;
    width: 100%;
  }
  h2 {
  line-height: 1.2;
  margin: 0px;
  }
  .home-college-image{
    margin: 0px;
    padding-right: 0px;
  }
}
.home-notice-box{
  background-color: #52CBD3;
  opacity: .8;
  list-style: none;
  padding: 3.5rem 8rem;
  margin: 4rem auto;
  font-size: 150%;
  text-align: left;
  font: Light 24px/28px EYInterstate monospace;
  letter-spacing: 0px;
  color: #155CB4;
  opacity: 1;
}
.home-about-stacs{
  display: grid;
  grid-template-columns: 40% 60%;
  grid-column-gap: 20px;
  padding: 0px 50px;
  img{
    width: 350px;
    height: 300px;
  }
}
.home-about-cse{
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
  background-image: url("../assets/images/home-achivement-events-background-image.png");
  padding: 20px;
  h3{
    margin-right: 20px;
    mar
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
      margin-bottom: 50px;
      text-align: left;
      font: Light 16px/18px EYInterstate;
      letter-spacing: 0px;
      color: #155CB4;
      opacity: 1;
    }
}
</style>
