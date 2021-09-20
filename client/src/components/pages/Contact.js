import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import LinearProgress from "@material-ui/core/LinearProgress";
import SendIcon from "@material-ui/icons/Send";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [state, setState] = useState({
    isButtonDisabled: false,
    displayLoader: "none",
  });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleInput = (event) => {
    const tagName = event.target.name;
    const tagValue = event.target.value;
    setFormData({ ...formData, [tagName]: tagValue });
  };
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setState({ isButtonDisabled: true, displayLoader: "block" });
      await axios.get("/api/mailer/sendmail", { params: formData });
      setState({ isButtonDisabled: false, displayLoader: "none" });
      toast.success("We Have Received Your Message.");
      setFormData({ ...formData, message: "" });
    } catch (err) {
      console.log(err);
      toast.error("Failed... Try Again!");
      setState({ isButtonDisabled: false, displayLoader: "none" });
    }
  };
  return (
    <>
      <Helmet>
        <title>Contact Us - DownTape</title>
      </Helmet>
      <Container maxWidth="sm">
        <Box p={3} marginY={6} boxShadow={3} bgcolor='light.main'>
          <Typography componant="h1" variant="h4" gutterBottom align="center">
            Contact Or Feedback
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Name"
              placeholder="Type Your Name..."
              margin="normal"
              fullWidth
              variant="outlined"
              required
              autoFocus
              name="name"
              value={formData.name}
              onChange={handleInput}
            />
            <TextField
              label="Email"
              placeholder="Type Your Email Address..."
              margin="normal"
              fullWidth
              variant="outlined"
              required
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInput}
            />
            <TextField
              label="Message"
              placeholder="Type Your Message / Feedback / Complaint..."
              margin="normal"
              fullWidth
              variant="outlined"
              required
              multiline
              rows={4}
              name="message"
              value={formData.message}
              onChange={handleInput}
            />
            <LinearProgress style={{ display: state.displayLoader }} />
            <Button
              type="submit"
              fullWidth
              color="primary"
              variant="contained"
              disabled={state.isButtonDisabled}
              endIcon={<SendIcon />}
              style={{ marginTop: 8 }}
            >
              Send Message
            </Button>
          </form>
        </Box>
      </Container>
      <ToastContainer position="top-center" />
    </>
  );
};

export default Contact;
