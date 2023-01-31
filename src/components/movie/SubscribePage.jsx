import { Button, Grid, TextField } from "@mui/material";
import React from "react";
import "../../style.css"


export const SubscribePage = () => {
  return (
    <>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="centers"
        sx={{ minHeight: "100vh", backgroundColor: "primary.main", padding: 4 }}
      >
        <Grid
          item
          className="box-shadow"
          xs={3}
          sx={{
            background: "White",
            padding: 3,
            borderRadius: 2,
            width: { sm: 450 },
          }}
        >
          <form>
            <Grid container>
              <Grid item xs={12} sx={{ mt: 2 }}>
                <TextField
                  required
                  label="Name"
                  type="text"
                  placeholder="Name"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sx={{ mt: 2 }}>
                <TextField
                  required
                  label="Email"
                  type="text"
                  placeholder="E-mail"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sx={{ mt: 2 }}>
                <TextField
                  required
                  label="Password"
                  type="text"
                  placeholder="Password"
                  fullWidth
                />
              </Grid>

              <Grid container spacing={2} sx={{ mt: 1 }}>
                <Grid item xs={12} sm={6}>
                  <Button variant="contained" fullWidth type="submit">
                    Suscribirse
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </>
  );
};
