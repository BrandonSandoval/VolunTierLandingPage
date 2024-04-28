import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="Sign up for Free!"
      subtitle="Join your community Today."
      /* button={
        <Link href="https://creativedesignsguru.com/category/nextjs/">
          <Button>Click Here!</Button>
        </Link>
      } */
    />
  </Section>
);

export { Banner };
