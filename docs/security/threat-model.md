# Modelagem de Ameaças (Threat Model - STRIDE): alexsanderfarias.dev

Este documento aplica a metodologia **STRIDE** para identificar vulnerabilidades potenciais e definir mitigações arquiteturais no portfólio.

---

| Categoria STRIDE | Ameaça Potencial | Superfície / Componente | Severidade | Mitigação Arquitetural |
| :--- | :--- | :--- | :---: | :--- |
| **Spoofing (Identidade)** | Falsificação de autoridade ou impersonação de domínio (phishing com nome do autor). | Domínio `alexsanderfarias-dev.vercel.app`, Registros DNS | Alta | Configuração rigorosa de DNSSEC, SPF, DKIM e DMARC no domínio; certificado TLS com HSTS ativado. |
| **Tampering (Adulteração)** | Injeção de scripts maliciosos (XSS) via formulário de contato ou parâmetros de query; adulteração de dados de resposta. | Formulário de Contato, Parâmetros de Rota | Alta | CSP rígido bloqueando scripts externos não autorizados; sanitização de inputs; validação com schema Zod; ausência de `dangerouslySetInnerHTML` com entrada crua. |
| **Repudiation (Repúdio)** | Negação de submissões maliciosas ou requisições anômalas. | Server Actions de Contato | Média | Registro de logs estruturados de auditoria com IP anonimizado, timestamp UTC e status da operação. |
| **Information Disclosure (Vazamento)** | Exposição de chaves de API privadas de e-mail ou variáveis de ambiente; enumeração de diretórios e stack trace. | Variáveis de Ambiente, Respostas de Erro | Crítica | Variáveis de segredo nunca expostas com `NEXT_PUBLIC_`; páginas de erro customizadas (`error.tsx`, `not-found.tsx`) sem traces do servidor; cabeçalho `X-Powered-By` desativado. |
| **Denial of Service (DoS / Exaustão)** | Inundação de requisições no formulário de envio de e-mail gerando custos ou esgotamento de cotas de envio. | Endpoint de Contato / Server Action | Alta | Rate Limiting em janela deslizante (sliding window); Honeypot invisível para descarte silencioso de bots; bloqueio de requisições simultâneas abusivas. |
| **Elevation of Privilege** | Exploração de falhas em dependências npm vulneráveis para execução remota de código no build/runtime. | Dependências do projeto (`package.json`) | Alta | Execução de `pnpm audit` em todo build do CI; monitoramento contínuo com Dependabot e fixação estrita de versões (`frozen-lockfile`). |
