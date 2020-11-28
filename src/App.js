import React, {useState} from "react"
import BatAnimation from "./assets/img/idea-bat-animation.gif"
import CrowAnimation from "./assets/img/idea-crov-fly-animation.gif"
import Start from "./assets/img/idea-start.png"
import TitleBrief from "./assets/img/idea-title-1.png"
import TitleMoodboard from "./assets/img/idea-title-2.png"
import TitleMarket from "./assets/img/idea-title-3.png"
import TitleRecipe from "./assets/img/idea-title-4.png"
import TitleContent from "./assets/img/idea-title-5.png"
import PageBrief from "./assets/img/idea-web-1.png"
import PageMoodboard from "./assets/img/idea-web-2.png"
import PageMarket from "./assets/img/idea-web-3.png"
import BackgroundAnimation from "./assets/img/idea-bg-animation.gif"
import styled from "styled-components";

const Height = window.innerHeight;
const SizeRatio = Height / 1080.0;

const StyledImage = styled.img`
position: absolute;
  max-height: 100%;
  max-width: 100%;
  z-index: ${props => props.z || 0};
`;

const CrowImage = styled.img`
  position: absolute;
  top: 60%;
  left: 40%;
  z-index: 3;
  width: ${SizeRatio * 250}px;
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
        setTimeout(() => setContentLoaded(true), 6000);
    };

    return <React.Fragment>
        <div onClick={() => !started && start()} className={started ? "hidden" : "visible"}>
            <StyledImage src={Start} alt="start" z={3} draggable="false" ondragstart="return false;"/>
            <CrowImage src={CrowAnimation} alt="crow"/>
        </div>
        {
            backgroundLoaded && <StyledImage z={1} src={BackgroundAnimation} alt="background" draggable="false" ondragstart="return false;"/>
        }
        <div>
            <BatPointer pageIndex={pageIndex} className={contentLoaded ? "visible" : "hidden"}>
                <BatImage src={BatAnimation} alt="bat" draggable="false" ondragstart="return false;"/>
            </BatPointer>
            <PageTitle pageIndex={0} onClick={() => setPageIndex(0)} className={contentLoaded ? "visible" : "hidden"}>
                <PageTitleImage src={TitleBrief} alt="brief" draggable="false" ondragstart="return false;"/>
            </PageTitle>
            <PageTitle pageIndex={1} onClick={() => setPageIndex(1)} className={contentLoaded ? "visible" : "hidden"}>
                <PageTitleImage src={TitleMoodboard} alt="moodboard" draggable="false" ondragstart="return false;"/>
            </PageTitle>
            <PageTitle pageIndex={2} onClick={() => setPageIndex(2)} className={contentLoaded ? "visible" : "hidden"}>
                <PageTitleImage src={TitleMarket} alt="market-research" draggable="false" ondragstart="return false;"/>
            </PageTitle>
            <PageTitle pageIndex={3} onClick={() => setPageIndex(3)} className={contentLoaded ? "visible" : "hidden"}>
                <PageTitleImage src={TitleRecipe} alt="recipe" draggable="false" ondragstart="return false;"/>
            </PageTitle>
            <PageTitle pageIndex={4} onClick={() => setPageIndex(4)} className={contentLoaded ? "visible" : "hidden"}>
                <PageTitleImage src={TitleContent} alt="content" draggable="false" ondragstart="return false;"/>
            </PageTitle>
                {
                    pageIndex === 0 && <StyledImage z={2} src={PageBrief} alt="brief" draggable="false" ondragstart="return false;" className={contentLoaded ? "visible" : "hidden"}/>
                }
                {
                    pageIndex === 1 && <StyledImage z={2} src={PageMoodboard} alt="mooboard" draggable="false" ondragstart="return false;"/>
                }
                {
                    pageIndex === 2 && <StyledImage z={2} src={PageMarket} alt="market" draggable="false" ondragstart="return false;"/>
                }
                {
                    pageIndex === 3 && <StyledImage z={2} src={PageBrief} alt="market" draggable="false" ondragstart="return false;"/>
                }
                {
                    pageIndex === 4 && <StyledImage z={2} src={PageBrief} alt="market" draggable="false" ondragstart="return false;"/>
                }
        </div>
    </React.Fragment>
        ;
};

export default App;
