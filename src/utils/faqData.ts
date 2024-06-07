export const questions = [
  {
    question: 'What is Akilaah?',
    answer:
      'Akilaah Cooperative Management and payment Solution is a comprehensive platform designed to streamline cooperative operations, enhance communication, and optimize financial management.',
  },
  {
    question: ' How can our cooperative benefit from Akilaah?',
    answer:
      'Akilaah offers features like automated member management, financial tracking, and real-time reporting, providing your cooperative with increased efficiency, transparency, and overall improved governance.',
  },
  {
    question: 'Is Akilaah suitable for cooperatives of all sizes?',
    answer:
      'Yes, Akilaah is designed to cater to the needs of cooperatives of varying sizes. It is scalable and customizable to accommodate both small and large cooperatives.',
  },
  {
    question: 'How secure is the data on Akilaah?',
    answer:
      'Security is a top priority. Akilaah employs robust encryption protocols and follows industry best practices to ensure the confidentiality and integrity of your cooperative',
  },
  {
    question: 'Is there a trial period available before committing to Akilaah?',
    answer:
      'Yes, we offer a 14-day trial period to allow your cooperative to experience the platform firsthand',
  },
  {
    question: 'How long does the onboarding process typically take?',
    answer:
      'The onboarding process duration can vary based on the size and complexity of the cooperative. Our team will work with you to ensure a timely and efficient onboarding experience. However, it is as quick and fast as possible.',
  },
  {
    question: 'What kind of reporting and analytics does Akilaah provide?',
    answer:
      'Akilaah offers robust reporting and analytics tools, providing insights into financial performance, member activities, and other key metrics crucial for cooperative management.',
  },
  {
    question:
      'Is there ongoing training and support after the initial onboarding?',
    answer:
      'Yes, we provide continuous training sessions and ongoing support to ensure your cooperative continues to make the most of the Akilaah platform.',
  },
  {
    question: 'Can Akilaah be accessed from mobile devices?',
    answer:
      'Yes, Akilaah is mobile-responsive, allowing users to access the platform conveniently from various devices, including smartphones and tablets.',
  },
  {
    question: 'How does Akilaah ensure data privacy and confidentiality?',
    answer:
      "Akilaah follows strict data privacy protocols and complies with relevant regulations to safeguard the privacy and confidentiality of your cooperative's information.",
  },
  {
    question:
      'What happens if our cooperative experiences technical issues with Akilaah?',
    answer:
      'Our dedicated support team is available to assist you with any technical issues promptly. You can reach out via our support channels for timely resolution.',
  },
  {
    question:
      'Is there a community or forum for Akilaah users to share experiences?',
    answer:
      'Yes, we have a user community and forums where cooperatives using Akilaah can connect, share experiences, and exchange best practices.',
  },
];

export const pricingQuestions = [
  {
    question: 'How is the pricing structured for Akilaah?',
    answer:
      'Our pricing is tailored to meet the unique needs of cooperatives. It is based on factors such as the size of your cooperative, the number of users, and specific features required. We offer flexible pricing plans to ensure you only pay for what you need.',
  },
  {
    question:
      ' Can you provide a breakdown of the different pricing tiers available?',
    answer:
      'We offer various pricing tiers to accommodate cooperatives of all sizes. These tiers range from basic plans for smaller cooperatives to more comprehensive plans for larger organisations. Please read more about the pricing option and for more information, kindly reach out to our sales team for detailed information on each tier.',
  },
  {
    question:
      'Is there a one-time setup fee, or is it included in the subscription cost?',
    answer:
      'The setup process is included in the subscription cost. There are no hidden one-time fees for getting your cooperative up and running with our management solution.',
  },
  {
    question: 'Are there any additional costs for training and support?',
    answer:
      'Basic training and support are typically included in the subscription cost. However, if your cooperative requires additional training sessions or personalized support, we offer optional services that can be tailored to your needs.',
  },
  {
    question:
      'How often does pricing get updated, and will my rates change after signing up?',
    answer:
      'Pricing updates are infrequent, and we strive to provide stable rates for our clients. Your pricing will remain consistent unless you choose to upgrade or modify your subscription plan.',
  },
  {
    question:
      'Can I customize my plan to include only the features my cooperative needs?',
    answer:
      "Absolutely. Our solution is modular, allowing you to customize your plan based on the specific features your cooperative requires. This ensures that you're only paying for the functionalities that add value to your organisation.",
  },
  {
    question: 'What payment methods do you accept?',
    answer:
      'We accept various payment methods, including debit cards, bank transfers, and other convenient options. Our billing process is designed to be straightforward and hassle-free.',
  },
];

export const securityQuestions = [
  {
    question:
      'How are users authenticated? What measures are in place to prevent unauthorized access to user accounts?',
    answer:
      'We use multi-factor authentication (MFA) with secure methods like SMS, email, or app-based authentication, this way we verify who our users truly are.We also employ strong password policies and securely store hashed passwords.',
  },
  {
    question:
      ' Is data transmitted securely over HTTPS? How is sensitive information like passwords and financial data stored?',
    answer:
      'We employ the transmission of data over HTTPS using strong encryption protocols, then encrypt sensitive data at rest using industry-standard encryption algorithms.',
  },
  {
    question:
      'What levels of access do different user roles have? How are authorization tokens managed?',
    answer:
      'We implemented role-based access control (RBAC) to manage different levels of user access, securely handling and validating authorization tokens.',
  },
  {
    question:
      'How are user sessions managed, and are they securely handled? Is there a session timeout to prevent unauthorized access?',
    answer:
      'We use secure session management techniques, including session timeouts. We also implemented secure session handling practices to prevent session hijacking.',
  },
  {
    question:
      'Are input fields validated to prevent SQL injection, cross-site scripting (XSS), and other injection attacks?',
    answer:
      'We validate and sanitize user inputs to prevent SQL injection, XSS, and other injection attacks.',
  },
  {
    question:
      'How are file uploads handled to prevent security vulnerabilities?',
    answer:
      'We employed server-side input validation and implemented Content Security Policy (CSP).',
  },
  {
    question: 'What mechanisms are in place for account recovery?',
    answer:
      'We Implemented a secure account recovery process with 2 Factor authorization, ensured they are secure and not susceptible to social engineering attacks.',
  },
  {
    question:
      'Are system activities logged, and is there a mechanism to monitor and detect suspicious activities? How are logs stored, and who has access to them?',
    answer:
      'We log system activities, and regularly monitor logs for suspicious activities.Restrict access to logs and ensure they are stored securely.',
  },
  {
    question: 'If your application uses APIs, how are they secured?',
    answer:
      'We Validate and sanitize data received from APIs to prevent injection attacks.',
  },
  {
    question: 'How do you prevent Request Forgery?',
    answer: 'We Implemented anti-CSRF tokens to protect against CSRF attacks.',
  },
  {
    question:
      'How are security patches applied, and how quickly are they implemented?',
    answer:
      'Regularly update dependencies and libraries to address known vulnerabilities.',
  },
  {
    question:
      'If your application integrates with third-party services, how are these integrations secured?',
    answer:
      'We verified the security practices of the third-party providers we work with.',
  },
];
