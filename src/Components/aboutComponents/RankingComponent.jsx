import HackerRank from '../../assets/hackerrank.svg'
import leetcode from '../../assets/leetcode.svg'
import codechef from '../../assets/icons8-codechef-500.svg'
import codeForces from '../../assets/code-forces.svg'
import React from 'react'

function RankingComponent() {
    return (
        <div>
            <h1 className="RankingAnimated">See My Ranking</h1>
            <div className="rankContainer">
                <div className='rankImg'>
                    <a href="https://www.hackerrank.com/profile/chitluridevicha1"><img src={HackerRank} alt="HackerRank" /></a>
                </div>

                <div className='rankImg'>
                    <a href="https://leetcode.com/u/cherry_1729_9090/">
                        <img src={leetcode} alt="LeetCode" />
                    </a>
                </div>

                <div className='rankImg'>
                    <a href='https://codeforces.com/profile/cherry_1729_9090'>
                        <img src={codeForces} alt="codeForces" />
                    </a>
                </div>

                <div className='rankImg'>
                    <a href='https://www.codechef.com/users/cherry_1729_90'>
                        <img src={codechef} alt="codechef" />
                    </a>
                </div>

            </div>
        </div>
    )
}
export default RankingComponent;