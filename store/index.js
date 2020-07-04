export const state = () => ({
  posts: [],
  activities: [],
  gallery: [],
  awards: [],
  contributors: []
})

export const mutations = {
  blogPosts (state, posts) {
    state.posts = posts
  },
  Activities (state, act) {
    state.activities = act
  },
  Gallery (state, gal) {
    state.gallery = gal
  },
  Awards (state, awd) {
    state.awards = awd
  },
  Contributors (state, contributors) {
    state.contributors = contributors
  }
}
