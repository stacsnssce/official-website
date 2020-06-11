<template>
  <div>
    <div class="row">
      <div class="home-top">
        <div class="col s12 m12 l6 center-align hide-on-large-only">
          <img class="home-college-image-mobile" src="~/assets/images/nssce.png">
        </div>
        <div class="col s12 m12 l6 center-align hide-on-large-only">
          <img id="logo-mobile" src="~/assets/images/logo4.png">
          <div class="home-logo-h2">
            <h2><b>Student's</b></h2><h2><b>Association of</b></h2><h2><b>Computer Science</b></h2>
            <h5>Department of Computer Science and Engineering</h5>
          </div>
        </div>
        <div class="col s12 m12 l5 hide-on-med-and-down">
          <img id="logo-large" src="~/assets/images/logo4.png">
          <div class="home-logo-h2">
            <h2><b>Student's</b></h2><h2><b>Association of</b></h2><h2><b>Computer Science</b></h2>
            <h5>Department of Computer Science and Engineering</h5>
          </div>
        </div>
        <div class="col s12 m12 l7 center-align hide-on-med-and-down">
          <img class="home-college-image" src="~/assets/images/nssce.png">
        </div>
      </div>
    </div>
    <div class="home-notice-box">
      <li>Interview with Prasanth Nair IAS by Meekha Saji </li>
    </div>
    <div class="row #e1f5fe light-blue lighten-5">
        <div class="col s12 m12 l6 home-about-stacs">
          <h1 class="home-about-stacs-h1">
            About STACS
          </h1>
          <p class="flow-text">
            The department of computer science & engineering is the latest addition to NSSCE in the academic year 1999-2000.
            Identification of India as a potential source of computer professionals and keep in mind the employment potential in this sector, the department aims at providing competent professionals to contribute its share to this Technologies boom.
            Faculty members and supporting staff with rich experience are appointmented in the department. Our vision includes imparting quality education to the students in the domain of Computer Science and disseminate the knowledge of problem solving using computers.
          </p>
        </div>
        <div class="col s12 m12 l6 home-about-stacs">
          <div class="carousel">
            <a class="carousel-item" href="#one!"><img src="~/assets/images/home-about-stacs-carousel-image1.png"></a>
            <a class="carousel-item" href="#two!"><img src="~/assets/images/home-about-stacs-carousel-image2.png"></a>
            <a class="carousel-item" href="#three!"><img src="~/assets/images/home-about-stacs-carousel-image3.png"></a>
          </div>
        </div>
    </div>
    <div class="home-about-cse">
      <div class="row">
        <div class="col s12 m12 l6 left-align hide-on-large-only">
          <h1 class="home-about-cse-h1">
            About CSE Department
          </h1>
          <p class="flow-text">
            The department of computer science & engineering is the latest addition to NSSCE in the academic year 1999-2000.
            Identification of India as a potential source of computer professionals and keep in mind the employment potential in this sector, the department aims at providing competent professionals to contribute its share to this Technologies boom.
            Faculty members and supporting staff with rich experience are appointmented in the department. Our vision includes imparting quality education to the students in the domain of Computer Science and disseminate the knowledge of problem solving using computers.
          </p>
        </div>
        <div class="col s12 m12 l6 hide-on-large-only">
          <img src="~/assets/images/home-about-cse.png" class="responsive-img">
        </div>
      </div>
      <div class="row">
        <div class="col s12 m12 l5 hide-on-med-and-down  ">
          <img src="~/assets/images/home-about-cse.png" class="responsive-img ">
        </div>
        <div class="col s12 m12 l7 left-align hide-on-med-and-down home-about-cse-div">
          <h1 class="home-about-cse-h1">
            About CSE Department
          </h1>
          <p class="flow-text">
            The department of computer science & engineering is the latest addition to NSSCE in the academic year 1999-2000.
            Identification of India as a potential source of computer professionals and keep in mind the employment potential in this sector, the department aims at providing competent professionals to contribute its share to this Technologies boom.
            Faculty members and supporting staff with rich experience are appointmented in the department. Our vision includes imparting quality education to the students in the domain of Computer Science and disseminate the knowledge of problem solving using computers.
          </p>
        </div>
      </div>
    </div>
    <div class="home-achivement-events">
      <div class="home-achivement-events-container">
        <h1 class="home-achivement-events-h1">
          Achivements & Events
        </h1>
        <div class="row">
          <div class="home-achivement-events-display">
            <div class="col s12 m12 l6">
              <h3 class="home-achivement-events-h3">
                Recent Achivements
              </h3>
              <div class="home-achivement-events-innerbox">
                <dl>
                  <li>Gayathry S got selected to attend Summer School at IISc Banglore.</li>
                  <li>Winners of EPOCH(Online AI Challenge).</li>
                </dl>
              </div>
            </div>
            <div class="col s12 m12 l6">
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
  padding-left: 6%;
  #logo-mobile{
    max-height: 200px;
    max-width: 200px;
    height: 30vw;
    width: 30vw;
  }
  #logo-large{
    margin-top: 1.5rem;
    height: 240px;
    width: 220px;
  }
  .home-logo-h2{
    margin: 0px;
    padding: 0px;
    padding-right: 5%;
  }
  .home-college-image{
    min-height: 400px !important;
    height: auto;
    width: 100%;
    margin: 0px;
    padding-bottom: 85px;
    object-fit: cover;
  }
  .home-college-image-mobile{
    min-height: 300px !important;
    width: 100%;
    margin: 0px;
    padding-bottom: 50px;
    object-fit: cover;
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
  padding: 6%;
}

.home-about-stacs-h1{
  text-align: left;
  margin: 0px;
  padding-bottom: 1.5rem;
  display: inline-block;
  border-bottom: solid 4px #0DBDE8;
}

.home-about-cse{
  padding: 6%;
}
.home-about-cse-div{
  padding-left: 6rem;
}
.home-about-cse-h1{
  margin: 0px;
  padding-bottom: 1.5rem;
  text-align: left;
  color: #2E2E38;
  display: inline-block;
  border-bottom: solid 4px #0DBDE8;
}

.home-achivement-events{
  background-image: url("../assets/images/home-achivement-events-background-image.png");
  background-size:cover;
  .home-achivement-events-container{
    padding: 6%;
    .home-achivement-events-h1{
    display: inline-block;
    margin: 0px;
    padding: 1.5rem 0rem;
    text-align: left;
    font: Bold 40px/43px Source Sans Pro;
    color: #2E2E38;
    border-bottom: solid 4px #0DBDE8;
    }
    .home-achivement-events-h3{
      margin: 0px;
      padding: 50px 0px;
      text-align: left;
      font: Bold 28px/28px Source Sans Pro;
      color: #2E2E38;
    }
    .home-achivement-events-innerbox{
      background-color: #F5F7F8;
      height: 550px;
      padding: 50px;
      color: #155CB4;
      font-size: 19px;
      line-height: 1.9;
      box-sizing: border-box;
    }
  }
}
</style>
