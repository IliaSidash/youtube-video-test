import { action, observable, decorate, computed } from 'mobx';
import youtubeSearch from 'youtube-api-v3-search';

class Store {
  videos = [];
  state = '';
  searchValue = '';
  nextPageToken = '';
  totalResults = 0;
  errorText = '';
  get hasMore() {
    return this.totalResults > this.videos.length;
  }

  onSearchValue(e) {
    this.searchValue = e.target.value;
  }

  onSearchBtn() {
    if (this.searchValue.length > 0) {
      this.videos = [];
      this.nextPageToken = '';
      this.fetchVideos();
    }
  }

  fetchVideos() {
    this.YOUTUBE_KEY = 'AIzaSyASrk05Yd37CevzN3wTDXZdDoBquZCfuH8';
    this.options = {
      q: this.searchValue,
      part: 'snippet',
      type: 'video',
      maxResults: '50',
      pageToken: this.nextPageToken,
    };

    if (this.state !== 'pending') {
      this.state = 'pending';

      youtubeSearch(this.YOUTUBE_KEY, this.options).then((response) => {
        if (response.error) {
          this.state = 'error';
          this.errorText = `${response.error.message}. ${response.error.errors[0].reason}`;
          console.log(this.errorText, response.error);
        } else {
          this.videos = [...this.videos, ...response.items];
          this.totalResults = response.pageInfo.totalResults;
          this.nextPageToken = response.nextPageToken;
          this.state = 'done';
        }
      });
    }
  }
}

decorate(Store, {
  videos: observable,
  state: observable,
  searchValue: observable,
  nextPageToken: observable,
  totalResults: observable,
  errorText: observable,
  hasMore: computed,
  onSearchValue: action.bound,
  onSearchBtn: action.bound,
  fetchVideos: action.bound,
});

export default Store;
