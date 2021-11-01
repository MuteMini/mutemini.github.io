import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"

const StyledSvg = styled.svg`
   fill: var(--chakra-colors-palette-500);
   fill-opacity: 0;
   stroke: var(--chakra-colors-palette-400);
   stroke-dasharray: 0%;
   stroke-dashoffset: 100%;
   margin-bottom: -20px;
   width: inherit;
   height: auto;
`;

const Spacer = ({ width, controls }) => (
   <StyledSvg
      viewBox="0 0 720 120">
      <motion.path id="Selection"
         strokeWidth="3"
         strokeLinecap="round"
         initial={{ pathLength: 0, fillOpacity: 0 }}
         animate={controls}
         d="M 31.00,10.47
            C 35.30,9.88 40.17,9.34 40.84,15.02
               41.01,16.53 40.78,18.45 39.98,19.78
               38.36,22.45 35.45,22.67 33.27,24.56
               28.48,28.68 26.14,37.57 29.61,43.00
               37.45,55.24 63.29,59.84 77.00,60.04
               77.00,60.04 86.88,60.38 86.88,60.38
               86.88,60.38 97.00,61.00 97.00,61.00
               117.15,61.23 137.15,58.22 157.00,55.30
               157.00,55.30 164.00,54.54 164.00,54.54
               164.00,54.54 197.00,47.46 197.00,47.46
               197.00,47.46 230.00,42.84 230.00,42.84
               230.00,42.84 252.00,39.30 252.00,39.30
               252.00,39.30 260.00,38.72 260.00,38.72
               260.00,38.72 295.00,34.83 295.00,34.83
               295.00,34.83 304.17,33.65 304.17,33.65
               304.17,33.65 312.00,33.00 312.00,33.00
               312.00,33.00 340.00,29.17 340.00,29.17
               340.00,29.17 370.00,26.91 370.00,26.91
               370.00,26.91 385.00,25.04 385.00,25.04
               385.00,25.04 399.00,25.04 399.00,25.04
               399.00,25.04 429.00,23.00 429.00,23.00
               429.00,23.00 482.00,23.00 482.00,23.00
               482.00,23.00 512.00,25.00 512.00,25.00
               520.42,25.01 520.59,25.80 528.00,26.71
               528.00,26.71 549.00,29.46 549.00,29.46
               549.00,29.46 566.00,33.58 566.00,33.58
               593.65,39.67 621.03,46.72 647.00,58.19
               647.00,58.19 665.00,65.71 665.00,65.71
               665.00,65.71 679.00,73.10 679.00,73.10
               679.00,73.10 687.00,76.55 687.00,76.55
               691.25,78.63 697.28,84.52 692.40,89.40
               688.46,93.35 680.86,89.66 677.00,87.61
               677.00,87.61 638.00,69.03 638.00,69.03
               621.88,61.65 597.37,55.07 580.00,50.42
               563.39,45.97 546.03,41.73 529.00,39.30
               529.00,39.30 520.81,38.19 520.81,38.19
               515.18,37.49 513.22,37.08 507.00,37.00
               507.00,37.00 475.00,35.00 475.00,35.00
               475.00,35.00 436.00,35.00 436.00,35.00
               436.00,35.00 406.00,37.00 406.00,37.00
               406.00,37.00 395.00,37.00 395.00,37.00
               395.00,37.00 377.00,38.91 377.00,38.91
               377.00,38.91 347.00,41.17 347.00,41.17
               347.00,41.17 319.00,45.00 319.00,45.00
               319.00,45.00 311.09,45.57 311.09,45.57
               311.09,45.57 302.00,46.83 302.00,46.83
               302.00,46.83 267.00,50.71 267.00,50.71
               267.00,50.71 259.00,51.30 259.00,51.30
               259.00,51.30 238.00,54.70 238.00,54.70
               238.00,54.70 204.00,59.45 204.00,59.45
               204.00,59.45 157.00,68.70 157.00,68.70
               157.00,68.70 132.00,71.17 132.00,71.17
               132.00,71.17 112.00,73.00 112.00,73.00
               112.00,73.00 92.00,73.00 92.00,73.00
               92.00,73.00 70.00,72.00 70.00,72.00
               53.48,71.80 29.99,66.53 19.39,53.00
               11.83,43.36 14.32,22.34 23.11,14.22
               25.75,11.79 27.67,11.29 31.00,10.47 Z" />
   </StyledSvg>
);

export default Spacer;