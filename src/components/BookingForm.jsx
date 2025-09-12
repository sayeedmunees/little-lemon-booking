import React, { useState } from "react";
import {
  Container,
  Paper,
  Typography,
  Stack,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

// Define a custom theme for a unique look and feel
const theme = createTheme({
  palette: {
    primary: {
      main: "#495e57",
    },
    background: {
      default: "#f4f6f8",
      paper: "#ffffff",
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
    h4: {
      fontWeight: 700,
    },
  },
  shape: {
    borderRadius: 12,
  },
});

const BookingForm = (props) => {
  const [occasion, setOccasion] = useState("");
  const [guests, setGuests] = useState(1);
  const [date, setDate] = useState(null);
  const [time, setTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Assuming props.submitForm takes an object with the form data
    props.submitForm({ date, time, guests, occasion });
  };

  const handleDateChange = (newDate) => {
    setDate(newDate);
    // Dispatch the date change to update available times
    props.dispatch(newDate);
  };

  // Form validation to enable/disable the submit button
  const isFormValid = date && time && guests >= 1 && occasion;

  return (
    <ThemeProvider  theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Container component="main" maxWidth="xs" sx={{ mt: 4, mb: 4, color: "#495e57" }}>
          <Paper
            elevation={3}
            sx={{
              p: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography component="h1" variant="h4" gutterBottom>
              Reserve a Table
            </Typography>
            <Stack
              component="form"
              onSubmit={handleSubmit}
              spacing={3}
              sx={{ width: "100%", mt: 1 }}
            >
              {/* Date Picker */}
              <DatePicker
                label="Date"
                value={date}
                onChange={handleDateChange}
                slotProps={{
                  textField: {
                    required: true,
                    fullWidth: true,
                  },
                }}
              />

              {/* Time Picker */}
              <FormControl fullWidth required>
                <InputLabel id="book-time-label">Time</InputLabel>
                <Select
                  labelId="book-time-label"
                  id="book-time"
                  value={time}
                  label="Time"
                  onChange={(e) => setTime(e.target.value)}
                >
                  <MenuItem value="" disabled>
                    <em>Select a Time</em>
                  </MenuItem>
                  {props.availableTimes.availableTimes.map((availableTime) => (
                    <MenuItem key={availableTime} value={availableTime}>
                      {availableTime}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              {/* Number of Guests - FULLY UPDATED */}
              <TextField
                id="book-guests"
                label="Number of Guests"
                type="number"
                value={guests}
                onChange={(e) => setGuests(parseInt(e.target.value, 10))}
                // 'slotProps.input' is the correct, modern way to pass props to the input element
                slotProps={{
                  input: {
                    min: 1,
                    max: 10,
                  },
                }}
                fullWidth
                required
              />

              {/* Occasion Selector */}
              <FormControl fullWidth required>
                <InputLabel id="book-occasion-label">Occasion</InputLabel>
                <Select
                  labelId="book-occasion-label"
                  id="book-occasion"
                  value={occasion}
                  label="Occasion"
                  onChange={(e) => setOccasion(e.target.value)}
                >
                  <MenuItem value="" disabled>
                    <em>Select an Option</em>
                  </MenuItem>
                  <MenuItem value="Birthday">Birthday</MenuItem>
                  <MenuItem value="Anniversary">Anniversary</MenuItem>
                </Select>
              </FormControl>

              {/* Submit Button */}
              <Button id="confirm-button"
                type="submit"
                fullWidth
                variant="contained"
                size="large"
                disabled={!isFormValid}
                sx={{ mt: 2, py: 1.5, fontSize: "1.1rem" }}
              >
                Make Your Reservation
              </Button>
            </Stack>
          </Paper>
        </Container>
      </LocalizationProvider>
    </ThemeProvider>
  );
};

export default BookingForm;
