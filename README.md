# test-json-rpc
[![Test JSON RPC](https://github.com/jeanljh/test-rpc/actions/workflows/ci.yml/badge.svg)](https://github.com/jeanljh/test-rpc/actions/workflows/ci.yml)

This is an example of JSON RPC test suite that includes API endpoint checking with Playwright and load tests with Artillery

## ⚙Setup and run
* Run from Github Actions
1. Go to https://github.com/jeanljh/test-rpc/actions/workflows/ci.yml
2. Click Run Workflow.
3. To view Playwright and Artillery test reports, click the latest workflow run > Summary > Artifacts > test-report link to download.

* Types of tests and its directory
Ensure client synchronization completed - tests/sync.spec.ts
Test 1: JSON-RPC verification - tests/test1.spec.ts
Test 2: JSON-RPC Benchmark - load_test.yml
Test 3: Test Suite Extension for Selected Endpoint
- verification - tests/test3.spec.ts
- performance - load_test.yml

## 📖Documentation
<a href="https://playwright.dev/docs/intro">Playwright doc</a></br>
<a href="https://www.artillery.io/docs"> Artillery doc</a>
