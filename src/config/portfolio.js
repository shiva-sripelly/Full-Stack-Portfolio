export const portfolioConfig = {
  name: 'Shiva Chary',
  shortName: 'shiva.',
  role: 'Full Stack Developer',
  email: 'sripellyshiva5405@gmail.com',
  linkedin: 'https://www.linkedin.com/in/shiva-sripelly-4a3083228',
  github: 'https://github.com/shiva-sripelly/',
  resume: '/resume/Shiva_Sripelly_Full_Stack.pdf',
};

const mailSubject = 'Job Opportunity - Shiva Chary';
const mailBody = `Hi Shiva,

I came across your portfolio and would like to discuss a potential opportunity with you.

Regards,`;

export const emailComposeLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(portfolioConfig.email)}&su=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(mailBody)}`;
export const emailLink = `mailto:${portfolioConfig.email}`;
