import React from "react"
import styled from "styled-components";

const BarraFooter = styled.div`
	  margin-top: 20px;
	  background-color: #00420c;
	  height: 10px;
	`;

const FooterInf = styled.div`
	  background: #0e6e1e;
	  color: #fff;
	  padding: 20px;
	  display: flex;
	  justify-content: space-between;
	  align-items: center;
	`;

const Li = styled.li`
	  display: inline-block;
	  margin-right: 32px;
	
	  &:last-child {
	    margin-right: 0;
	  }
	`;

const Logo = styled.img`
	  width: 170px;
	`;

const Footer = () => {
    return (
        <>
            <BarraFooter/>
            <FooterInf>
                <section>
                    <Logo src="/images/logo.png" alt="logo" />
                </section>
                <section>
                    <p>Desenvolvido por Carlos Estevão.</p>
                </section>
                <section>
                    <ul>
                        <Li>
                            <img src="/images/facebook.png" alt="facebook" />
                        </Li>
                        <Li>
                            <img src="/images/twitter.png" alt="twitter" />
                        </Li>
                        <Li>
                            <img src="/images/instagram.png" alt="instagram" />
                        </Li>
                    </ul>
                </section>
            </FooterInf>
        </>
    );
};
export default Footer;
