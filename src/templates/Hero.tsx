import Link from 'next/link';

import { Background } from '../background/Background';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="https://github.com/Mon-Rico/HD2024">GitHub</Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'A platform to gamify the\n'}
            <span className="text-primary-100"> VOLUNTEERING EXPERIENCE!</span>
          </>
        }
        description="Volunteer more to rank up!"
        /* button={
          <Link href="https://creativedesignsguru.com/category/nextjs/">
            <Button xl>Download Your App</Button>
          </Link>
        } */
      />
    </Section>
  </Background>
);

export { Hero };
