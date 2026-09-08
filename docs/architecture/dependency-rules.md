# Regras de Dependência: alexsanderfarias.dev

Este documento formaliza as regras estritas de importação e fronteiras arquiteturais do Modular Monolith.

---

## 1. Princípio de Acesso Unidirecional

```
[ app/ (Next.js Routes) ]
          │
          ▼
[ modules/* (Domain Features) ]
          │
          ▼
[ shared/* (Core Kernel) ]
          ▲
          │
[ infrastructure/* (Adapters) ]
```

## 2. Matriz de Permissão de Importação

| De \ Para | `app/` | `modules/A` | `modules/B` | `shared/` | `infrastructure/` |
| :--- | :---: | :---: | :---: | :---: | :---: |
| **`app/`** | ✅ Sim | ✅ Via `index.ts` | ✅ Via `index.ts` | ✅ Sim | ⚠️ Indireto |
| **`modules/A`** | ❌ Proibido | ✅ Interno livre | ⚠️ Apenas `index.ts` | ✅ Sim | ⚠️ Apenas adaptadores |
| **`shared/`** | ❌ Proibido | ❌ Proibido | ❌ Proibido | ✅ Interno livre | ❌ Proibido |
| **`infrastructure/`**| ❌ Proibido | ❌ Proibido | ❌ Proibido | ✅ Sim | ✅ Interno livre |

## 3. Regras Específicas
1. **Sem Acesso Interno Cruzado (No Deep Imports):**
   - ❌ `import { ProjectCard } from '@/modules/projects/components/ProjectCard'` (Inválido fora do módulo projects).
   - ✅ `import { ProjectCard } from '@/modules/projects'` (Válido via contrato público `index.ts`).
2. **Pureza do Shared Kernel:**
   - O diretório `src/shared/` nunca deve depender de nenhum módulo de domínio em `src/modules/`.
   - Se um tipo ou utilitário for compartilhado por múltiplos domínios, ele deve pertencer a `src/shared/types/` ou `src/shared/lib/`.
3. **Isolamento de Infraestrutura:**
   - Detalhes de bibliotecas de envio de e-mail (ex: Resend, Sendgrid, Nodemailer) ou serviços externos devem ficar encapsulados em `src/infrastructure/` e acessados por interfaces de serviço.
4. **Verificação Automatizada:**
   - O ESLint ou regras de `no-restricted-imports` devem ser configuradas para barrar automaticamente importações que violem estas regras durante o CI.
