import Link from 'next/link';

import { Button } from '@/button/Button';

import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="Sign up for Free!"
      subtitle="Join your community Today."
      button={
        <Link href="">
          <Button>Click Here!</Button>
        </Link>
      }
    />
  </Section>
);

export { Banner };
