import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  /* monoton-regular - latin */
  @font-face {
    font-family: 'Monoton';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url('/fonts/monoton-v9-latin-regular.eot'); /* IE9 Compat Modes */
    src: local('Monoton'), local('Monoton-Regular'),
        url('/fonts/monoton-v9-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('/fonts/monoton-v9-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
        url('/fonts/monoton-v9-latin-regular.woff') format('woff'), /* Modern Browsers */
        url('/fonts/monoton-v9-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
        url('/fonts/monoton-v9-latin-regular.svg#Monoton') format('svg'); /* Legacy iOS */
  }
  /* roboto-regular - latin */
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url('/fonts/roboto-v20-latin-regular.eot'); /* IE9 Compat Modes */
    src: local('Roboto'), local('Roboto-Regular'),
        url('/fonts/roboto-v20-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('/fonts/roboto-v20-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
        url('/fonts/roboto-v20-latin-regular.woff') format('woff'), /* Modern Browsers */
        url('/fonts/roboto-v20-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
        url('/fonts/roboto-v20-latin-regular.svg#Roboto') format('svg'); /* Legacy iOS */
  }
  /* raleway-regular - latin */
  @font-face {
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url('/fonts/raleway-v14-latin-regular.eot'); /* IE9 Compat Modes */
    src: local('Raleway'), local('Raleway-Regular'),
        url('/fonts/raleway-v14-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('/fonts/raleway-v14-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
        url('/fonts/raleway-v14-latin-regular.woff') format('woff'), /* Modern Browsers */
        url('/fonts/raleway-v14-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
        url('/fonts/raleway-v14-latin-regular.svg#Raleway') format('svg'); /* Legacy iOS */
  }
`;