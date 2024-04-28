import Image from 'next/image';

import { Section } from '@/layout/Section';

const Sponsors = () => (
  <Section
    title="Volunteering Opportunities"
    description="Discover a wealth of volunteering opportunities right in our app. From environmental projects to community events, there's something for everyone."
  >
    <table className="mx-auto border-collapse">
      <tbody>
        <tr className="h-56">
          <td className="border-2 border-gray-300 p-3">
            <a
              href="https://www.redcross.org/volunteer/become-a-volunteer.html#step1"
              target="_blank"
            >
              <Image
                src="/assets/images/red-cross-logo.png"
                alt="Sentry"
                width={260}
                height={224}
              />
            </a>
          </td>
          <td className="border-2 border-gray-300 p-3">
            <a
              href="https://www.hi-us.org/en/index?msclkid=94fd041fdd43126008c56231b1aac1b6&utm_source=bing&utm_medium=cpc&utm_campaign=MS%20%7C%20Grant%20%7C%20Emergencies&utm_term=disaster%20relief&utm_content=Disaster%20%7C%20Relief"
              target="_blank"
            >
              <Image
                src="/assets/images/h-and-i-logo.jpg"
                alt="Better Stack"
                width={260}
                height={224}
              />
            </a>
          </td>
          <td className="border-2 border-gray-300 p-3">
            <a href="https://www.si.edu/Volunteer">
              <Image
                src="/assets/images/smithosian-logo.jpg"
                alt="React SaaS Boilerplate Next.js"
                width={260}
                height={224}
              />
            </a>
          </td>
        </tr>
        <tr className="h-56">
          <td className="border-2 border-gray-300 p-3">
            <a
              href="https://www.feedingamerica.org/take-action/volunteer"
              target="_blank"
            >
              <Image
                src="/assets/images/feeding-america-logo.jpg"
                alt="Clerk – Authentication & User Management for Next.js"
                width={260}
                height={224}
              />
            </a>
          </td>
          <td className="border-2 border-gray-300 p-3">
            <a
              href="https://hr.ucdavis.edu/departments/worklife-wellness/community/volunteer"
              target="_blank"
            >
              <Image
                src="/assets/images/uc-davis-logo.jpg"
                alt="SQLite Developer Experience"
                width={260}
                height={224}
              />
            </a>
          </td>
          <td className="border-2 border-gray-300 p-3">
            <a href="https://lifeline.org/volunteer" target="_blank">
              <Image
                src="/assets/images/lifeline-logo.png"
                alt="Crowdin"
                width={260}
                height={224}
              />
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  </Section>
);

export { Sponsors };
