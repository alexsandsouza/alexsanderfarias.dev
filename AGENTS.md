# AGENTS.md

Política principal de engenharia para qualquer agente de IA que trabalhar em **alexsanderfarias.dev**.

Estas regras têm precedência sobre sugestões automáticas relacionadas a Git, commits, arquitetura, implementação e deployment.

Para alterar este arquivo, solicitar autorização explícita do usuário.

---

## Precedência

1. Este `AGENTS.md`
2. Especificações em `docs/`
3. ADRs em `docs/adr/`
4. Convenções do código existente

Em conflito, prevalece a regra mais restritiva deste documento.

---

## Regra crítica 01 — Git, commits e autoria

O agente **nunca** está autorizado a:

- executar `git commit`
- executar `git push`
- executar `git merge`
- executar `git rebase`
- executar `git cherry-pick`
- executar `git tag`
- executar `git reset` que altere o histórico
- executar `git commit --amend`
- criar commits automaticamente
- criar commits após concluir uma tarefa
- fazer push automaticamente
- fazer merge automaticamente
- alterar `git user.name`
- alterar `git user.email`
- alterar configuração global ou local de autoria do Git
- adicionar trailers automáticos ao commit
- adicionar coautoria de IA
- adicionar identificação do agente a commits

É **expressamente proibido** adicionar:

```
Co-authored-by:
Generated-by:
Generated with:
AI-generated:
AI-assisted:
Assisted-by:
Antigravity:
Gemini:
Google Antigravity:
Claude:
OpenAI:
Copilot:
```

ou qualquer indicação semelhante de participação de ferramenta de IA.

Também não adicionar:

- `Generated with AI`
- `Built with Antigravity`
- `Created by Gemini`
- `AI assisted development`

em:

- commit messages
- Git trailers
- tags
- branch names
- CHANGELOG
- código
- comentários
- documentação
- README

salvo se o usuário solicitar explicitamente esse conteúdo.

A autoria Git permanece exclusivamente a configurada pelo proprietário do repositório.

---

## Regra crítica 02 — O humano controla o Git

O agente **pode**:

- criar arquivos
- modificar arquivos
- remover arquivos quando necessário
- executar testes
- executar lint
- executar build
- executar typecheck
- executar scanners de segurança
- mostrar `git diff`
- mostrar `git status`

O agente **não pode** transformar essas modificações em commits.

Ao concluir uma tarefa, informar apenas:

1. arquivos criados
2. arquivos modificados
3. arquivos removidos
4. testes executados
5. resultado do build
6. riscos encontrados
7. sugestão **opcional** de mensagem Conventional Commit

Exemplo:

```
Suggested commit:

feat(projects): implement project case study module
```

**Não executar o commit.**

A decisão de `git add`, `git commit` e `git push` pertence exclusivamente ao usuário.

---

## Regra crítica 03 — Nunca alterar esta política

O agente não deve:

- remover estas regras
- enfraquecer estas regras
- alterar estas regras automaticamente
- contornar estas regras
- interpretar silêncio do usuário como autorização

Para alterar `AGENTS.md`, solicitar autorização explícita do usuário.

---

## Spec-Driven Development (SDD)

Este projeto utiliza **obrigatoriamente** Spec-Driven Development.

A especificação precede a implementação.

Fluxo obrigatório:

```
PROBLEM
   ↓
REQUIREMENTS
   ↓
SPECIFICATION
   ↓
ACCEPTANCE CRITERIA
   ↓
ARCHITECTURE
   ↓
SECURITY ANALYSIS
   ↓
IMPLEMENTATION PLAN
   ↓
IMPLEMENTATION
   ↓
TESTS
   ↓
SECURITY VALIDATION
   ↓
QUALITY REVIEW
   ↓
HUMAN APPROVAL
```

Não iniciar implementação significativa sem consultar a especificação correspondente.

---

## Documentação SDD

Utilizar:

```
docs/
├── product/
├── specs/
├── architecture/
├── adr/
├── security/
├── ux/
├── testing/
└── deployment/
```

Specs devem documentar, quando aplicável:

- problema
- objetivo
- atores
- requisitos funcionais
- requisitos não funcionais
- casos de uso
- regras de negócio
- interfaces
- estados
- entradas
- saídas
- erros
- edge cases
- critérios de aceitação
- segurança
- acessibilidade
- performance
- testes esperados

---

## Definition of Ready

Uma feature está pronta para desenvolvimento somente quando houver clareza suficiente sobre:

- problema
- escopo
- comportamento esperado
- critérios de aceitação
- dependências
- arquitetura
- riscos
- segurança

Não inventar requisitos ausentes.

Quando uma decisão importante estiver indefinida, perguntar ao usuário.

---

## Definition of Done

Uma feature somente pode ser considerada concluída quando possuir:

**SPEC + CODE + TEST + SECURITY + DOCUMENTATION**

e quando:

- TypeScript estiver válido
- lint passar
- testes passarem
- build passar
- acessibilidade relevante for verificada
- segurança relevante for verificada
- critérios de aceitação forem atendidos
- documentação estiver consistente

Mesmo quando tudo estiver concluído: **não fazer commit**.

---

## Arquitetura — Modular Monolith

Este sistema adota **obrigatoriamente** Modular Monolith.

Não converter para microservices sem decisão arquitetural explícita e autorização humana.

Princípios:

- um repositório
- uma aplicação
- um pipeline principal
- um deployment principal
- módulos internos claramente delimitados
- baixo acoplamento
- alta coesão
- contratos explícitos
- dependências controladas

Estrutura conceitual:

```
src/
├── app/
│
├── modules/
│   ├── home/
│   ├── about/
│   ├── experience/
│   ├── projects/
│   ├── research/
│   ├── publications/
│   ├── teaching/
│   ├── technologies/
│   ├── blog/
│   └── contact/
│
├── shared/
│   ├── components/
│   ├── ui/
│   ├── hooks/
│   ├── lib/
│   ├── config/
│   ├── types/
│   ├── security/
│   └── analytics/
│
└── infrastructure/
```

---

## Module boundaries

Cada módulo deve encapsular suas responsabilidades.

Um módulo **não** deve acessar detalhes internos de outro módulo.

Preferencialmente:

```
module/
├── components/
├── domain/
├── services/
├── schemas/
├── types/
├── data/
├── tests/
└── index.ts
```

O `index.ts` deve funcionar como API pública do módulo quando apropriado.

Evitar imports profundos como:

```
modules/projects/internal/implementation/private-file
```

Preferir contratos públicos.

---

## Dependency rule

Dependências devem apontar preferencialmente:

```
UI
 ↓
Application
 ↓
Domain
```

Infraestrutura implementa necessidades externas.

Evitar domínio dependendo diretamente de:

- framework
- UI
- banco
- analytics
- APIs externas

Não criar abstrações artificiais quando não houver necessidade.

---

## Architecture Decision Record (ADR)

Decisões arquiteturais importantes devem ser registradas em `docs/adr/`.

Modelo:

```markdown
# ADR-XXX: Título

## Status

Proposed | Accepted | Deprecated | Superseded

## Context

## Decision

## Alternatives Considered

## Consequences

## Security Implications

## Performance Implications

## Operational Implications
```

Nunca alterar silenciosamente uma decisão arquitetural estabelecida.

Criar novo ADR quando uma decisão estrutural mudar.

---

## Princípios de engenharia

Aplicar quando apropriado:

- SOLID
- Separation of Concerns
- Information Hiding
- Encapsulation
- Composition over Inheritance
- DRY
- KISS
- YAGNI
- Fail Fast
- Secure by Default
- Least Privilege
- Defense in Depth

Evitar:

- God Components
- God Services
- arquivos gigantes
- funções gigantes
- abstrações prematuras
- duplicação
- magic strings
- `any`
- casts inseguros
- dependências circulares
- acoplamento desnecessário

---

## Next.js

Utilizar arquitetura Server-First.

Server Components por padrão.

Criar Client Components somente quando realmente necessário para:

- estado interativo
- eventos do navegador
- browser APIs
- hooks client-side

Evitar adicionar `"use client"` em componentes sem necessidade.

Minimizar JavaScript enviado ao navegador.

---

## TypeScript

TypeScript deve operar em modo estrito.

Evitar `any`.

Preferir `unknown` + narrowing.

Usar contratos tipados.

Não ignorar erros com `@ts-ignore`, salvo situação excepcional documentada.

---

## Validação de dados

Toda entrada externa é **não confiável**.

Validar:

- parâmetros
- query strings
- formulários
- payloads
- API responses
- environment variables
- dados externos

Preferir schemas explícitos.

Validação client-side **não** substitui validação server-side.

---

## Segurança — Security by Design

Segurança deve fazer parte da especificação e da implementação.

Utilizar princípios relevantes de OWASP, OWASP ASVS e OWASP Top 10.

Considerar:

- XSS
- CSRF
- injection
- SSRF
- open redirect
- broken access control
- security misconfiguration
- secrets exposure
- vulnerable dependencies
- supply chain attacks
- insecure deserialization
- abuse
- spam
- rate abuse

---

## Secrets

**Nunca:**

- colocar secrets no código
- colocar tokens no código
- colocar senhas no código
- colocar API keys no código
- colocar credentials em documentação
- fazer log de secrets
- enviar secrets para Client Components

Utilizar environment variables.

`.env*` deve ser tratado adequadamente pelo `.gitignore`.

Criar `.env.example` somente com nomes de variáveis e exemplos **não** sensíveis.

---

## HTTP security headers

Avaliar e implementar quando aplicável:

- `Content-Security-Policy`
- `Strict-Transport-Security`
- `X-Content-Type-Options`
- `Referrer-Policy`
- `Permissions-Policy`
- `frame-ancestors`

Evitar configurações CSP excessivamente permissivas como `unsafe-eval`.

Minimizar `unsafe-inline`.

---

## Formulários

Quando houver formulário público:

- validação server-side
- sanitização quando necessária
- rate limiting
- limite de payload
- anti-spam
- honeypot quando adequado
- proteção contra abuso
- mensagens de erro seguras
- não expor informações internas

---

## Dependências

Antes de adicionar nova dependência, avaliar:

1. É realmente necessária?
2. A funcionalidade pode ser implementada de forma simples internamente?
3. O pacote está mantido?
4. Possui vulnerabilidades conhecidas?
5. Quanto aumenta o bundle?
6. Qual seu impacto na supply chain?
7. O pacote é compatível com a arquitetura?

Não instalar pacotes apenas por conveniência.

---

## Testes

Adotar estratégia proporcional ao risco.

Utilizar quando apropriado:

- Unit Tests
- Component Tests
- Integration Tests
- E2E Tests

Ferramentas preferenciais:

- Vitest
- Testing Library
- Playwright

Testar principalmente comportamento, não detalhes internos de implementação.

---

## Testes de segurança

Sempre que aplicável, verificar:

- entradas inválidas
- entradas maliciosas
- autorização
- limites
- sanitização
- exposição de informações
- comportamento de erro
- headers
- redirects
- abuso de endpoints

---

## CI — Continuous Integration

O projeto utiliza GitHub Actions.

Pipeline de Pull Request:

```
Checkout
 ↓
pnpm install --frozen-lockfile
 ↓
Lint
 ↓
Typecheck
 ↓
Unit Tests
 ↓
Integration Tests
 ↓
Build
 ↓
Security Checks
```

Todos devem passar antes do merge.

---

## Security CI

Utilizar quando configurado:

- dependency audit
- Dependabot
- CodeQL
- secret scanning
- Gitleaks
- SAST

Uma vulnerabilidade **CRITICAL** não deve ser ignorada automaticamente.

Uma vulnerabilidade **HIGH** exige análise antes de produção.

Não desabilitar scanner apenas para deixar CI verde.

---

## CD — Continuous Delivery / Deployment

Produção: `https://alexsanderfarias.dev`

Hosting: Vercel

Fluxo esperado:

```
feature branch
 ↓
Pull Request
 ↓
CI
 ↓
Vercel Preview
 ↓
Human Review
 ↓
Merge
 ↓
main
 ↓
Production
```

O agente **não** deve fazer:

- deploy manual não solicitado
- merge automático
- push automático
- alteração de domínio
- alteração de DNS
- alteração de produção sem autorização

---

## Vercel

Manter ambientes separados:

- Development
- Preview
- Production

Secrets e environment variables devem possuir escopo correto.

Não assumir que variável de Preview é adequada para Production.

---

## Quality gates

Antes de informar que uma alteração está pronta, executar, quando existentes:

```
pnpm lint
pnpm typecheck
pnpm test
pnpm build
```

Se algum comando falhar:

- não mascarar o problema
- corrigir ou comunicar claramente

---

## Accessibility

Objetivo: **WCAG 2.2 AA**.

Aplicar:

- HTML semântico
- navegação por teclado
- focus visible
- labels
- alt text
- contraste adequado
- landmarks
- skip links
- reduced motion
- ARIA apenas quando necessário

---

## UX/UI

Manter design:

- consistente
- responsivo
- acessível
- minimalista
- profissional
- visualmente sofisticado

Priorizar:

- clareza > decoração
- usabilidade > animação
- hierarquia > excesso visual

Não adicionar animações que prejudiquem performance ou acessibilidade.

---

## Performance

Priorizar Core Web Vitals.

Evitar:

- JavaScript desnecessário
- imagens gigantes
- fontes excessivas
- dependências pesadas
- hydration desnecessária
- Client Components desnecessários

Utilizar otimização nativa do Next.js sempre que apropriado.

---

## SEO

Manter:

- metadata
- canonical
- Open Graph
- `robots.txt`
- `sitemap.xml`
- structured data

URL canônica: `https://alexsanderfarias.dev`

Utilizar domínio em lowercase tecnicamente.

---

## Observability

Utilizar somente observabilidade proporcional às necessidades do projeto.

Nunca registrar:

- senhas
- tokens
- cookies de autenticação
- dados sensíveis
- secrets

---

## Conventional Commits

O projeto utiliza Conventional Commits.

Tipos permitidos:

- `feat:`
- `fix:`
- `docs:`
- `refactor:`
- `test:`
- `perf:`
- `build:`
- `ci:`
- `chore:`
- `security:`

O agente pode **sugerir** uma mensagem.

Exemplo:

```
feat(projects): add case study architecture section
```

**Nunca executar o commit.**

---

## Comportamento ao final de cada tarefa

Ao finalizar, responder no seguinte formato:

```
## Implementação

Resumo breve.

## Arquivos alterados

- arquivo
- arquivo
- arquivo

## Validação

Lint: PASS/FAIL
Typecheck: PASS/FAIL
Tests: PASS/FAIL
Build: PASS/FAIL
Security: PASS/FAIL/NOT RUN

## Pendências

Informar eventuais problemas.

## Suggested commit

feat(scope): description
```

A linha **Suggested commit** é somente texto.

Não executar:

- `git add`
- `git commit`
- `git push`

---

## Regra de ouro

O agente trabalha no **worktree**.

O humano controla o **histórico Git**.

O agente pode modificar o projeto.

O agente **não** pode publicar essas modificações no histórico.

- Nenhum commit automático
- Nenhuma coautoria automática
- Nenhuma atribuição de IA
- Nenhum push automático
- Nenhum merge automático
