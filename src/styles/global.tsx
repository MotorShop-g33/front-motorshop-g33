import { createGlobalStyle } from "styled-components";

export const GlobalStyleDefault = createGlobalStyle`

// COLORS
:root {
    --brand-1: #092548;
    --brand-2: #1B4479;
    --brand-3: #B0A6F0;
    --brand-4: #EDEAFD;

    --gray-0: #0B0D0D;
    --gray-1: #212529;
    --gray-2: #495057;
    --gray-3: #868E96;
    --gray-4: #ADB5BD;
    --gray-5: #CED4DA;
    --gray-6: #DEE2E6;
    --gray-7: #E9ECEF;
    --gray-8: #F1F3F5;
    --gray-9: #F8F9FA;
    --gray-10: #FDFDFD;

    --boxShdown: #00000025;

    --white-fixed: #FFFFFF;

    --alert-1: #CD2B31;
    --alert-2: #FDD8D8;
    --alert-3: #FFE5E5;

    --success-1: #18794E;
    --success-2: #CCEBD7;
    --success-3: #DDF3E4;

    --random-1: #E34D8C;
    --random-2: #C04277;
    --random-3: #7D2A4D;
    --random-4: #7000FF;
    --random-5: #6200E3;
    --random-6: #36007D;
    --random-7: #349974;
    --random-8: #2A7D5F;
    --random-9: #153D2E;
    --random-10: #6100FF;
    --random-11: #5700E3;
    --random-12: #30007D;
}

*{
    margin: 0;
    padding: 0;
    box-sizing: 0;
}

button{
    cursor: pointer;
}

li{
    list-style: none;
}

a{
    cursor: pointer;
}
`;
