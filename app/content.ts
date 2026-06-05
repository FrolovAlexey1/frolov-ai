import {
  Network,
  Database,
  Plug,
  Bot,
  Server,
  Workflow,
  type LucideIcon,
} from "lucide-react";

export const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const CLIPS = {
  hero: `${BASE}/hero.mp4`,
  results: `${BASE}/section-results.mp4`,
  skills: `${BASE}/section-skills.mp4`,
  contact: `${BASE}/section-contact.mp4`,
};

export const TRUST = [
  "Ростелеком",
  "Газпромбанк",
  "РЖД-Медицина",
  "РВК",
  "Яндекс",
  "Сбер",
  "Ozon",
];

export type Metric = {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
};

export const METRICS: Metric[] = [
  {
    value: 1,
    prefix: "+",
    suffix: " млрд ₽",
    label: "выручки за год — портфель цифровых продуктов в Ростелекоме (рентабельность >40%)",
  },
  { value: 7, label: "стратегий новых технологических рынков" },
  {
    value: 3,
    label: "закрытых сделки M&A — одна за рекордные 3 месяца, самая быстрая в истории подразделения",
  },
  { value: 50, prefix: "$", suffix: "M+", label: "объём венчурных фондов под управлением" },
  { value: 3, suffix: " млрд ₽", label: "активов в управлении (портфель техкомпаний)" },
  { value: 40, suffix: "+", label: "проектов AI-трансформации" },
];

export const AWARDS = [
  "1 место · Российско-Китайский конкурс инноваций",
  "Суперфиналист · GreenTech Startup Booster",
  "Победитель · Kryptonite Startup Challenge",
];

export type Skill = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const SKILLS: Skill[] = [
  { icon: Network, title: "Мультиагентные системы", description: "Оркестрация агентов, агентные интерфейсы." },
  { icon: Database, title: "RAG и локальный inference", description: "Открытые модели: Gemma, DeepSeek, LLaMA." },
  { icon: Plug, title: "MCP-интеграции", description: "Подключение к корпоративным системам, в т.ч. 1С." },
  { icon: Bot, title: "AI-ассистенты и Telegram-боты", description: "Как агентные интерфейсы для бизнес-процессов." },
  { icon: Server, title: "Веб и бэкенд", description: "FastAPI, Streamlit, React, свои VPS, GitHub." },
  { icon: Workflow, title: "Автоматизация", description: "LangChain, n8n, оркестрация процессов." },
];

export const TECH = [
  "Claude", "GPT", "LangChain", "n8n", "Python", "Matlab", "C++",
  "RAG", "MCP", "Multi-agent", "LLM", "FastAPI", "React", "GitHub",
];
