import React from 'react';
import { ButtonToolbar, FlexboxGrid, Grid, Row, Col } from 'rsuite';
import Logo from './Logo';
import HomeStyle from './HomeStyle';
import styled from 'styled-components'
import { Heading ,Text, Button, Link} from '@pancakeswap-libs/uikit'


const Header = styled.div`
  background: ${({ theme }) => theme.colors.gradients.bubblegum};
  width: 100%;
  padding: 32px;
`

function TopCard() {
  const [running, setRuning] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setRuning(true);
    }, 1700);
  }, []);

  return (
    <HomeStyle>
      <Grid className="page-home">
        <Row>
          <FlexboxGrid align="middle" className="banner">
            <FlexboxGrid.Item as={Col} colspan={24} md={12}>
            <Header>
            <Heading as="h1" size="xxl" color="secondary" mb="24px">
              NFT를 분할해서
            </Heading>
            <Heading as="h1" size="xxl" color="secondary" mb="24px">
              디파이에서
            </Heading>
            <Heading as="h1" size="xxl" color="secondary" mb="24px">
              이용하세요
            </Heading>
            <Text bold fontSize="24px">
              NFT를 유동성 있는 토큰으로 분할하고<br />
              PIONEERS Bank에서 수익을 얻어 보세요.<br />
              분할한 NFT는 다수의 유저가 소유할 수 있으며,<br />
              프로젝트의 커뮤니티 확대에 사용할 수 있습니다.
            </Text>
          </Header>
              <section className="section">
                <ButtonToolbar className="primary-toolbar">
                  <Button as={Link} external href="https://pancakeswap.finance/farms" style={{ width: '50%' }}>
                    NFT 분할화
                  </Button>
                  <Button as={Link} external href="https://pancakeswap.finance/farms" style={{ width: '50%' }}>
                    Live Auction
                  </Button>
                </ButtonToolbar>
              </section>
            </FlexboxGrid.Item>

            <FlexboxGrid.Item className="logo-react-suite-wrapper" as={Col} colspan={24} md={12}>
              <div className="section logo-react-suite">
                <Logo width={120} height={138} />
              </div>
            </FlexboxGrid.Item>
          </FlexboxGrid>
        </Row>

      </Grid>
      
    </HomeStyle>
  );
}

export default TopCard;
