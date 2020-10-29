import axios from 'axios'

export default class FleaflickerService {

	async getCurrentWafflStandings() {
        return await axios.get('https://fleaflicker.com/api/FetchLeagueStandings?sport=NFL&league_id=180242&season=2020')
        .then((response) => {
            console.log(response.data)
            return response.data
        })
    }
}

module.exports = FleaflickerService;
