import * as React from "react";
import { moderateScale } from "react-native-size-matters";
import Svg, { SvgProps, Rect, Path } from "react-native-svg";
const BackArrow = (props: SvgProps) => (
    <Svg
        width={moderateScale(44)}
        height={moderateScale(44)}
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Rect width={44} height={44} rx={22} fill="white" fillOpacity={0.15} />
        <Path
            d="M29 21H19L22.29 17.71C22.3837 17.617 22.4581 17.5064 22.5089 17.3846C22.5597 17.2627 22.5858 17.132 22.5858 17C22.5858 16.868 22.5597 16.7373 22.5089 16.6154C22.4581 16.4936 22.3837 16.383 22.29 16.29C22.1026 16.1037 21.8492 15.9992 21.585 15.9992C21.3208 15.9992 21.0674 16.1037 20.88 16.29L16.59 20.59C16.2144 20.9633 16.0022 21.4704 16 22C16.0049 22.5261 16.2168 23.0291 16.59 23.4L20.88 27.7C20.9732 27.7926 21.0838 27.8659 21.2054 27.9157C21.3269 27.9656 21.4571 27.991 21.5885 27.9905C21.7199 27.9901 21.8499 27.9637 21.9712 27.913C22.0924 27.8623 22.2024 27.7882 22.295 27.695C22.3876 27.6017 22.4609 27.4912 22.5107 27.3696C22.5606 27.248 22.586 27.1178 22.5856 26.9864C22.5851 26.8551 22.5588 26.725 22.508 26.6038C22.4573 26.4826 22.3832 26.3726 22.29 26.28L19 23H29C29.2652 23 29.5196 22.8946 29.7071 22.7071C29.8946 22.5196 30 22.2652 30 22C30 21.7348 29.8946 21.4804 29.7071 21.2929C29.5196 21.1054 29.2652 21 29 21Z"
            fill="white"
        />
    </Svg>
);
export default BackArrow;