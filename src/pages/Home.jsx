import { useState } from 'react';
import Grid from '@mui/material/Grid';
import { Box, styled } from '@mui/material';
import Sunset from '../assets/images/bg.jpg';
import Form from "../components/Form";
import Result from "../components/Result";


const Component = styled(Box)({
    height: 550,
    backgroundColor: '#fff',
    borderRadius: '10px',
    backgroundColor: (theme) => theme.palette.mode === 'dark' ? '#1A2027' : '#FFF',

})


const Image = styled(Box)({
    backgroundImage: `url(${Sunset})`,
    width: '27%',
    height: '80%',
    backgroundSize: 'cover',
    borderRadius: '20px 0 0 20px',

})

const Home = () => {

    const [result, setResult] = useState({});

    return (
        <Grid >
            <Grid>
                <Component
                    sx={{
                        mx: 'auto',
                        mt: 5,
                        boxShadow: 3,
                        width: { xl: 950, lg: 850, md: 650, sm: 650, xs: 260 },
                        height: { xs: 800, sm: 550 }
                    }}
                >
                    <Box >
                        <Form setResult={setResult} />
                        <Result result={result} />
                    </Box>


                </Component>
            </Grid>
        </Grid>
    )
};

export default Home;

// style={{ width: '73%', height: '0%' }}