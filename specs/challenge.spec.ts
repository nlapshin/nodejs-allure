
import got from 'got';
import { strict as assert } from 'assert'
import console from 'console';
let key: string | string[] | undefined;

describe('Full', () => {
    before(async function () {
        // User can get token
        const {headers} = await got.post('https://apichallenges.herokuapp.com/challenger')
        key = headers['x-challenger'];
        console.log('https://apichallenges.herokuapp.com/gui/challenges/'+key);
      });
    it('GET /challenges (200)', async function () {
            const {statusCode, headers} = await got.get('https://apichallenges.herokuapp.com/challenges', {
                headers: {
                    'X-CHALLENGER': key,
                }
            })
        assert(statusCode == 200)
    })
}) 