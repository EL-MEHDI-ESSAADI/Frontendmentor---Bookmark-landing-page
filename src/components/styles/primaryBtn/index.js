import styled from "styled-components";

const PrimaryBtn = styled.button`
   padding: 0.5rem 1rem;
   border: 2px solid var(--border-color);
   border-radius: 0.3rem;
   font-weight: 500;
   text-transform: capitalize;
   color: var(--text-color);
   background-color: var(--bg-color);
   box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
   transition: var(--trn-fast-smooth-color);

   &:hover {
      color: var(--hover-text-color, var(--text-color));
      background-color: var(--hover-bg-color, var(--bg-color));
      border-color: var(--hover-border-color, var(--border-color));
   }
`;

export default PrimaryBtn;