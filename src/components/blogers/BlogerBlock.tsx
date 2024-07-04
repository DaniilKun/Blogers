import { Box, Container, CssBaseline, Divider } from '@mui/material'
import BlogerSelect from './BlogerSelect'
import BlogerSearch from './BlogerSearch'
import BlogerLink from './BlogerLink'
import CurrentBrandComp from '../currentBrandComp/CurrentBrandComp'

const BlogerBlock = () => {
  return (
    <>
    <CssBaseline />
      <Container >
        <Box sx={{ display: 'flex',flexDirection: 'column' }} >
        <CurrentBrandComp/>
        <Box sx={{ display: 'flex',justifyContent:'space-around', }} >

          <BlogerSearch/>
          <BlogerSelect/>
        </Box>
        </Box>
        <Divider/>
        <BlogerLink/>
      </Container>
    </>
  )
}

export default BlogerBlock