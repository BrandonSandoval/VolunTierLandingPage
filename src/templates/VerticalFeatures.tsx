import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="VolunTier: Elevating Community Engagement, Empowering Volunteers"
    description="Join VolunTier to seamlessly connect with local events organized by non-profit organizations, and make a positive impact in your community through volunteering."
  >
    <VerticalFeatureRow
      title="Purpose"
      description="Our mission is to enhance community engagement by seamlessly 
      connecting individuals with local events organized by non-profit organizations.
      Through our app, we streamline the sign-up process, enabling volunteers to directly register for events, fostering a stronger sense of community involvement"
      image="/assets/images/feature.svg"
      imageAlt="First feature alt text"
    />
    <VerticalFeatureRow
      title="How it works?"
      description="Browse through a number of local community events by accepting or rejecting the profile. 
      And select the ones that works best for you. Get connected with the coordinators by overviewing their organziation profiles."
      image="/assets/images/feature2.svg"
      imageAlt="Second feature alt text"
      reverse
    />
    <VerticalFeatureRow
      title="Improvements"
      description="Elevate your community. Support your fellow neighbors. Enhance your contributions to a better environment."
      image="/assets/images/feature3.svg"
      imageAlt="Third feature alt text"
    />
  </Section>
);

export { VerticalFeatures };
