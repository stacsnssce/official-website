<template>
  <div><br>
    <div class="center-align"><h4>Our Committee Members</h4></div><br><br>
    <div class="row">
    <section v-for=' c in content.committee' :key=' c.designation'>
        <div class='col s12 m7 l3'>
          <div class='card-panel hoverable'>
            <p class="center-align text">{{c.designation}}</p>
            <div class='card-image center-align'>
              <img class="circle responsive-image" :src='c.url'>
            </div>
            <div class='card-content center-align text'>
              <p>{{ c.name }}</p>
            </div><br><br>
            <div class='card-action middle'>
              <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"/>&nbsp;
              <a :href='c.profiles.instagram' class="wave-effect wave-light"><i class="fa fa-instagram hoverable circle"></i></a>&nbsp;
              <a :href='c.profiles.twitter' class="wave-effect wave-light"><i class="fa fa-twitter hoverable circle"></i></a>&nbsp;
              <a :href='c.profiles.linkedin' class="wave-effect wave-light"><i class="fa fa-linkedin hoverable circle"></i></a>&nbsp;
              <a :href='c.profiles.github' class="wave-effect wave-light"><i class="fa fa-github hoverable circle"></i></a>&nbsp;
              <a :href='c.profiles.website' class="wave-effect wave-light"><i class="material-icons action hoverable circle">language</i></a>
            </div>
        </div>
        </div>
    </section>
    </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      content: {
        committee: [
          {
            name: 'Prof. Syam Sankar',
            designation: 'Faculty Advisor',
            url: '/profilepic.png',
            profiles: {
              instagram: '',
              twitter: '',
              linkedin: '',
              github: '',
              website: ''
            }
          },
          {
            name: 'Milind Soorya  ',
            designation: ' Chairman',
            url: '/profilepic.png',
            profiles: {
              instagram: '',
              twitter: '',
              linkedin: '',
              github: '',
              website: ''
            }
          },
          {
            name: 'Meekha E Saji  ',
            url: '/profilepic.png',
            designation: ' Newsletter Editor',
            profiles: {
              instagram: '',
              twitter: '',
              linkedin: '',
              github: '',
              website: ''
            }
          },
          {
            name: 'Allen K Abraham',
            url: '/profilepic.png',
            designation: ' Website Maintainer',
            profiles: {
              instagram: '',
              twitter: '',
              linkedin: '',
              github: '',
              website: ''
            }
          }
        ]
      }
    }
  }
}
</script>
<style lang="scss">
.card-panel{
border-radius: 16px 16px 16px 16px;
box-shadow: 0 4px 4px grey;
height: 400px;
}
.text{
  text-align: center;
  font-weight: bold;
  font-size: 16px;
}

img{
width: 140px;
height: 140px;
}
.middle{
position: absolute;
font-size: 28px;
overflow: hidden;
}
</style>
