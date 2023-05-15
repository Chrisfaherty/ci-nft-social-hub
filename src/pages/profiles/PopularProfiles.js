import React, { useState } from 'react'
import appStyles from '../../App.module.css'
import { Container } from 'react-bootstrap'

const PopularProfiles = () => {
    const [profileData, setProfileData] = useState({
        // we will use the pageProfile later!
        pageProfile: { results: [] },
        popularProfiles: { results: [] },
    })
  return (
    <Container className={appStyles.Content}>
        <p>Most followed profiles.</p>
    </Container>
  )
}

export default PopularProfiles