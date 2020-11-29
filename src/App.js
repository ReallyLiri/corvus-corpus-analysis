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
import PageRecipe from "./assets/img/idea-web-4.png"
import PageContent from "./assets/img/idea-web-5.png"
import BackgroundAnimation from "./assets/img/idea-bg-animation.gif"
import styled from "styled-components";

const Height = window.innerHeight;
const SizeRatio = Height / 1080.0;

const BaseImage = ({className, ...props}) => <img alt="alt" className={className} {...props} ondragstart="return false;" draggable="false"/>;

const StyledImage = styled(BaseImage)`
position: absolute;
  max-height: 100%;
  max-width: 100%;
  z-index: ${props => props.z || 0};
`;

const CrowImage = styled(BaseImage)`
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

const BatImage = styled(BaseImage)`
  margin-left: 15px;
  width: ${SizeRatio * 100}px;
`;

const PageTitle = styled.div`
  position: absolute;
  top: ${props => SizeRatio * 320 + SizeRatio * 80 * props.pageIndex}px;
  cursor: pointer;
  z-index: 3;
`;

const PageTitleImage = styled(BaseImage)`
  margin-left: ${SizeRatio * 125}px;
  height: ${SizeRatio * 85}px;
`;

const loadImage = path =>
    new Promise(resolve => {
        const img = new Image();
        img.onload = () => resolve(path);
        img.src = path;
    });

const Images = [
    Start,
    TitleBrief,
    TitleMoodboard,
    TitleMarket,
    TitleRecipe,
    TitleContent,
    PageBrief,
    PageMoodboard,
    PageMarket,
    PageRecipe,
    PageContent,
    BackgroundAnimation
];

Promise.all(Images.map(loadImage))
    .then(
        () => console.log("Prefetching images done"),
        err => console.error(err)
    );

const App = () => {

    const [started, setStarted] = useState(false);
    const [backgroundLoaded, setBackgroundLoaded] = useState(false);
    const [pagesLoaded, setPagesLoaded] = useState(false);
    const [pageIndex, setPageIndex] = useState(0);

    const start = () => {
        setStarted(true);
        setTimeout(() => setBackgroundLoaded(true), 3000);
        setTimeout(() => setPagesLoaded(true), 7000);
    };

    const visibleOnPagesLoadedClassName = pagesLoaded ? "visible" : "hidden";

    return <React.Fragment>
        <div onClick={() => !started && start()} className={started ? "hidden" : "visible"}>
            <StyledImage src={Start} z={3}/>
            <CrowImage src={CrowAnimation}/>
        </div>
        {
            backgroundLoaded && <StyledImage z={1} src={BackgroundAnimation}/>
        }
        <div>
            <BatPointer pageIndex={pageIndex} className={visibleOnPagesLoadedClassName}>
                <BatImage src={BatAnimation}/>
            </BatPointer>
            <PageTitle pageIndex={0} onClick={() => setPageIndex(0)} className={visibleOnPagesLoadedClassName}>
                <PageTitleImage src={TitleBrief}/>
            </PageTitle>
            <PageTitle pageIndex={1} onClick={() => setPageIndex(1)} className={visibleOnPagesLoadedClassName}>
                <PageTitleImage src={TitleMoodboard}/>
            </PageTitle>
            <PageTitle pageIndex={2} onClick={() => setPageIndex(2)} className={visibleOnPagesLoadedClassName}>
                <PageTitleImage src={TitleMarket}/>
            </PageTitle>
            <PageTitle pageIndex={3} onClick={() => setPageIndex(3)} className={visibleOnPagesLoadedClassName}>
                <PageTitleImage src={TitleRecipe}/>
            </PageTitle>
            <PageTitle pageIndex={4} onClick={() => setPageIndex(4)} className={visibleOnPagesLoadedClassName}>
                <PageTitleImage src={TitleContent}/>
            </PageTitle>
            {
                pageIndex === 0 && <StyledImage z={2} src={PageBrief} className={visibleOnPagesLoadedClassName}/>
            }
            {
                pageIndex === 1 && <StyledImage z={2} src={PageMoodboard}/>
            }
            {
                pageIndex === 2 && <StyledImage z={2} src={PageMarket}/>
            }
            {
                pageIndex === 3 && <StyledImage z={2} src={PageRecipe}/>
            }
            {
                pageIndex === 4 && <StyledImage z={2} src={PageContent}/>
            }
        </div>
    </React.Fragment>
};

export default App;
