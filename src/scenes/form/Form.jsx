import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import useMediaQuery from "@mui/material/useMediaQuery";
import * as Yup from "yup";
import Header from "../../components/Header";
import { tokens } from "../../theme"; // Assuming tokens contains your color definitions
import { useTheme } from "@mui/material/styles";



const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    address1: "",
    address2: "",
}


// PhoneRegex
const phoneRegexExp = /^((\+[1-9]{1,4}[ -]?)|(\[0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;


// validation schema

const userValidationSchema = Yup.object().shape({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    email: Yup
        .string()
        .email("Invalid email") 
        .required("Required"),
    contact: Yup
        .string()
        .matches(phoneRegexExp, "Invalid phone number")
        .required("Required"),
    address1: Yup.string().required("Required"),
    address2: Yup.string().required("Required"),

})


export default function UserForm() {

    const colors = tokens(useTheme());

    const isNonMobile = useMediaQuery("(min-width: 600px)");

    const handleFormSubmit = (values) => {
        // Handle form submission by sending the form data to the server, but noy now
        console.log('Form values:', values);
        alert('Form values submitted:', values);
        // You can add further processing here, such as sending the data to a server
        // reset Form
        

    }



    return (
        <Box m="20px">
            <Header title="CREATE USER" subtitle="Create a New User Profile" />
            <Formik
                onSubmit={handleFormSubmit}
                initialValues={initialValues}
                validationSchema={userValidationSchema}
            >
                {({
                    values, 
                    errors, 
                    touched, 
                    handleBlur, 
                    handleChange, 
                    handleSubmit
                })  => (
                 <form onSubmit={handleSubmit}>
                     <Box
                         display="grid"
                         gap="30px"
                         gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                         sx={{
                             "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
                         }}
                     >
                         <TextField
                             fullWidth
                             variant="filled"
                             type="text"
                             label="First Name"
                             onBlur={handleBlur}
                             onChange={handleChange}
                             value={values.firstName}
                             name="firstName"
                             error={!!touched.firstName && !!errors.firstName}
                             helperText={touched.firstName && errors.firstName}
                             sx={{ gridColumn: "span 2" }}
                         />
                         <TextField
                             fullWidth
                             variant="filled"
                             type="text"
                             label="Last Name"
                             onBlur={handleBlur}
                             onChange={handleChange}
                             value={values.lastName}
                             name="lastName"
                             error={!!touched.lastName && !!errors.lastName}
                             helperText={touched.lastName && errors.lastName}
                             sx={{ gridColumn: "span 2" }}
                        />
                        <TextField
                             fullWidth
                             variant="filled"
                             type="text"
                             label="Email"
                             onBlur={handleBlur}
                             onChange={handleChange}
                             value={values.email}
                             name="email"
                             error={!!touched.email && !!errors.email}
                             helperText={touched.email && errors.email}
                             sx={{ gridColumn: "span 4" }}
                        />
                        <TextField
                             fullWidth
                             variant="filled"
                             type="text"
                             label="Contact Number"
                             onBlur={handleBlur}
                             onChange={handleChange}
                             value={values.contact}
                             name="contact"
                             error={!!touched.contact && !!errors.contact}
                             helperText={touched.contact && errors.contact}
                             sx={{ gridColumn: "span 4" }}
                        />
                        <TextField
                             fullWidth
                             variant="filled"
                             type="text"
                             label="Address1"
                             onBlur={handleBlur}
                             onChange={handleChange}
                             value={values.address1}
                             name="address1"
                             error={!!touched.address1 && !!errors.address1}
                             helperText={touched.address1 && errors.address1}
                             sx={{ gridColumn: "span 4" }}
                        />
                        
                        <TextField
                             fullWidth
                             variant="filled"
                             type="text"
                             label="Address2"
                             onBlur={handleBlur}
                             onChange={handleChange}
                             value={values.address2}
                             name="address2"
                             error={!!touched.address2 && !!errors.address2}
                             helperText={touched.address2 && errors.address2}
                             sx={{ gridColumn: "span 4" }}
                        />
                        
                             
                     </Box>
                     <Box display="flex" justifyContent="end" mt="20px">
                        <Button
                            type="submit"
                            variant="contained"
                            color="secondary"
                            sx={{ color: colors.primary[400] }}
                        
                        >
                            Create a New User
                        </Button>
                     </Box>
                 </form>   
                )            
                }
            </Formik>
        </Box>
    )
}