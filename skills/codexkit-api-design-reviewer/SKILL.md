---
name: codexkit-api-design-reviewer
description: Review REST and GraphQL API designs for consistency, usability, and best practices. Covers naming conventions, versioning strategy, error format, pagination, authentication patterns, and breaking change detection. Use when reviewing API specs, designing new APIs, or auditing existing endpoints.
---

# API Design Reviewer

## When to Use

- When reviewing an OpenAPI/Swagger specification before implementation
- When auditing existing API endpoints for consistency
- When designing a new API from scratch
- When preparing APIs for external/partner consumption

## Procedure

### Step 1 — Naming & Convention Check

| Check | Rule | Example |
|-------|------|---------|
| Resource naming | Plural nouns, kebab-case | ✅ `/api/v1/order-items` ❌ `/api/v1/getOrderItem` |
| HTTP methods | GET=read, POST=create, PUT=replace, PATCH=partial, DELETE=remove | ✅ `POST /orders` ❌ `POST /create-order` |
| Query params | camelCase for filters/sorting | ✅ `?sortBy=createdAt` ❌ `?sort_by=created_at` |
| Status codes | Use standard codes correctly | ✅ 201 Created, 204 No Content ❌ 200 for everything |
| Consistency | Same pattern across all endpoints | Check all resources follow same naming |

### Step 2 — Versioning Strategy

| Strategy | When to Use | Pattern |
|----------|------------|---------|
| URL path | Simple, widely adopted | `/api/v1/orders` |
| Header | Cleaner URLs, harder to test | `Accept: application/vnd.api+json;version=1` |
| Query param | Easy to test, but less RESTful | `/api/orders?version=1` |

Verify:
- [ ] Version is present in all endpoints
- [ ] Deprecation policy documented
- [ ] Migration guide for version bumps

### Step 3 — Error Format

Errors should follow a consistent structure:

```json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Human-readable description",
    "details": [
      {
        "field": "email",
        "issue": "Invalid format",
        "expected": "Valid email address"
      }
    ],
    "request_id": "req_abc123",
    "docs_url": "https://docs.api.com/errors/VALIDATION_ERROR"
  }
}
```

Check:
- [ ] Error format consistent across all endpoints
- [ ] Machine-readable error codes (not just messages)
- [ ] Request ID for traceability
- [ ] No sensitive data in error responses

### Step 4 — Pagination

| Pattern | Best For | Implementation |
|---------|----------|---------------|
| Cursor-based | Large datasets, real-time data | `?cursor=abc&limit=20` |
| Offset-based | Simple lists, admin UIs | `?page=2&per_page=20` |
| Keyset | Time-series data | `?after=2024-03-15T00:00:00Z&limit=20` |

Check:
- [ ] Default page size set (and documented)
- [ ] Maximum page size enforced
- [ ] Total count available (or explicitly omitted for performance)
- [ ] Links to next/prev pages in response

### Step 5 — Security Patterns

| Check | Details |
|-------|---------|
| Authentication | Bearer token, API key, OAuth2 — documented per endpoint |
| Authorization | Role-based access noted per endpoint |
| Rate limiting | Headers: `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `Retry-After` |
| Input validation | Max lengths, allowed characters, type checking |
| CORS | Appropriate origins, methods, headers |

### Step 6 — Breaking Change Detection

Identify potential breaking changes:
- ❌ Removing a field from response
- ❌ Changing a field type (string → integer)
- ❌ Making an optional field required
- ❌ Changing endpoint URL
- ✅ Adding a new optional field
- ✅ Adding a new endpoint
- ✅ Adding a new optional query parameter

## Inputs

| Input | Required | Format |
|-------|----------|--------|
| API specification | Yes | OpenAPI/Swagger YAML/JSON or endpoint list |
| Business context | Recommended | Who consumes this API |
| Existing API | Recommended | For breaking change detection |

## Output

```markdown
## API Review — [API Name]

### Summary
**Endpoints reviewed:** 24 | **Issues found:** 8 | **Breaking changes:** 0

### Issues

| # | Severity | Category | Endpoint | Issue | Fix |
|---|----------|----------|----------|-------|-----|
| 1 | High | Naming | POST /createUser | Verb in URL | POST /users |
| 2 | Medium | Errors | All | No request_id | Add tracing ID |
| 3 | Low | Pagination | GET /logs | No max page size | Enforce limit ≤ 100 |

### Recommendations
[Summary of patterns to adopt or fix]
```

## Definition of Done

- [ ] Naming conventions checked across all endpoints
- [ ] Versioning strategy reviewed
- [ ] Error format consistency verified
- [ ] Pagination patterns assessed
- [ ] Security patterns checked
- [ ] Breaking changes flagged
