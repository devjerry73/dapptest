import React, { useMemo } from 'react'
import { Card, CardHeader, CardBody, Text, Box } from '@pancakeswap-libs/uikit'
import { Pair } from 'cd3d-dex-libs-sdk'
import { useTokenBalancesWithLoadingIndicator } from 'state/wallet/hooks'
import { toV2LiquidityToken, useTrackedTokenPairs } from 'state/user/hooks'
import { StyledInternalLink } from 'components/Shared'
import { useActiveWeb3React } from 'hooks'
import { usePairs } from 'data/Reserves'
import FullPositionCard from 'components/PositionCard'
import '@coreui/coreui/dist/css/coreui.min.css'
import { CRow,CCol,CCard,CCardBody,CCardTitle,CButton,CCardText  } from '@coreui/react'

const CollectCard = () => {

  return (
    <CRow>
    <CCol sm={6}>
      <CCard>
        <CCardBody>
          <CCardTitle>Special title treatment</CCardTitle>
          <CCardText>
            With supporting text below as a natural lead-in to additional content.
          </CCardText>
          <CButton href="#">Go somewhere</CButton>
        </CCardBody>
      </CCard>
    </CCol>
    <CCol sm={6}>
      <CCard>
        <CCardBody>
          <CCardTitle>Special title treatment</CCardTitle>
          <CCardText>
            With supporting text below as a natural lead-in to additional content.
          </CCardText>
          <CButton href="#">Go somewhere</CButton>
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
  )
}

export default CollectCard
