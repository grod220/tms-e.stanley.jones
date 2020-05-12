import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import FBSmallIcon from './images/fblogo.svg';
import axios from 'axios';

const OuterBox = styled.div`
  box-shadow: -0.5rem 0.1rem 1.3rem 0 rgba(0, 0, 0, 0.5);
  margin: -4.5rem 0 2rem 0;
  background: #fff;
  padding: 1rem;
  transition: all 0.6s;

  &:hover {
    transform: scale(1.03);
    box-shadow: -0.5rem 0.1rem 5rem 0 rgba(0, 0, 0, 0.4);
  }
`;

const SocialWrapper = styled.div`
  height: 37rem;
  overflow: hidden;
  position: relative;
  color: #337ab7;

  &:hover {
    color: coral;
  }
`;

const FBImage = styled.div`
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50%;
  position: relative;
  background-image: url(${(props) => props.src});
  animation: ${(props) => props.activated && 'fadeIn 1s'};

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const ContentBlock = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  background: hsla(0, 0%, 100%, 0.85);
  line-height: 2.8rem;
  display: flex;
`;

const Caption = styled.div`
  font-size: 2rem;
  padding: 2rem;
  width: 85%;
`;

const SmallFBIcon = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  align-self: center;
  margin-right: 1.8rem;
`;

const LoadingAnimation = styled.div`
  opacity: ${(props) => (props.activated ? 1 : 0)};
  animation-duration: 2s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: placeHolderShimmer;
  animation-timing-function: linear;
  background: #f6f7f8;
  background: linear-gradient(to right, #eeeeee 8%, #dddddd 18%, #eeeeee 33%);
  background-size: 80rem 10.4rem;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 100;
  transition: 0.6s all;

  @keyframes placeHolderShimmer {
    0% {
      background-position: -80rem 0;
    }
    100% {
      background-position: 80rem 0;
    }
  }
`;

const fetchLatestFBPost = (setPost) => {
  axios.get('https://cors-anywhere.herokuapp.com/').then((result) => {
    // MOCK!
    setPost({
      imageURL:
        'https://scontent-mia3-1.xx.fbcdn.net/v/t15.5256-10/95665168_2622821591295241_2718985126120783872_n.jpg?_nc_cat=111&_nc_sid=ad6a45&_nc_ohc=ne9U2ZarvSgAX_V0NBx&_nc_ht=scontent-mia3-1.xx&oh=6bc56f9cb3c35e0951d0ab2e9ee03187&oe=5ED622C6',
      message:
        'Grand Opening of La Marchetta - tomorrow at 11am!  Homemade comfort delicacies that will take you back to your Nonn...',
      url: 'https://www.facebook.com/790534394301792/posts/3025425220812687/',
    });
  });
};

const LivePost = () => {
  const [post, setPost] = useState({ link: 'https://www.facebook.com/meatballstoppe/' });
  const loading = !Boolean(post.imageURL);

  useEffect(() => fetchLatestFBPost(setPost), []);

  return (
    <div>
      <a rel="noopener noreferrer" target="_blank" href={post.link}>
        <OuterBox>
          <SocialWrapper>
            <LoadingAnimation activated={loading} />
            <FBImage src={post.imageURL} activated={!loading} />
            <ContentBlock>
              <Caption>{post.message}</Caption>
              <SmallFBIcon>
                <img src={FBSmallIcon} alt="Facebook icon" width="40" height="40" />
              </SmallFBIcon>
            </ContentBlock>
          </SocialWrapper>
        </OuterBox>
      </a>
    </div>
  );
};

export default LivePost;
