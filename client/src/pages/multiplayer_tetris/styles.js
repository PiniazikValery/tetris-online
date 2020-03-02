import styled, { keyframes } from 'styled-components';

const animation = keyframes`
    0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
`

const afterAndLoaderStyles = `
    border-radius: 50%;
    width: 10em;
    height: 10em;
`

export const Loader = styled.div`
   ${afterAndLoaderStyles}
    margin: 35vh auto;
    font-size: 10px;
    text-indent: -9999em;
    border-top: 1.1em solid rgba(0, 0, 0);
    border-right: 1.1em solid rgba(0, 0, 0);
    border-bottom: 1.1em solid rgba(0, 0, 0);
    border-left: 1.1em solid #ffffff;
    &:after{
        ${afterAndLoaderStyles}
    }
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
    animation: ${animation} 1.1s infinite linear;
`

export const CenterWrapper = styled.div`
    height:100vh;
    width:100wh;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
`
