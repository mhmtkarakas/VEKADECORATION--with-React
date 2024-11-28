import React from "react";
import { Box, Grid, Typography, TextField, Button, Paper } from "@mui/material";
import { styled } from "@mui/system";

const StyledFormContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  backgroundColor: "#333",
  color: "#fff",
  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.5)",
}));

const ContactPage = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        padding: "2rem",
        backgroundColor: "#222",
        color: "#fff",
        borderRadius: "8px",
      }}
    >
      <Grid container spacing={4} alignItems="center">
        {/* Sol Taraf: Harita */}
        <Grid item xs={12} md={6}>
          <Box
            component="iframe"
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3146.666054936998!2d40.13475557589122!3d37.93823127194469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzfCsDU2JzE3LjYiTiA0MMKwMDgnMTQuNCJF!5e0!3m2!1str!2str!4v1732808039829!5m2!1str!2str"
            sx={{
              width: "100%",
              height: "400px",
              border: "none",
              borderRadius: "8px",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.5)",
            }}
            title="Firmamızın Konumu"
            loading="lazy"
          ></Box>
        </Grid>

        {/* Sağ Taraf: İletişim Formu */}
        <Grid item xs={12} md={6}>
          <StyledFormContainer>
            <Typography
              variant="h4"
              sx={{
                marginBottom: "1rem",
                color: "#ffcc00",
                fontWeight: "bold",
              }}
            >
              Bizimle İletişime Geçin
            </Typography>
            <form>
              <TextField
                fullWidth
                variant="outlined"
                label="İsim"
                placeholder="Adınızı girin"
                sx={{
                  marginBottom: "1rem",
                  backgroundColor: "#222",
                  "& .MuiOutlinedInput-root": {
                    color: "#fff",
                  },
                  "& .MuiOutlinedInput-root fieldset": {
                    borderColor: "#555",
                  },
                  "& .MuiOutlinedInput-root:hover fieldset": {
                    borderColor: "#ffcc00",
                  },
                  "& .MuiOutlinedInput-root.Mui-focused fieldset": {
                    borderColor: "#ffcc00",
                    boxShadow: "0 0 5px rgba(255, 204, 0, 0.8)",
                  },
                }}
              />
              <TextField
                fullWidth
                variant="outlined"
                label="E-posta"
                placeholder="E-posta adresinizi girin"
                sx={{
                  marginBottom: "1rem",
                  backgroundColor: "#222",
                  "& .MuiOutlinedInput-root": {
                    color: "#fff",
                  },
                  "& .MuiOutlinedInput-root fieldset": {
                    borderColor: "#555",
                  },
                  "& .MuiOutlinedInput-root:hover fieldset": {
                    borderColor: "#ffcc00",
                  },
                  "& .MuiOutlinedInput-root.Mui-focused fieldset": {
                    borderColor: "#ffcc00",
                    boxShadow: "0 0 5px rgba(255, 204, 0, 0.8)",
                  },
                }}
              />
              <TextField
                fullWidth
                variant="outlined"
                label="Mesaj"
                placeholder="Mesajınızı yazın"
                multiline
                rows={4}
                sx={{
                  marginBottom: "1rem",
                  backgroundColor: "#222",
                  "& .MuiOutlinedInput-root": {
                    color: "#fff",
                  },
                  "& .MuiOutlinedInput-root fieldset": {
                    borderColor: "#555",
                  },
                  "& .MuiOutlinedInput-root:hover fieldset": {
                    borderColor: "#ffcc00",
                  },
                  "& .MuiOutlinedInput-root.Mui-focused fieldset": {
                    borderColor: "#ffcc00",
                    boxShadow: "0 0 5px rgba(255, 204, 0, 0.8)",
                  },
                }}
              />
              <Button
                variant="contained"
                fullWidth
                sx={{
                  backgroundColor: "#ffcc00",
                  color: "#333",
                  fontWeight: "bold",
                  "&:hover": {
                    backgroundColor: "#e6b800",
                  },
                }}
              >
                Gönder
              </Button>
            </form>
          </StyledFormContainer>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactPage;
