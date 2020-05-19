export const state = () => ({
  posts: [],
  activities: []
})

export const mutations = {
  blogPosts (state, posts) {
    state.posts = posts
  },
  Activities (state, act) {
    state.activities = act
  }
}
