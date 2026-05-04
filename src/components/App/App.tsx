import { useState } from 'react';
import CafeInfo from '../CafeInfo/CafeInfo'
import css from './App.module.css'
import type { Votes, VoteType } from '../../types/votes';
import VoteOptions from '../VoteOptions/VoteOptions';
import VoteStats from '../VoteStats/VoteStats';
import Notification from '../Notification/Notification';



const App = () => {
    const [votes, setVotes] = useState<Votes>({bad:0, neutral:0, good:0});

    const handleVote = (key: VoteType) => {
            setVotes({ ...votes, [key]: votes[key] + 1 });

    }  

    const resetVotes = () => {
        setVotes({ bad: 0, neutral: 0, good: 0 });
    }

    const totalVotes = votes.good + votes.neutral + votes.bad;
    const positiveRate = totalVotes
        ? Math.round((votes.good / totalVotes) * 100)
    : 0
    

    return (
        <div className={css.app}>
            <CafeInfo />
            <VoteOptions onVote={handleVote} onReset={resetVotes} canReset={totalVotes > 0}/>
            {totalVotes > 0 
            ? <VoteStats votes={votes} totalVotes={totalVotes} positiveRate={positiveRate} />
            : <Notification /> 
            }
        </div>
    );
};

export default App;
