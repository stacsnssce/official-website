export const state = () => ({
  posts: []
})

export const mutations = {
  blogPosts (state, posts) {
    state.posts = posts
  }
}
