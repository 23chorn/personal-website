'use client';

import { useEffect, useState } from 'react';
import HobbyCard from '../components/HobbyCard';

const lichessUsername = 'chornnn';
const chesscomUsername = 'chornnn';

export default function Hobbies() {
  const [lichessRapid, setLichessRapid] = useState<string | null>(null);
  const [lichessPuzzle, setLichessPuzzle] = useState<string | null>(null);
  const [chesscomRapid, setChesscomRapid] = useState<string | null>(null);
  const [chesscomPuzzle, setChesscomPuzzle] = useState<string | null>(null);

  useEffect(() => {
    // Fetch Lichess ratings
    fetch(`https://lichess.org/api/user/${lichessUsername}`)
      .then(res => res.json())
      .then(data => {
        if (data && data.perfs) {
          if (data.perfs.rapid) {
            setLichessRapid(`Rapid: ${data.perfs.rapid.rating}`);
          }
          if (data.perfs.puzzle) {
            setLichessPuzzle(`Puzzle: ${data.perfs.puzzle.rating}`);
          }
        }
      });

    // Fetch Chess.com ratings
    fetch(`https://api.chess.com/pub/player/${chesscomUsername}/stats`)
      .then(res => res.json())
      .then(data => {
        if (data) {
          if (data.chess_rapid && data.chess_rapid.last) {
            setChesscomRapid(`Rapid: ${data.chess_rapid.last.rating}`);
          }
          if (data.tactics && data.tactics.highest) {
            setChesscomPuzzle(`Puzzle: ${data.tactics.highest.rating}`);
          }
        }
      });
  }, []);

  const hobbies = [
    {
      name: 'Lichess',
      link: `https://lichess.org/@/${lichessUsername}`,
      icon: 'https://upload.wikimedia.org/wikipedia/commons/d/da/Lichess_Logo_2019.svg',
      username: lichessUsername,
      rating: `${lichessRapid ?? ''}${lichessPuzzle ? ' | ' + lichessPuzzle : ''}`,
      description: 'Active on Lichess, playing rapid and blitz. Always up for a challenge!',
    },
    {
      name: 'Chess.com',
      link: `https://www.chess.com/member/${chesscomUsername}`,
      icon: '/images/icons8-chess-com.svg',
      username: chesscomUsername,
      rating: `${chesscomRapid ?? ''}${chesscomPuzzle ? ' | ' + chesscomPuzzle : ''}`,
      description: 'Focusing on daily games, rapid and puzzles.',
    },
    // Add more hobbies here
  ];

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Hobbies</h1>
      <div className="grid md:grid-cols-2 gap-4">
        {hobbies.map((h, idx) => <HobbyCard key={idx} {...h} />)}
      </div>
    </div>
  );
}