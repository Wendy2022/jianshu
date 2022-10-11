import {createGlobalStyle} from 'styled-components';

export const GlobalIconFont= createGlobalStyle`
@font-face {
  font-family: "iconfont"; /* Project id 3598937 */
  src: url('//at.alicdn.com/t/c/font_3598937_5rsiz5mfqmh.woff2?t=1661590617016') format('woff2'),
       url('//at.alicdn.com/t/c/font_3598937_5rsiz5mfqmh.woff?t=1661590617016') format('woff'),
       url('//at.alicdn.com/t/c/font_3598937_5rsiz5mfqmh.ttf?t=1661590617016') format('truetype');
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`;
