import styled from "styled-components";

export const Style = styled.button`
  height: 45px;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.2s;
  font-size: 20px;
  padding: 0 20px;
  position: relative;
  outline: none;
  overflow: hidden;
  background: #d3d3d3;
  color: #000000;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1.5px solid #ffffff;

  /* circle */
  span {
    position: absolute;
    height: 0;
    width: 0;
    border-radius: 50%;
    animation: span 0.4s 1 linear;
    transform: translate(-50%, -50%);
    background: #848484;
  }
  @keyframes span {
    100% {
      height: 200px;
      width: 200px;
      opacity: 0;
    }
  }
  /* circle */

  /* loader */
  .spinner {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: transparent;
    border: 3px solid transparent;
    animation: 1s spinner linear infinite;
    margin-right: 5px;
    border-top-color: #000000;
    border-bottom-color: #000000;
    @keyframes spinner {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  }
  /* loader */

  &.dark {
    background: #2e2e2e;
    color: #ffffff;
    border: 1.5px solid #5e5e5e;
    span {
      background: #8d8d8d;
    }
    .spinner {
      border-top-color: #ffffff;
      border-bottom-color: #ffffff;
    }
  }
  &.danger {
    background: #850000;
    color: #ffffff;
    border: 1.5px solid #ff0000;
    span {
      background: #ff7c7c;
    }
    .spinner {
      border-top-color: #ffffff;
      border-bottom-color: #ffffff;
    }
  }
  &.success {
    background: #2c7f00;
    color: #ffffff;
    border: 1.5px solid #55ff00;
    span {
      background: #a9ff7a;
    }
    .spinner {
      border-top-color: #ffffff;
      border-bottom-color: #ffffff;
    }
  }
  &.warning {
    background: #7f7900;
    color: #ffffff;
    border: 1.5px solid #fff700;
    span {
      background: #fffd7a;
    }
    .spinner {
      border-top-color: #ffffff;
      border-bottom-color: #ffffff;
    }
  }

  /* animatios */
  &.shake:hover {
    animation: shake 0.3s linear infinite both;
    @keyframes shake {
      0% {
        -webkit-transform: translate(0);
        transform: translate(0);
      }

      20% {
        -webkit-transform: translate(-2px, 2px);
        transform: translate(-2px, 2px);
      }

      40% {
        -webkit-transform: translate(-2px, -2px);
        transform: translate(-2px, -2px);
      }

      60% {
        -webkit-transform: translate(2px, 2px);
        transform: translate(2px, 2px);
      }

      80% {
        -webkit-transform: translate(2px, -2px);
        transform: translate(2px, -2px);
      }

      100% {
        -webkit-transform: translate(0);
        transform: translate(0);
      }
    }
  }
  &.blob:hover {
    animation: blob 0.5s linear infinite;
    @keyframes blob {
      0% {
        transform: scale(0.8, 1.2);
      }
      25% {
        transform: scale(1.2, 0.8);
      }
      50% {
        transform: scale(0.8, 1.2);
      }
      75% {
        transform: scale(1.2, 0.8);
      }
      100% {
        transform: scale(0.8, 1.2);
      }
    }
  }
  /* animations */
`;
