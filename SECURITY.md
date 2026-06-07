# Security Policy

Thank you for helping keep the Datalayer GitHub Actions and our users safe.

## Reporting a Vulnerability

**Please do not report security vulnerabilities through public GitHub issues, discussions, or pull requests.**

Instead, report them privately using
[GitHub's private vulnerability reporting](https://github.com/goanpeca/datalayer-action/security/advisories/new)
— the **Report a vulnerability** button under the repository's **Security** tab.

If you are unable to use GitHub private reporting, email **info@datalayer.io**
with `SECURITY` in the subject line and the details described below.

You should receive an acknowledgement within **3 business days**. If you do not,
please follow up to make sure we received your original message.

### What to include

Please include as much of the following as you can:

- A description of the vulnerability and its impact.
- The action(s), version/tag, and configuration affected.
- Step-by-step instructions to reproduce the issue.
- Proof-of-concept code or a minimal workflow, if available.
- Any suggested remediation.

## Supported Versions

Security fixes are provided for the latest release and the moving major tag.

| Version                                       | Supported                          |
| --------------------------------------------- | ---------------------------------- |
| Latest `0.x` release                          | :white_check_mark:                 |
| Moving major tag (e.g. `v1`, once released)   | :white_check_mark:                 |
| Older tags / pinned commit SHAs               | :warning: Upgrade to latest        |

Because GitHub Actions consumers may pin to a specific tag or commit SHA, we
strongly recommend tracking the moving major tag (or enabling Dependabot
updates) so that you automatically receive security fixes.

## Disclosure Policy

We follow **coordinated disclosure**:

1. You report the issue privately.
2. We confirm receipt and begin investigation (target: 3 business days).
3. We develop and test a fix and prepare a GitHub Security Advisory.
4. We release the fix, publish the advisory, and credit the reporter
   (unless you request anonymity).

We ask that you give us a reasonable opportunity to remediate the issue before
any public disclosure.

## Scope

This policy covers:

- The action definitions (`action.yml`) and their bundled `dist/` code in this
  repository.
- The shared TypeScript library and any code executed by these actions.

Vulnerabilities in the upstream Datalayer platform or the `@datalayer/core` SDK
should be reported to those projects, though we are happy to help route reports.

## Safe Harbor

We will not pursue or support legal action against researchers who:

- Make a good-faith effort to comply with this policy,
- Avoid privacy violations, data destruction, and degradation of service, and
- Give us reasonable time to remediate before public disclosure.

Thank you for keeping Datalayer and its users safe.
