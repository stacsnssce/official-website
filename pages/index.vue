<template>
  <div>
    <div class="row home-top">
      <div class="home-top-mobile">
        <div class="col s12 m12 l6 home-college-img-div hide-on-large-only">
          <img class="home-college-image-mobile" src="~/assets/images/nssce5.png">
        </div>
        <div class="col s12 m12 l6 center-align hide-on-large-only">
          <img id="logo-mobile" src="~/assets/images/logo4.png">
          <div class="home-logo-h2">
            <h2>Students' Association of Computer Science</h2>
            <h5>Department of Computer Science and Engineering</h5>
          </div>
        </div>
      </div>
      <div class="home-top-large">
        <div class="col s12 m12 l5 hide-on-med-and-down">
          <img id="logo-large" src="~/assets/images/logo4.png">
          <div class="home-logo-h2">
            <h2>Students' Association of Computer Science</h2>
            <h5>Department of Computer Science and Engineering</h5>
          </div>
        </div>
        <div class="col s12 m12 l7 home-college-img-div hide-on-med-and-down">
          <img class="home-college-image" src="~/assets/images/nssce5.png">
        </div>
      </div>
    </div>
    <div class="home-notice-box flow-text #80d8ff light-blue accent-1">
      <div class="row valign-wrapper">
        <div class="arrow-right"></div>
        <a class="left-align" :href="`${notice[current_notice].link}`">
          {{ notice[current_notice].title }}
        </a>
        <div class="button1-margin hide-on-med-and-down">
          <button class="button1-large " @click="down">
            <i class="material-icons left">chevron_left</i>
          </button>
        </div>
        <div class="button2-margin hide-on-med-and-down">
          <button class="button2-large">
            <i class="material-icons right" @click="up">chevron_right</i>
          </button>
        </div>
      </div>
    </div>
    <div class="row #e3f2fd blue lighten-5">
      <div class="col s12 m12 l6 home-about-stacs">
        <h1 class="home-about-stacs-h1">
          About STACS
        </h1>
        <p class="flow-text">
          Students' Association of Computer Science (STACS) is the departmental association of both B.Tech and M.Tech students of the Computer Science and Engineering Department.This association will be an integration of students into academic communities at the department level, crossing the course boundary, providing a platform to organise a range of activities with the support and resources of the department. The association will provide opportunities for students to share a range of extra-curricular experiences.
        </p>
      </div>
      <div class="col s12 m12 l6 home-about-stacs">
        <div class="carousel">
          <a class="carousel-item" href="#one!"><img src="~/assets/images/home-about-stacs-carousel-image1.jpg"></a>
          <a class="carousel-item" href="#two!"><img src="~/assets/images/home-about-stacs-carousel-image2.jpg"></a>
          <a class="carousel-item" href="#three!"><img src="~/assets/images/home-about-stacs-carousel-image3.png"></a>
        </div>
      </div>
    </div>
    <div>
      <div class="row">
        <div class="col s12 m12 l6 left-align hide-on-large-only home-about-cse">
          <h1 class="home-about-cse-h1">
            About CSE Department
          </h1>
          <p class="flow-text">
            The department of computer science & engineering is the latest addition to NSSCE in the academic year 1999-2000.
            Identification of India as a potential source of computer professionals and keep in mind the employment potential in this sector, the department aims at providing competent professionals to contribute its share to this Technologies boom.
            Faculty members and supporting staff with rich experience are appointmented in the department. Our vision includes imparting quality education to the students in the domain of Computer Science and disseminate the knowledge of problem solving using computers.
          </p>
        </div>
        <div class="col s12 m12 l6 hide-on-large-only home-about-cse-padding">
          <img src="~/assets/images/home-about-cse.png" class="responsive-img ">
        </div>
      </div>
      <div class="row">
        <div class="col s12 m12 l6 hide-on-med-and-down home-about-cse ">
          <img src="~/assets/images/home-about-cse.png" class="responsive-img">
        </div>
        <div class="col s12 m12 l6 left-align hide-on-med-and-down home-about-cse">
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
                <dl v-for="achivement in achivements" :key="achivement">
                  <li>{{ achivement }}</li>
                </dl>
              </div>
            </div>
            <div class="col s12 m12 l6 home-achivement-events-inner-right-box">
              <h3 class="home-achivement-events-h3">
                Recent Events
              </h3>
              <div class="home-achivement-events-innerbox">
                <dl v-for="event in events" :key="event">
                  <li>{{ event }}</li>
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
import axios from 'axios'

export default {
  mounted () {
    this.$materialize.carousel()
    this.notification()
    setInterval(this.notification, 10000)
  },
  head () {
    return {
      title: 'STACS | Department of Computer Science And Engineering | NSSCE',
      meta: [
        { hid: 'description', name: 'description', content: 'An association of students in Department of Computer Science at NSS College of Engineering where they can develop their technical knowledge and share their talents within' }
      ]
    }
  },
  data () {
    return {
      notice: {title: "", link: ""},
      current_notice: 0,
      achivements: [],
      events: []
    }
  },
  async asyncData (context) {
    const {notice} = await axios
      .get(
        'https://raw.githubusercontent.com/stacsnssce/webdata/master/notice.json',
      )
      .then(({ data }) => {
        return {
          notice: data
        }
      })
      .catch(()=>[])
    const recent = await axios
    .get(
      'https://raw.githubusercontent.com/stacsnssce/webdata/master/recent.json',
    )
    .then(({ data }) => {
      return {
        data
      }
    })
    .catch(()=>{return {achivements: [], events: []}})

    const {achivements, events} = recent.data
    return {notice, achivements, events}
  },
  methods: {
    up(){
      if(this.current_notice === this.notice.length - 1 ) {
        this.current_notice = 0
      }
      else {
        this.current_notice ++
      }
    },
    down(){
      if(this.current_notice === 0 ) {
        this.current_notice = this.notice.length - 1
      }
      else {
        this.current_notice --
      }
    },
    notification(){
      if(this.current_notice === this.notice.length - 1) {
        this.current_notice = 0
      }
      else {
        this.current_notice ++
      }
    }
  }
}
</script>
<style lang='scss' scoped>
$button1: #40c4ff;
$button2: #00b0ff;
.home-top{
  &-mobile{
    padding-left: 0px;
    margin-left: -5px;
  }
  &-large{
    padding-left: 6%;
    text-align: center;
  }
  #logo-mobile{
    max-height: 200px;
    max-width: 200px;
    height: 30vw;
  }
  #logo-large{
    margin: 0 auto;
    margin-top: 32px;
    height: 240px;
  }
  .home-logo-h2{
    margin: 0px;
    padding: 0px;

    h2 {
      font-size: 40px;
      line-height: 50px;
      text-shadow: #000000 1px 0px,
                   #000000 -1px 0px;
      font-weight: bolder;
      letter-spacing: 1.2px;
    }
  @media screen and (max-width: 600px) {
    h2{
      text-align: center;
      font-size: 30px;
      line-height: 40px;
    }
  }

    h5 {
      font-size: 20px;
      font-weight: bolder;
    }
  }
  .home-college-image{
    min-height: 400px !important;
    max-width:100%;
    max-height:100%;
    margin: 0px;
    padding-bottom: 85px;
    object-fit: cover;
  }
  .home-college-image-mobile{
  min-height: 300px !important;
    width: 100%;
    margin: 0px;
    padding: 0px 0px 50px 0px;
    object-fit: cover;
  }
  .home-college-img-div{
    padding: 0px;
  }
}
.home-notice-box{
  background-color: rgb(198, 231, 229);
  text-align: right;
  font-size: 18px;
  font-weight: bolder;
  list-style-type:none;
  padding: 0;
  margin-top: 10px;

  a {
    color: #000000
  }
  
  .arrow-right {
    width: 0;
    height: 0;
    font-size: 10px;
    border-top: 1rem solid transparent;
    border-bottom: 1rem solid transparent;
    border-left: 1rem solid #13A59B;
    padding-left: 7%;
    margin-left: 7%;
  }

  .button1-large{
    background-color: $button1;
    padding: 16px;
    border: none;
  }
  
  .button2-large{
    background-color: $button2;
    padding: 16px;
    border: none;
  }
  
  .button1-margin{
    margin: 0px 0px 0px auto;
  }
  
  .button2-margin{
    margin: 0px;
  }
  
  .noticeItem-fontSize{
    padding-right: 10px;
    font-weight: bolder;
  }
}
.home-about-stacs{
  padding: 6%;
  
  p {
    padding-top: auto 0;
    font-size: 20px;
    line-height: 40px;
  }
  
  &-h1{
    text-align: left;
    margin: 0px;
    padding-bottom: 1.5rem;
    display: inline-block;
    border-bottom: solid 4px #0DBDE8;
    font: Bold 40px/43px Source Sans Pro;
  }
}


.home-about-cse{
  padding: 8% 6%;

  p {
    padding-top: auto 0;
    font-size: 20px;
    line-height: 40px;
  }

  &-h1{
    margin: 0px;
    padding-bottom: 1.5rem;
    text-align: left;
    color: #2E2E38;
    display: inline-block;
    border-bottom: solid 4px #0DBDE8;
    font: Bold 40px/43px Source Sans Pro;
  }
}


.home-about-cse-padding{
  padding: 15vw;
}
.responsive-img{
  box-shadow: 4vw 4vw gainsboro;
}
.flow-text{
  text-align: justify;
}

.home-achivement-events{
  background-image: url("../assets/images/home-achivement-events-background-image.png");
  background-size:cover;
  background-color: rgb(226, 243, 243);
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
      max-width: 770px;
      height: 550px;
      padding: 50px;
      color: #155CB4;
      font-size: 19px;
      line-height: 1.9;
      box-sizing: border-box;
      overflow-y: scroll;
    }
    .home-achivement-events-inner-right-box{
      padding-left: 3%;
    }
  }
}

.row{
  margin: 0px;
}
* {
  box-sizing: border-box;
}
</style>
