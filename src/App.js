import React, {useState} from "react"
import BatAnimation from "./assets/img/idea-bat-animation.gif"
import Start from "./assets/img/idea-start.png"
import CleanBackground from "./assets/img/idea-bg.png"
import TitleBrief from "./assets/img/idea-title-1.png"
import TitleMoodboard from "./assets/img/idea-title-2.png"
import TitleMarket from "./assets/img/idea-title-3.png"
import PageBrief from "./assets/img/idea-web-1.png"
import PageMoodboard from "./assets/img/idea-web-2.png"
import PageMarket from "./assets/img/idea-web-3.png"
import styled from "styled-components";

const Height = window.innerHeight;
const SizeRatio = Height / 1080.0;

const StyledImage = styled.img`
position: absolute;
  max-height: 100%;
  max-width: 100%;
  z-index: ${props => props.z || 0};
`;

const BatPointer = styled.div`
  position: absolute;
  top: ${props => SizeRatio * 350 + SizeRatio * 80 * props.pageIndex}px;
  z-index: 3;
`;

const BatImage = styled.img`
  margin-left: 15px;
  width: ${SizeRatio * 100}px;
`;

const PageTitle = styled.div`
  position: absolute;
  top: ${props => SizeRatio * 320 + SizeRatio * 80 * props.pageIndex}px;
  cursor: pointer;
  z-index: 3;
`;

const PageTitleImage = styled.img`
  margin-left: ${SizeRatio * 125}px;
  height: ${SizeRatio * 85}px;
`;

const App = () => {

    const [started, setStarted] = useState(false);
    const [backgroundLoaded, setBackgroundLoaded] = useState(false);
    const [contentLoaded, setContentLoaded] = useState(false);
    const [pageIndex, setPageIndex] = useState(0);

    const start = () => {
        setStarted(true);
        setTimeout(() => setBackgroundLoaded(true), 3000);
        setTimeout(() => setContentLoaded(true), 4500);
    };

    return <React.Fragment>
        <div onClick={() => !started && start()} className={started ? "hidden" : "visible"}>
            <StyledImage src={Start} alt="start" z={3}/>
        </div>
        <StyledImage z={1} src={CleanBackground} alt="background" className={backgroundLoaded ? "visible" : "hidden"}/>
        <div className={contentLoaded ? "visible" : "hidden"}>
            <BatPointer pageIndex={pageIndex}>
                <BatImage src={BatAnimation} alt="bat"/>
            </BatPointer>
            <PageTitle pageIndex={0} onClick={() => setPageIndex(0)}>
                <PageTitleImage src={TitleBrief} alt="brief"/>
            </PageTitle>
            <PageTitle pageIndex={1} onClick={() => setPageIndex(1)}>
                <PageTitleImage src={TitleMoodboard} alt="moodboard"/>
            </PageTitle>
            <PageTitle pageIndex={2} onClick={() => setPageIndex(2)}>
                <PageTitleImage src={TitleMarket} alt="market-research"/>
            </PageTitle>
            {
                pageIndex === 0 && <StyledImage z={2} src={PageBrief} alt="brief"/>
            }
            {
                pageIndex === 1 && <StyledImage z={2} src={PageMoodboard} alt="mooboard"/>
            }
            {
                pageIndex === 2 && <StyledImage z={2} src={PageMarket} alt="market"/>
            }
        </div>
    </React.Fragment>
        ;
};

export default App;
