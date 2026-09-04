import { Server, Database, BrainCircuit, Code2, Wrench, Network } from 'lucide-react';

export const skills = [
  { title: 'backend', icon: Server, tone: 'purple', items: ['Python', 'FastAPI', 'REST APIs', 'SQLAlchemy', 'Authentication', 'JWT', 'API Integration', 'Backend Architecture'] },
  { title: 'databases', icon: Database, tone: 'cyan', items: ['PostgreSQL', 'SQL', 'Alembic', 'Database Design', 'Database Migrations', 'Query Optimization'] },
  { title: 'data & ai', icon: BrainCircuit, tone: 'pink', items: ['Pandas', 'NumPy', 'ETL', 'AI/ML', 'LangChain', 'LLM APIs', 'MCP (Model Context Protocol)'] },
  { title: 'frontend', icon: Code2, tone: 'cyan', items: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Responsive Design', 'React Router', 'REST API Integration', 'State Management', 'Frontend Integration', 'Vite'] },
  { title: 'tools & platforms', icon: Wrench, tone: 'blue', items: ['Git', 'GitHub', 'Postman', 'Swagger / OpenAPI', 'Docker', 'VS Code', 'npm', 'Vite'] },
  { title: 'integrations', icon: Network, tone: 'green', items: ['Stripe', 'Payment Systems', 'Wallet Systems', 'Email / OTP', 'WebSockets', 'REST APIs', 'Third-Party APIs'] },
];
