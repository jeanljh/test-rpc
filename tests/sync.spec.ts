import test, { expect } from "@playwright/test";

test('Ensure client synchronization completed', async ({request}) => {
    const response = await request.post('', {
        data: {
            Method:  'eth_syncing',
            Params:  [],
            ID:      1,
            JsonRPC: '2.0',
        }
    })
    expect(response.ok(), 'verify response is successful').toBeTruthy()
    const { result } = await response.json()
    expect(result.isSyncing ?? false, 'verify property does not exist, hence returns false').toBeFalsy()
})