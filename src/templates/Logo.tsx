import Image from 'next/image';

import { AppConfig } from '../utils/AppConfig';

type ILogoProps = {
  xl?: boolean;
};

const Logo = (props: ILogoProps) => {
  // const size = props.xl ? '44' : '32';
  const fontStyle = props.xl
    ? 'font-semibold text-3xl'
    : 'font-semibold text-xl';

  const logoStyle = {
    verticalAlign: 'middle', // Adjusts vertical alignment
    marginBottom: '33px', // Move the logo up by 5px
  };

  return (
    <span className={`inline-flex items-center text-gray-900 ${fontStyle}`}>
      {/* <svg
        className="mr-1 stroke-current text-primary-500"
        xmlns="https://media.discordapp.net/attachments/1218791204297375814/1234165719592075274/DALLE_2024-04-28_08.31.47_-_A_2D_logo_that_gamifies_the_concept_of_volunteering._The_design_features_a_stylized_human_figure_reaching_towards_a_star_symbolizing_achievement_and_.webp?ex=662fbde5&is=662e6c65&hm=13b549dbf3a4e036165cc3282a11dc7ca8d7e9038a65f02001412948479c5c33&=&format=webp&width=673&height=673"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M0 0h24v24H0z" stroke="none" />
        <rect x="3" y="12" width="6" height="8" rx="1" />
        <rect x="9" y="8" width="6" height="12" rx="1" />
        <rect x="15" y="4" width="6" height="16" rx="1" />
        <path d="M4 20h14" />
      </svg> */}
      <Image
        alt="logo"
        src="/assets/images/logovoluntier.png"
        width={75}
        height={50}
        style={logoStyle}
      />

      {AppConfig.site_name}
    </span>
  );
};

export { Logo };
