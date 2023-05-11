import test, { expect } from "@playwright/test";

let blockNum = ''

test.describe('Test 1: JSON-RPC verification', async () => {    
    test('Test - eth_blockNumber', async ({request}) => {
        const response = await request.post('', {
            data: {
                Method:  'eth_blockNumber',
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
        const { result } = json
        expect(Object.values(result), 'verify value of property "result" is not undefined, null or empty string').not.toHaveLength(0)
        blockNum = result
    })
    
    test('Test - eth_getBlockByNumber', async ({request}) => {
        const response = await request.post('', {
            data: {
                Method:  'eth_getBlockByNumber',
                Params:  [{ BlockNumber: blockNum }, true],
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
})