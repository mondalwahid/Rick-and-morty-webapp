import styled from "@emotion/styled";

export const CardContainer = styled('div')({
    width:"100%",
    height:"100%",
    // display:"flex",
    borderRadius:8,
    backgroundColor:"#3c3e44",
});

export const CharacterImageContainer = styled('div')({
    width: "100%",
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat"
})

export const CharacterDetailsContainer = styled('div')({
    marginLeft:".8rem"
});

export const StatusAndSpeciesContainer = styled('div')({
    display:"flex", alignItems:"center"
});

export const StatusIcon = styled('div')({
    width:"0.6rem",
    height:"0.6rem",
    borderRadius:"50%",
    marginRight:10
});

export const CardContentHeader = styled('h4')({
    marginTop:0,
    color:"#fff"
});

export const CardContentText = styled('p')({
    marginBottom:5,
    color:"#8d8d8e"
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