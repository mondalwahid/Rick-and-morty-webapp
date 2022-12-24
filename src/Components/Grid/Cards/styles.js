import styled from "@emotion/styled";
import { Grid } from "@mui/material";


export const MainContainer = styled("div")({
    width:"100%",
    height:"100%",
    backgroundColor:"#272b33",
});

export const MainGrid = styled(Grid)({
    display:"flex",
    alignItems:"center",
    justifyContent:"center"
});

export const InputContainer = styled('div')({
    width:"100%",
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    paddingTop:"1rem"
})

export const Input = styled('input')({
    padding:"1rem",
    width:300,
    fontSize:"1rem",
    border:"none",
})