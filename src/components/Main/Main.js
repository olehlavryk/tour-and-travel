import styled from 'styled-components';
import TraveFinder from 'src/components/Sections/TravelFinder/TraveFinder';
import TravelStory from 'src/components/Sections/TravelStory/TravelStory';
import Destinations from 'src/components/Sections/Destinations/Destinations';
import Testimonials from "src/components/Sections/Testimonials/Testimonials";
import Stories from 'src/components/Sections/Stories/Stories';

const Main = () => {
    return (
        <StyledMain>
            <TraveFinder />
            <TravelStory />
            {/* <Destinations />
            <Testimonials />
            <Stories /> */}
        </StyledMain>
    );
}

export default Main;

const StyledMain = styled.main``;