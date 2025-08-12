import { Accordion, AccordionDetails, AccordionSummary, Box, Divider, IconButton, Typography } from "@mui/material"
import { IoMdAdd } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import { FaArrowRight } from "react-icons/fa";
import type { Faq } from "../../../types/faq";

type Props = {
  faq: Faq;
  expanded: string | null;
  handleAccordionToggle: (id: string) => void;
}

function FaqAccordion({ faq, handleAccordionToggle, expanded }: Props) {

  return (
    <Accordion expanded={expanded === faq.id} onChange={() => handleAccordionToggle(faq.id)} sx={{
        p: '0.5rem',
        m: '0.5rem',
        boxShadow: 'none',
        border: '1px solid #E0E0E0',
        borderRadius: '5px',
    }}>
        <AccordionSummary
          expandIcon={<Box sx={{
            p: '0.5rem',
            borderRadius: '5px',
            backgroundColor: '#FFF4E5',
          }}>
            {expanded === faq.id ?
            <RxCross1 /> 
            : <IoMdAdd />}
            </Box>
            }
        >
          <Typography variant="subtitle1"  sx={{ width: '100%',  flexShrink: 0, fontWeight: 'bold' }}>
            {faq.question}
          </Typography>
        </AccordionSummary>
        <Divider />
        <AccordionDetails sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 1,
        }}>
          <Typography variant="body2" sx={{ my: '1rem' }}>
            {faq.answer}
          </Typography>

          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: '#F7F7F8',
            p: '1rem',
            borderRadius: '5px',
          }}>
            <Typography variant="body2" sx={{
                fontWeight: 'bold',

            }}>{faq.summary}</Typography>
            <IconButton sx={{
                borderRadius: '50%',
                backgroundColor: 'white',
                p: '0.5rem',
            }}>
                <FaArrowRight />
            </IconButton>
          </Box>
        </AccordionDetails>
      </Accordion>
  )
}

export default FaqAccordion