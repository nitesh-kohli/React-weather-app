import { Box, Typography, styled } from '@mui/material';
import { LocationOn, settingsBrightness, Opacity, Brightness5, Brightness6, Dehaze, Cloud } from '@mui/icons-material';
import React from 'react';
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness';
import Grid from '@mui/system/Unstable_Grid';


const Row = styled(Typography)({
    padding: 10,
    fontSize: 20,
    letterspacing: 2,
    '& > svg': {
        marginRight: 10
    }

});

const Error = styled(Typography)({
    color: 'red',
    margin: 50

})

const Result = ({ result }) => {
    return (
        result && Object.keys(result).length > 0 ?
            <Box style={{ margin: '30px 60px ' }} >
                <Grid>
                    <Grid xs={12}>
                        <Row>

                            <LocationOn />
                            Location :
                            {result.name},{result.sys.country}
                        </Row>
                    </Grid>
                    <Row>
                        <SettingsBrightnessIcon />
                        Temperature : {result.main.temp} &deg;C
                    </Row>
                    <Row>
                        <Opacity />
                        Humidity : {result.main.humidity}
                    </Row>
                    <Row>
                        <Brightness5 />
                        Sun rise : {new Date(result.sys.sunrise * 1000).toLocaleTimeString()}
                    </Row>
                    <Row>
                        <Brightness6 />
                        Sun set : {new Date(result.sys.sunset * 1000).toLocaleTimeString()}
                    </Row>
                    <Row>
                        <Dehaze />
                        Weather : {result.weather[0].main}
                    </Row>
                    <Row>
                        <Cloud />
                        Clouds :{result.clouds.all}%
                    </Row>


                </Grid>

            </Box >
            : <Error>Please enter the value to check weather</Error>
    )

};

export default Result;