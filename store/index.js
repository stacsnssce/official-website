export const state = () => ({
  posts: [],
  activities: [],
  gallery: []
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
  }
}
