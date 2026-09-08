# Checklist de Segurança Pré-Deploy: alexsanderfarias.dev

Checklist obrigatório a ser executado antes de cada release em produção.

---

- [ ] **Cabeçalhos de Segurança:**
  - [ ] CSP devidamente configurado e sem erros no console do navegador.
  - [ ] HSTS ativo com flag `preload`.
  - [ ] `X-Content-Type-Options: nosniff` validado via `curl -I`.
  - [ ] `X-Frame-Options: DENY` validado.
  - [ ] `Permissions-Policy` bloqueando recursos não utilizados.
  - [ ] Cabeçalho `X-Powered-By` suprimido.

- [ ] **Auditoria de Código e Dependências:**
  - [ ] `pnpm audit` executado sem vulnerabilidades de severidade Alta ou Crítica.
  - [ ] Ausência de chamadas `eval()`, `dangerouslySetInnerHTML` ou links `javascript:`.
  - [ ] Verificação de segredos: nenhum token ou chave privada em arquivos `.ts`, `.tsx` ou `.md`.
  - [ ] Arquivo `.gitignore` devidamente configurado para `.env*` locais.

- [ ] **Formulário & Endpoints de Ação:**
  - [ ] Schema Zod rejeitando inputs inválidos, vazios ou excessivamente longos.
  - [ ] Teste do Honeypot: submissão com campo preenchido é descartada silenciosamente.
  - [ ] Rate limit disparando resposta de limitação após exceder a cota.

- [ ] **Exibição e Erros:**
  - [ ] Páginas de erro 404 e 500 não revelam stack traces do servidor ou caminhos de diretório.
  - [ ] Logs do servidor não armazenam dados sensíveis de contato de usuários.
