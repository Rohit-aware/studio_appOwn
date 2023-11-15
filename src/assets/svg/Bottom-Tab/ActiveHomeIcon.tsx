import * as React from "react";
import { moderateScale } from "react-native-size-matters";
import Svg, { SvgProps, G, Path, Defs, ClipPath, Rect } from "react-native-svg";
const ActiveHomeIcon = (props: SvgProps) => (
    <Svg
        width={moderateScale(24)}
        height={moderateScale(24)}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <G clipPath="url(#clip0_187_418)">
            <Path
                d="M12 14.9918C10.3432 14.9918 9 16.335 9 17.9918V23.9918H15V17.9918C15 16.335 13.6568 14.9918 12 14.9918Z"
                fill="#FD4B01"
            />
            <Path
                d="M17 17.9922V23.9922H21C22.6568 23.9922 24 22.649 24 20.9922V11.8712C24.0002 11.3517 23.7983 10.8525 23.437 10.4792L14.939 1.29218C13.4396 -0.330162 10.9089 -0.429771 9.28655 1.06967C9.20949 1.14092 9.13523 1.21512 9.06403 1.29218L0.581016 10.4762C0.208734 10.851 -0.000140554 11.3579 7.09607e-08 11.8862V20.9922C7.09607e-08 22.649 1.34316 23.9922 3 23.9922H6.99998V17.9922C7.01869 15.2654 9.22027 13.0386 11.8784 12.9745C14.6255 12.9082 16.9791 15.1729 17 17.9922Z"
                fill="#FD4B01"
            />
            <Path
                d="M12 14.9918C10.3432 14.9918 9 16.335 9 17.9918V23.9918H15V17.9918C15 16.335 13.6568 14.9918 12 14.9918Z"
                fill="#FD4B01"
            />
        </G>
        <Defs>
            <ClipPath id="clip0_187_418">
                <Rect width={24} height={24} fill="white" />
            </ClipPath>
        </Defs>
    </Svg>
);
export default ActiveHomeIcon;
