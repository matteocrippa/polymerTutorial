Polymer('youtube-video-list',{
  handleResponse: function(event, response) {
    this.videos = response.response.feed.entry
    //console.log(videos)
  }
})
