import LogoZone from './footer/logo';
import FooterNavigation from './footer/navi';
import ContactButton from './footer/contact';
export default function Footer() {
    return(
    <>
        <footer className="footer lg:footer-horizontal text-white p-10" id='footer-color'>
            <LogoZone />
            
            <FooterNavigation />
            
            <ContactButton />
        </footer>
    </>
    );
}