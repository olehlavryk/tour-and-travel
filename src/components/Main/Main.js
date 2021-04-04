import styled from 'styled-components';
import TraveFinder from 'src/components/Sections/TravelFinder/TraveFinder';
import TravelStory from 'src/components/Sections/TravelStory/TravelStory';
import Destinations from 'src/components/Sections/Destinations/Destinations';

const Main = () => {
    return (
        <StyledMain>
            <TraveFinder />
            <TravelStory />
            <Destinations />
        </StyledMain>
    );
}

export default Main;

const StyledMain = styled.main``;