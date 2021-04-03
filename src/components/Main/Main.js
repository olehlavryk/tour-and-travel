import styled from 'styled-components';
import TraveFinder from 'src/components/Sections/TravelFinder/TraveFinder';
import TravelStory from 'src/components/Sections/TravelStory/TravelStory';

const Main = () => {
    return (
        <StyledMain>
            <TraveFinder />
            <TravelStory />
        </StyledMain>
    );
}

export default Main;

const StyledMain = styled.main``;