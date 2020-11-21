import React, {useState} from "react"
import BatAnimation from "./assets/img/idea-bat-animation.gif"
import Start from "./assets/img/idea-start.png"
import CleanBackground from "./assets/img/idea-bg.png"
import TitleBrief from "./assets/img/idea-title-1.png"
import TitleMoodboard from "./assets/img/idea-title-2.png"
import TitleMarket from "./assets/img/idea-title-3.png"
import PageBrief from "./assets/img/idea-web-1.png"
import PageMoodboard from "./assets/img/idea-web-2.png"
import styled from "styled-components";

const Height = window.innerHeight;
const HeightRatio = Height / 1080.0;

const StyledImage = styled.img`
position: absolute;
  max-height: 100%;
  max-width: 100%;
  z-index: ${props => props.z};
`;

const BatPointer = styled.div`
  position: absolute;
  top: ${props => HeightRatio * 350 + HeightRatio * 80 * props.pageIndex}px;
  z-index: 3;
`;

const BatImage = styled.img`
  margin-left: 15px;
  width: 100px;
`;

const PageTitle = styled.div`
  position: absolute;
  top: ${props => HeightRatio * 320 + HeightRatio * 80 * props.pageIndex}px;
  cursor: pointer;
  z-index: 3;
`;

const PageTitleImage = styled.img`
  margin-left: 125px;
  height: 100px;
`;

const App = () => {

    const [started, setStarted] = useState(false);
    const [backgroundLoaded, setBackgroundLoaded] = useState(false);
    const [contentLoaded, setContentLoaded] = useState(false);
    const [pageIndex, setPageIndex] = useState(0);

    const start = () => {
        setStarted(true);
        setTimeout(() => setBackgroundLoaded(true), 3000);
        setTimeout(() => setContentLoaded(true), 6000);
    };

    return <React.Fragment>
        <div onClick={() => !started && start()} className={started ? "hidden" : "visible"}>
            <StyledImage src={Start} alt="start"/>
        </div>
        <StyledImage z={1} src={CleanBackground} alt="background" className={backgroundLoaded ? "visible" : "hidden"}/>
        {
            contentLoaded && <BatPointer pageIndex={pageIndex}>
                <BatImage src={BatAnimation} alt="bat"/>
            </BatPointer>
        }
        {
            contentLoaded && <React.Fragment>
                <PageTitle pageIndex={0} onClick={() => setPageIndex(0)}>
                    <PageTitleImage src={TitleBrief} alt="brief"/>
                </PageTitle>
                <PageTitle pageIndex={1} onClick={() => setPageIndex(1)}>
                    <PageTitleImage src={TitleMoodboard} alt="moodboard"/>
                </PageTitle>
                <PageTitle pageIndex={2} onClick={() => setPageIndex(2)}>
                    <PageTitleImage src={TitleMarket} alt="market-research"/>
                </PageTitle>
            </React.Fragment>
        }
        {
            contentLoaded &&
            pageIndex === 0 && <StyledImage z={2} src={PageBrief} alt="background"/>
        }
        {
            contentLoaded &&
            pageIndex === 1 && <StyledImage z={2} src={PageMoodboard} alt="background"/>
        }
    </React.Fragment>;
};

export default App;
