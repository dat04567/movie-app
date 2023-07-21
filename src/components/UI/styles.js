import styled from "styled-components";

export const ModalOverlay = styled.div`
   width: calc(100% - 3rem);
   height: 600px;
   background: black;
   transition: 0.6s;
   z-index: 10000;
   position: absolute;
   top: 30%;
   left: 50%;
   transform: translate(-50%,0);
   border-radius: 8px;
   border: 1px solid white;
`;
export const Backdrop = styled.div`
   position: fixed;
   background-color: rgba(0,0,0,.4);
   top: 0;
   right: 0;
   bottom: 0;
   left: 0;
   z-index: 999;
   transition: all 0.3s;
`;
