// All companies, people and numbers are fictional (demo project).

export const navLinks = ['Product', 'Solutions', 'Pricing', 'Customers', 'Docs'];

export const tickets = [
  { name: 'Emma R.', q: 'Where is my order #48213?', status: 'Resolved by AI', ok: true },
  { name: 'Daniel K.', q: 'Can I change my plan to yearly?', status: 'Resolved by AI', ok: true },
  { name: 'Noa L.', q: 'Refund for a damaged item', status: 'Handed to agent', ok: false },
  { name: 'Jason M.', q: 'How do I reset 2FA?', status: 'Resolved by AI', ok: true },
];

export const logos = ['Northwind', 'Kestrel', 'Orbitly', 'Halcyon', 'Pinepay', 'Vantage'];

export const features = [
  { icon: '✦', title: 'Learns your knowledge', text: 'Connect Zendesk, Notion, Google Drive or any URL. Lumora is ready in minutes.' },
  { icon: '↯', title: 'Takes real actions', text: 'Refunds, order lookups and plan changes through your APIs — with approvals.' },
  { icon: '◎', title: 'Every channel', text: 'Website chat, email, WhatsApp, Slack and voice from one place.' },
  { icon: '⇄', title: 'Smart handoff', text: 'Hard cases go to the right human with a full summary and suggested reply.' },
  { icon: 'A', title: 'Speaks 40+ languages', text: 'Answers every customer in their own language, automatically.' },
  { icon: '◆', title: 'Enterprise-grade security', text: 'SOC 2 Type II, GDPR, SSO, data residency in the US and EU.' },
];

export const steps = [
  { n: '01', title: 'Connect your knowledge', text: 'Help center, docs, macros and past tickets. Lumora indexes everything in minutes.' },
  { n: '02', title: 'Set rules and actions', text: 'Choose what the AI can do on its own and when it must hand off to a human.' },
  { n: '03', title: 'Go live and improve', text: 'Watch answers in real time, fix gaps in one click and track resolution rate.' },
];

export const metrics = [
  { value: 70, suffix: '%', label: 'tickets resolved by AI' },
  { value: 4, suffix: ' sec', label: 'average first response' },
  { value: 52, prefix: '−', suffix: '%', label: 'support cost per ticket' },
  { value: 4.8, suffix: '/5', label: 'customer satisfaction', decimals: 1 },
];

export const testimonials = [
  { quote: 'We cut first response time from 6 hours to 4 seconds. Our agents now focus on the conversations that really need a human.', name: 'Sarah Mitchell', role: 'Head of Support, Pinepay', color: '#c7d2fe' },
  { quote: 'Lumora handles our night and weekend traffic on its own. Setup took one afternoon, not one quarter.', name: 'Emily Carter', role: 'VP Customer Success, Orbitly', color: '#a7f3d0' },
  { quote: 'The handoff summaries alone save each agent an hour a day. ROI was obvious in the first month.', name: 'Marcus Lee', role: 'Support Ops Lead, Kestrel', color: '#fbcfe8' },
];

export const plans = [
  { name: 'Starter', monthly: 0, desc: 'For small teams trying AI support', cta: 'Start free', items: ['500 AI conversations / mo', 'Website chat widget', '1 knowledge source', 'Email support'] },
  { name: 'Growth', monthly: 499, desc: 'For growing support teams', cta: 'Start 14-day trial', hot: true, items: ['5,000 AI conversations / mo', 'Chat, email and WhatsApp', 'Unlimited knowledge sources', 'Actions via your APIs', 'Smart human handoff'] },
  { name: 'Enterprise', monthly: null, desc: 'For large and regulated teams', cta: 'Talk to sales', items: ['Unlimited conversations', 'Voice agent', 'SSO, SAML, audit logs', 'US or EU data residency', 'Dedicated success manager'] },
];

export const faq = [
  { q: 'How long does setup take?', a: 'Most teams go live in one afternoon. Connect your help center, review a few answers and turn on the widget.' },
  { q: 'Will the AI make things up?', a: 'No. Lumora answers only from your sources and shows them under every reply. If it is not sure, it hands off to a human.' },
  { q: 'Can I control what the AI is allowed to do?', a: 'Yes. Every action — refunds, plan changes, cancellations — has its own rule: allowed, needs approval, or never.' },
  { q: 'Which helpdesks do you integrate with?', a: 'Zendesk, Intercom, Freshdesk, HubSpot, Gorgias and Salesforce out of the box, plus a REST API for anything else.' },
  { q: 'Is my data used to train AI models?', a: 'Never. Your data stays in your workspace, is encrypted at rest and is not used to train any model.' },
];
