# Good Output Example — Bug Hunt

> This example demonstrates what well-executed bug hunt output looks like.

## Scenario

Dashboard shows incorrect monthly totals when timezone offset crosses midnight

## Why It Works

1. Reproduction: 'Set timezone to UTC+12, create record at 11pm local → total shows in wrong month'
2. Root cause: 'Date aggregation uses server UTC, not user's local timezone'
3. Fix: 'Convert to user timezone before GROUP BY; added test for UTC+12 and UTC-12 edge cases'
4. Verification: 'Tested with 5 timezone offsets, confirmed totals match across all'

## Key Patterns to Replicate

- Reproduction is minimal — fewest steps to trigger the bug
- Root cause is mechanical ('X because Y'), not descriptive ('something wrong with dates')
- Fix includes new test cases that would have caught this bug
