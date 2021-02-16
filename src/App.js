import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import { withAuthenticator } from 'aws-amplify-react'
import Amplify, { Auth } from 'aws-amplify';
import aws_exports from './aws-exports';
import { InstagramMedia } from 'react-instagram-media'
Amplify.configure(aws_exports);


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
           
          </p>
          <InstagramMedia
  uri="https://www.instagram.com/p/CLGPctRg-TB/"

  renderItem={
    ({ display_url, video_url, type, caption }) => {
      if (type === 'video') {
        return (
          <video poster={display_url} controls>
            <source src={video_url} type="video/mp4" />
          </video>
        )
      }

      return (
        <img
          src={display_url}
          alt={caption}
        />
      )
    }
  }

  renderMediaList={children => (
    <div className="swiper">
      {children}
    </div>
  )}

  renderError={() => (
    <div>I have failed to parse it</div>
  )}

  renderLoading={() => (
    <div>Loading</div>
  )}
/>
<InstagramMedia
  uri="https://www.instagram.com/p/CLGQ9KbgTG5/"

  renderItem={
    ({ display_url, video_url, type, caption }) => {
      if (type === 'video') {
        return (
          <video poster={display_url} controls>
            <source src={video_url} type="video/mp4" />
          </video>
        )
      }

      return (
        <img
          src={display_url}
          alt={caption}
        />
      )
    }
  }

  renderMediaList={children => (
    <div className="swiper">
      {children}
    </div>
  )}

  renderError={() => (
    <div>I have failed to parse it</div>
  )}

  renderLoading={() => (
    <div>Loading</div>
  )}
/>
<InstagramMedia
  uri="https://www.instagram.com/p/CLGPUFEgRMr/"

  renderItem={
    ({ display_url, video_url, type, caption }) => {
      if (type === 'video') {
        return (
          <video poster={display_url} controls>
            <source src={video_url} type="video/mp4" />
          </video>
        )
      }

      return (
        <img
          src={display_url}
          alt={caption}
        />
      )
    }
  }

  renderMediaList={children => (
    <div className="swiper">
      {children}
    </div>
  )}

  renderError={() => (
    <div>I have failed to parse it</div>
  )}

  renderLoading={() => (
    <div>Loading</div>
  )}
/>
<InstagramMedia
  uri="https://www.instagram.com/p/CLGPAPDgQ5p/"

  renderItem={
    ({ display_url, video_url, type, caption }) => {
      if (type === 'video') {
        return (
          <video poster={display_url} controls>
            <source src={video_url} type="video/mp4" />
          </video>
        )
      }

      return (
        <img
          src={display_url}
          alt={caption}
        />
      )
    }
  }

  renderMediaList={children => (
    <div className="swiper">
      {children}
    </div>
  )}

  renderError={() => (
    <div>I have failed to parse it</div>
  )}

  renderLoading={() => (
    <div>Loading</div>
  )}
/>
<InstagramMedia
  uri="https://www.instagram.com/p/CKIon8rg5FY/"

  renderItem={
    ({ display_url, video_url, type, caption }) => {
      if (type === 'video') {
        return (
          <video poster={display_url} controls>
            <source src={video_url} type="video/mp4" />
          </video>
        )
      }

      return (
        <img
          src={display_url}
          alt={caption}
        />
      )
    }
  }

  renderMediaList={children => (
    <div className="swiper">
      {children}
    </div>
  )}

  renderError={() => (
    <div>I have failed to parse it</div>
  )}

  renderLoading={() => (
    <div>Loading</div>
  )}
/>
<InstagramMedia
  uri="https://www.instagram.com/p/CLUvywFgRIA/"

  renderItem={
    ({ display_url, video_url, type, caption }) => {
      if (type === 'video') {
        return (
          <video poster={display_url} controls>
            <source src={video_url} type="video/mp4" />
          </video>
        )
      }

      return (
        <img
          src={display_url}
          alt={caption}
        />
      )
    }
  }

  renderMediaList={children => (
    <div className="swiper">
      {children}
    </div>
  )}

  renderError={() => (
    <div>I have failed to parse it</div>
  )}

  renderLoading={() => (
    <div>Loading</div>
  )}
/>
        </header>
      </div>
    );
  }
}
// eslint-disable-next-line
export default withAuthenticator(App, true);
