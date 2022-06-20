import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter>
      <div>
        <a href="https://fivepoints.tech" target="_blank" rel="noopener noreferrer">
          FivePoints
        </a>
        <span className="ms-1">&copy; 2022 | All rights reserved.</span>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
