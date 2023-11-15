import * as React from "react";
import { moderateScale } from "react-native-size-matters";
import Svg, { SvgProps, Path } from "react-native-svg";
const WeatherSvg = (props: SvgProps) => (
    <Svg
        width={moderateScale(20)}
        height={moderateScale(20)}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M16.7572 9.79C16.2272 7.23375 13.9631 5.3125 11.25 5.3125C9.41562 5.3125 7.79125 6.19469 6.76437 7.55344C6.59844 7.51875 6.42625 7.5 6.25 7.5C5.19 7.5 4.28594 8.16094 3.9225 9.0925C2.06531 9.31625 0.625 10.895 0.625 12.8125C0.625 14.8834 2.30406 16.5625 4.375 16.5625H15.9375C17.8359 16.5625 19.375 15.0234 19.375 13.125C19.375 11.5097 18.2591 10.1581 16.7572 9.79Z"
            fill="#6E83B7"
        />
        <Path
            d="M13.4997 11.6575C10.4791 11.6575 8.03 9.20875 8.03 6.18781C8.03 5.55125 8.14438 4.94313 8.34406 4.375C6.21594 5.12375 4.6875 7.14625 4.6875 9.53031C4.6875 12.5512 7.13625 15 10.1572 15C12.5416 15 14.5641 13.4716 15.3125 11.3434C14.7444 11.5431 14.1359 11.6575 13.4997 11.6575Z"
            fill="#FFE352"
        />
        <Path
            d="M10.4969 5.99906L9.375 5.625L10.4969 5.25094C10.8234 5.14219 11.0797 4.88594 11.1888 4.55906L11.5625 3.4375L11.9366 4.55938C12.0453 4.88594 12.3016 5.14219 12.6284 5.25125L13.75 5.625L12.6281 5.99906C12.3016 6.10781 12.0453 6.36406 11.9362 6.69094L11.5625 7.8125L11.1884 6.69062C11.0797 6.36406 10.8234 6.10781 10.4969 5.99906Z"
            fill="#FFE352"
        />
        <Path
            d="M14.0784 9.58875L13.4375 9.375L14.0784 9.16125C14.265 9.09906 14.4116 8.9525 14.4738 8.76594L14.6875 8.125L14.9012 8.76594C14.9634 8.9525 15.11 9.09906 15.2966 9.16125L15.9375 9.375L15.2966 9.58875C15.11 9.65094 14.9634 9.7975 14.9012 9.98406L14.6875 10.625L14.4738 9.98406C14.4116 9.79719 14.2653 9.65094 14.0784 9.58875Z"
            fill="#FFE352"
        />
        <Path
            d="M3.29313 12.9728L2.8125 12.8125L3.29313 12.6522C3.43313 12.6056 3.54281 12.4956 3.58969 12.3556L3.75 11.875L3.91031 12.3556C3.95687 12.4956 4.06687 12.6053 4.20687 12.6522L4.6875 12.8125L4.20687 12.9728C4.06687 13.0194 3.95719 13.1294 3.91031 13.2694L3.75 13.75L3.58969 13.2694C3.54313 13.1294 3.43313 13.0194 3.29313 12.9728Z"
            fill="#FFE352"
        />
        <Path
            d="M12.3556 16.7228L11.875 16.5625L12.3556 16.4022C12.4956 16.3556 12.6053 16.2456 12.6522 16.1056L12.8125 15.625L12.9728 16.1056C13.0194 16.2456 13.1294 16.3553 13.2694 16.4022L13.75 16.5625L13.2694 16.7228C13.1294 16.7694 13.0197 16.8794 12.9728 17.0194L12.8125 17.5L12.6522 17.0194C12.6056 16.8794 12.4956 16.7694 12.3556 16.7228Z"
            fill="#FFE352"
        />
        <Path
            d="M4.54313 4.53531L4.0625 4.375L4.54313 4.21469C4.68313 4.16813 4.79281 4.05813 4.83969 3.91813L5 3.4375L5.16031 3.91813C5.20688 4.05813 5.31687 4.16781 5.45687 4.21469L5.9375 4.375L5.45687 4.53531C5.31687 4.58187 5.20719 4.69187 5.16031 4.83187L5 5.3125L4.83969 4.83187C4.79313 4.69187 4.68313 4.58187 4.54313 4.53531Z"
            fill="#FFE352"
        />
        <Path
            d="M15.4806 3.59781L15 3.4375L15.4806 3.27719C15.6206 3.23063 15.7303 3.12063 15.7772 2.98063L15.9375 2.5L16.0978 2.98063C16.1444 3.12063 16.2544 3.23031 16.3944 3.27719L16.875 3.4375L16.3944 3.59781C16.2544 3.64437 16.1447 3.75437 16.0978 3.89437L15.9375 4.375L15.7772 3.89437C15.7306 3.75437 15.6206 3.64437 15.4806 3.59781Z"
            fill="#FFE352"
        />
    </Svg>
);
export default WeatherSvg;