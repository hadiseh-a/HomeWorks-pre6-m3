import { useState } from "react";
import { Button, Grid, TextField, Typography } from "@mui/material";

function GridTextFields() {
  // state برای همه فیلدها
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    age: "",
    email: "",
    password: "",
    bio: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    console.log(formData);
    setFormData({
      fullName: "",
      username: "",
      age: "",
      email: "",
      password: "",
      bio: "",
    }); 
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container justifyContent="center" sx={{ minHeight: "100vh", p: 2 }}>
        <Grid size={12} sx={{ maxWidth: "50rem" }}>
          <Grid container spacing={1}>
            <Grid size={12}>
              <Typography variant="h3" textAlign="center">
                Create Your Account
              </Typography>
            </Grid>

            <Grid size={{sm:4,xs:12}}>
              <TextField
                fullWidth
                label="Full name"
                variant="outlined"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
              />
            </Grid>

            <Grid size={{sm:4,xs:12}}>
              <TextField
                fullWidth
                label="Username"
                variant="outlined"
                name="username"
                value={formData.username}
                onChange={handleChange}
              />
            </Grid>

            <Grid size={{sm:4,xs:12}}>
              <TextField
                fullWidth
                label="Age"
                variant="outlined"
                name="age"
                value={formData.age}
                onChange={handleChange}
              />
            </Grid>

            <Grid size={{sm:6,xs:12}}>
              <TextField
                fullWidth
                label="Email"
                variant="outlined"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </Grid>

            <Grid size={{sm:6,xs:12}}>
              <TextField
                fullWidth
                label="Password"
                variant="outlined"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </Grid>

            <Grid size={12}>
              <TextField
                fullWidth
                label="Bio"
                variant="outlined"
                multiline
                rows={3}
                name="bio"
                value={formData.bio}
                onChange={handleChange}
              />
            </Grid>

            <Grid size={12}>
              <Button
                variant="contained"
                color="secondary"
                type="submit"
                fullWidth
                sx={{ maxWidth: "30rem", mx: "auto", display: "block" }}
              >
                SIGN UP
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
}

export default GridTextFields;
