import { Box, Typography } from "@mui/material"
import type { Achievement } from "../../../../types/aboutUs"

type Props = {
    achievement: Achievement
}

function AchievementCard({achievement}: Props) {
  return (
    <Box sx={{
      backgroundColor: 'white',
      display: 'flex',
      flexDirection: 'column',
      padding: '2rem',
      gap: '1rem',
      borderRadius: '10px',
    }}>
      <Box sx={{
        color : '#FF9500',
        fontSize: '1.5rem',
        padding: '0.5rem',
        backgroundColor: '#FFF9F0',
        borderRadius: '10px',
        width: '3rem',
        height: '3rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>

        {achievement.icon}
      </Box>
      <Typography variant="subtitle1" sx={{
        fontWeight: 'bold'
      }}>
        {achievement.achievementContent.title}
      </Typography>
      <Typography variant="body2">
        {achievement.achievementContent.description}
      </Typography>
    </Box>
  )
}

export default AchievementCard