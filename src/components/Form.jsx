import { useState } from 'react';
import { Box, InputBase, Button, styled } from '@mui/material';
import getWeather from '../services/api';
import Grid from '@mui/material/Grid';


const Container = styled(Box)({
    background: "black",
    padding: 10,
    width: 'auto'
});

const Input = styled(InputBase)({
    color: '#fff',
    marginRight: 20,

    fontSize: 18
});

const GetButton = styled(Button)({
    backgroundColor: '#e67e22',

})


const Form = ({ setResult }) => {

    const [data, setData] = useState({ city: '', country: '' })



    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
        console.log(data);
    };

    const getWeatherInfo = async () => {
        let response = await getWeather(data.city, data.country);
        setResult(response);
    }

    return <Container >
        <Input
            placeholder='city'
            onChange={(e) => handleChange(e)}
            name="city"
        />
        <Input
            placeholder='country'
            onChange={(e) => handleChange(e)}
            name="country"
        />
        <GetButton
            alignItems="center"
            variant="contained"
            onClick={() => getWeatherInfo()}
        >Get Weather</GetButton>






    </Container>
}

export default Form;