import {Box, Button, TextField, useTheme} from "@mui/material";
import {tokens} from "../../theme";
import {Formik, Form, Field, ErrorMessage} from "formik";
import useMediaQuery from "@mui/material/useMediaQuery"; 
import * as Yup from "yup";
import Header from "../../components/Header";


export default function Form() {
    
    const isNonMobile = useMediaQuery("(min-width: 600px)");
    
    
    
    return ( 
        <Box m="20px">

        </Box>
    )
}