import { css } from 'lit-element';

export const NavListStyles = css`
  @media screen and (max-width: 767px) {
    .navlist-labels {
      width: 100%;
    }
  }
  .navlist-labels__checkbox {
    display: none;
  }
  .navlist-labels__checkbox:checked + .navlist-labels__txt {
    border-radius: var(--border-radius-selected, 0);
    border-top: var(--border-top-selected-element, 2px solid #cc3743);
    border-bottom: var(--border-bottom-selected-element, 2px solid #cc3743);
    border-left: var(--border-left-selected-element, 2px solid #cc3743);
    border-right: var(--border-right-selected-element, 2px solid #cc3743);
    padding: var(--padding-selected-element, 10px 13px);
  }
  .navlist-labels__title {
    font-family: "Dosis", sans-serif;
    font-weight: 700;
    letter-spacing: 3px;
    font-size: 16px;
    margin-bottom: 10px;
  }
  .navlist-labels__group {
    display: flex;
    margin-bottom: 15px;
  }
  @media screen and (max-width: 992px) {
    .navlist-labels__group {
      justify-content: center;
    }
  }
  .navlist-labels__group:last-child {
    margin-bottom: 0;
  }
  .navlist-labels__item {
    margin: 5px;
    height: 50px;
  }
  .navlist-labels__item:first-child {
    margin-left: 0;
  }
  .navlist-labels__txt {
    display: block;
    border-top: var(--border-top-list-element, '2px solid transparent');
    border-bottom: var(--border-bottom-list-element, '2px solid transparent');
    border-right: var(--border-right-list-element, '2px solid transparent');
    border-left: var(--border-left-list-element, '2px solid transparent');
    font-size: 14px;
    padding: var(--padding-list-element, 10px 20px);
    border-radius: var(--border-radius-element, 0);
    transition: all 0.3s;
    letter-spacing: 2px;
    width: var(--width-list-element, 'auto');
    height: var(--height-list-element, 'auto');
    position: relative;
    top: var(calc(-1 * --height-list-element / 2), 0);
    left: var(calc(-1 * --width-list-element / 2), 0);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .cursor-pointer {
    cursor: pointer;
  }
  .off {
    opacity: 0;
  }

  .fadein {
    opacity: 1;
    animation-name: fadeInOpacity;
    animation-iteration-count: 1;
    animation-timing-function: ease-in;
    animation-duration: 0.5s;
  }

  @keyframes fadeInOpacity {
    0% { opacity: 0; }
    100% { opacity: 1; } 
  }
`;