import React from 'react'

// import { Link } from 'react-router-dom'
// import Firebase from 'firebase'
import Header from '../../Header/components/Header'

import {
  LayoutContainer,
  LayoutNavigation,
  LayoutContent
} from './styles'

export default ({ navigation: Navigation, content: Content, ...rest }) => {
  return (
    <LayoutContainer>
      <Header />
      {
        Navigation && (
          <LayoutNavigation>
            <Navigation {...rest} />
          </LayoutNavigation>
        )
      }
      <LayoutContent fullWidth={Navigation ? 80 : 100}>
        <Content {...rest} />
      </LayoutContent>
    </LayoutContainer>
  )
}
