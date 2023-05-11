import test, { expect } from "@playwright/test";

test.describe('Test 3: Test Suite Extension for Selected Endpoint', async () => {
    test('Test - eth_chainId', async ({request}) => {
        const response = await request.post('', {
            data: {
                Method:  'eth_chainId',
                Params:  [],
                ID:      1,
                JsonRPC: '2.0',
            }
        })
        expect(response.ok(), 'verify response is successful').toBeTruthy()
        const json = await response.json()
        expect(Object.keys(json), 'verify response is not empty and has correct properties').toEqual(['jsonrpc', 'result', 'id'])
        expect(json, 'verify response contains default property values').toEqual(expect.objectContaining({
            jsonrpc: '2.0',
            id: 1
        }))
    })
    
    test('Test - eth_protocolVersion', async ({request}) => {
        const response = await request.post('', {
            data: {
                Method:  'eth_protocolVersion',
                Params:  [],
                ID:      1,
                JsonRPC: '2.0',
            }
        })
        expect(response.ok(), 'verify response is successful').toBeTruthy()
        const json = await response.json()
        expect(Object.keys(json), 'verify response is not empty and has correct properties').toEqual(['jsonrpc', 'result', 'id'])
        expect(await json, 'verify response contains default property values').toEqual(expect.objectContaining({
            jsonrpc: '2.0',
            id: 1
        }))
    })
})