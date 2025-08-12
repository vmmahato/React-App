import { Box, Button, Grid, Typography } from "@mui/material";
import { courses } from "../../../../../data/courses/courses";
import CourseCard from "./CourseCard";

function Course() {
  return (
    <Box
      sx={{
        m: "4rem",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
          }}
        >
          Our Courses
        </Typography>

        <Button
          variant="outlined"
          sx={{
            padding: "0.5rem",
            backgroundColor: "#FCFCFD",
            color: "black",
            boxShadow: "none",
            borderColor: "#F1F1F3",
          }}
        >
          View All
        </Button>
      </Box>

      <Grid container spacing={4} sx={{ mt: "2rem" }}>
        {courses.map((course, index) => (
          <Grid key={index} size={6}>
            <CourseCard course={course} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Course;
