# Pipeline de Integração e Entrega Contínua (CI/CD)

Este documento especifica o fluxo de automação via GitHub Actions e Vercel para garantir qualidade e integridade do código antes de qualquer deploy em produção.

---

## 1. Fluxo de Trabalho (Workflow Pipeline)

```
[ Developer Branch / PR ]
          │
          ▼
[ GitHub Actions: ci.yml ]
  ├── 1. Checkout & Setup Node LTS + pnpm
  ├── 2. Frozen Lockfile Install
  ├── 3. Linter Check (ESLint strict)
  ├── 4. TypeScript Typecheck (tsc --noEmit)
  ├── 5. Unit & Component Tests (Vitest)
  ├── 6. Security Audit (pnpm audit)
  └── 7. Next.js Production Build Test (next build)
          │
          ├──> [ Falha ] ──> Bloqueia PR & Notifica Autor
          │
          └──> [ Sucesso ] ──> Libera Vercel Preview Deployment
                                      │
                              [ Aprovação & Merge ]
                                      │
                                      ▼
                               [ Branch: main ]
                                      │
                                      ▼
                      [ Vercel Production Deployment ]
                         (https://alexsanderfarias.dev)
```

## 2. Regras de Proteção de Branch (`main`)
- **Require Status Checks to Pass:** O workflow de CI completo deve estar 100% verde.
- **Require Pull Request Reviews:** Pelo menos uma aprovação formal.
- **No Direct Pushes:** Bloqueio de pushes diretos na branch principal.
- **Linear History:** Rebase ou squash commits padronizados em Conventional Commits (`feat:`, `fix:`, `docs:`, `security:`, etc.).
