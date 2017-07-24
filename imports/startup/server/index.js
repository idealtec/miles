// Import server startup through a single index entry point

import './fixtures.js';
import './register-api.js';

// process.env.MAIL_URL = "smtp://yeshu501:SUPERSPIDER_1@smtp.gmail.com:587";
process.env.MAIL_URL = "smtp://SMTP_Injection:d35c1c161efecc1e1ddb610dede5fd4aaf8f2db7@smtp.sparkpostmail.com:587";
