import LogoZone from './footer/logo';
import FooterNavigation from './footer/navi';
import ContactButton from './footer/contact';
export default function Footer() {
    return(
    <>
        <link rel="stylesheet" href="./node_modules/lineicons/dist/lineicons.css" />
        <footer className="footer lg:footer-horizontal text-white p-10" id='footer-color'>
            <LogoZone />
            
            <FooterNavigation />
            
            <ContactButton />
        </footer>
    </>
    );
}