import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --gradient: linear-gradient(117.57deg, rgba(5, 37, 69, 0.71) 0%, rgba(81, 167, 252, 0.8) 97.92%, #51A7FC 97.92%);

    --overlay: rgba(0,0,0,0.5);

    --white: #fff;

    --blue-50: #f6f9fd;
    --blue-100: #CFDEF3;
    --blue-300: #51A7FC;
    --blue-400: #1665D8;
    --blue-500: #014077;
    --blue-600: #063966;
    --blue-700: #05233E;
    --blue-800: #041524;

    --gray-50:  #e5e5e5;
    --gray-100: #efefef;
    --gray-200: #d8d8d8;
    --gray-300: #c4c4c4;
    --gray-400: #a8a8b3;
    --gray-500: #9D9D9D;
    --gray-600: #6D6D6D;
    --gray-700: #595959;
    --gray-800: #3D3D3D;
    --gray-900: #777777;

    --green-500: #008146;
    --green-600: #089b63;

    --red-500: #EE1717;
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    -webkit-font-smoothing: antialiased
  }

  body, input, button, textarea {
    font: 18px 'Poppins', sans-serif;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  .react-modal-overlay {
    background: var(--overlay);
    position: fixed;
    bottom: 0;
    top: 0;
    right: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-modal-content {
    width: 100%;
    max-width: 481px;
    background: var(--white);
    padding: 3rem;
    position: relative;
    border-radius: 0.24rem;
    display: flex;
    flex-direction: column;
  }

  ::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }

  ::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: var(--gray-300);
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: var(--gray-500);
  }
`;
