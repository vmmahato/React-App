import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import type { Course } from "../../../../../../types/course";

type Props = {
  course: Course;
};

function CourseCard({ course }: Props) {
  return (
    <Card
      sx={{
        padding: "1rem",
        borderRadius: "10px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CardMedia
          sx={{
            height: "16rem",
            borderRadius: "10px",
            width: "95%",
          }}
          image={course.imageSrc}
          title={course.title}
        />
      </Box>
      <CardContent>
        <Box
          sx={{
            mb: "1rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 1,
          }}
        >
          <Box sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 1,
          }}>
            <Button
              variant="outlined"
              sx={{
                color: "#4C4C4D",
                borderColor: "#F1F1F3",
              }}
            >
              {course.duration}
            </Button>
            {course.isFree && (
              <Button
                variant="contained"
                disableRipple
                sx={{
                  boxShadow: "none",
                }}
              >
                Free
              </Button>
            )}
            {course.level && (
              <Button
              variant="outlined"
              sx={{
                color: "#4C4C4D",
                borderColor: "#F1F1F3",
              }}
            >
              {course.level}
            </Button>
            )}
          </Box>

          <Box>
            <Typography variant="subtitle2">By {course.instructorName}</Typography>
          </Box>
        </Box>
        <Typography
          gutterBottom
          variant="h6"
          sx={{
            fontWeight: "bold",
          }}
        >
          {course.title}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {course.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          fullWidth
          variant="contained"
          sx={{
            backgroundColor: "#F1F1F3",
            boxShadow: "none",
          }}
        >
          Get it now
        </Button>
      </CardActions>
    </Card>
  );
}

export default CourseCard;
