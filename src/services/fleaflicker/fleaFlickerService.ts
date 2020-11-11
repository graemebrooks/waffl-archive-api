import axios from 'axios'
import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from 'constants'

interface scoringLeaders {
    quarterbacks: any[],
    runningbacks: any[],
    wideReceivers: any[],
    tightEnds: any[]
}

export default class FleaflickerService {

	async getCurrentWafflStandings() {
        return await axios.get('https://fleaflicker.com/api/FetchLeagueStandings?sport=NFL&league_id=180242&season=2020')
        .then((response) => {
            console.log(response.data)
            return response.data
        })
    }

    

	async getScoringLeaders() {

        let scoringLeaders: scoringLeaders = {
            quarterbacks: [],
            runningbacks: [],
            wideReceivers: [],
            tightEnds: []
        }

            await axios.get(`https://fleaflicker.com/api/FetchPlayerListing?sport=NFL&league_id=180242&sort=SORT_SEASON_TOTAL&filter.position.eligibility=QB`)
                .then((response) => {
                    for (let j = 0; j < 5; j++) {
                        let player = {
                            name: '',
                            score: '',
                            headshotUrl: ''
                        }
                        player.name = response.data.players[j].proPlayer.nameFull
                        player.score = response.data.players[j].viewingActualPoints.formatted
                        player.headshotUrl = response.data.players[j].proPlayer.headshotUrl
                        scoringLeaders.quarterbacks.push(player)
                    }
                })
            await axios.get(`https://fleaflicker.com/api/FetchPlayerListing?sport=NFL&league_id=180242&sort=SORT_SEASON_TOTAL&filter.position.eligibility=RB`)
                .then((response) => {
                    for (let j = 0; j < 5; j++) {
                        let player = {
                            name: '',
                            score: '',
                            headshotUrl: ''
                        }
                        player.name = response.data.players[j].proPlayer.nameFull
                        player.score = response.data.players[j].viewingActualPoints.formatted
                        player.headshotUrl = response.data.players[j].proPlayer.headshotUrl
                        scoringLeaders.runningbacks.push(player)
                    }
                })
            await axios.get(`https://fleaflicker.com/api/FetchPlayerListing?sport=NFL&league_id=180242&sort=SORT_SEASON_TOTAL&filter.position.eligibility=WR`)
                .then((response) => {
                    for (let j = 0; j < 5; j++) {
                        let player = {
                            name: '',
                            score: '',
                            headshotUrl: ''
                        }
                        player.name = response.data.players[j].proPlayer.nameFull
                        player.score = response.data.players[j].viewingActualPoints.formatted
                        player.headshotUrl = response.data.players[j].proPlayer.headshotUrl
                        scoringLeaders.wideReceivers.push(player)
                    }
                })
            await axios.get(`https://fleaflicker.com/api/FetchPlayerListing?sport=NFL&league_id=180242&sort=SORT_SEASON_TOTAL&filter.position.eligibility=TE`)
                .then((response) => {
                    for (let j = 0; j < 5; j++) {
                        let player = {
                            name: '',
                            score: '',
                            headshotUrl: ''
                        }
                        player.name = response.data.players[j].proPlayer.nameFull
                        player.score = response.data.players[j].viewingActualPoints.formatted
                        player.headshotUrl = response.data.players[j].proPlayer.headshotUrl
                        scoringLeaders.tightEnds.push(player)
                    }
                })


    return scoringLeaders;
}    


}

module.exports = FleaflickerService;
