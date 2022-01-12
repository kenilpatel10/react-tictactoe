import React, { useState } from 'react';
import './TicTacToe.css';

const TicTactoe = () => {

        const [turn , setTurn] = useState("x");
        const [cells , setCells] = useState(Array(9).fill(''));
        const [winner, setWinner] = useState();


            const checkForWinner = (squares)=> {
               let combos = {
                   across: [
                       [0,1,2],
                       [3,4,5],
                       [6,7,8],
                   ],
                   down: [
                    [0,3,6],
                    [1,4,7],
                    [2,5,8],
                ],

                diagonal: [
                    [0,4,8],
                    [2,4,6],
        

                ]
               };
               for(let combo in combos){
                  combos[combo].forEach((pattern) => {
                      console.log(pattern);
                      if (
                          squares[pattern[0]] === "" ||
                          squares[pattern[1]] === "" ||
                          squares[pattern[2]] === ""

                      ){
                          //do nothing

                      }
                    //   else if (squares[pattern[0]] !==  squares[pattern[1]]  ||
                    //   squares[pattern[1]]  !== squares[pattern[2]]  || squares[pattern[1]] !== squares[pattern[0]]){
                    //       return alert("no body")

                    //   }
                      else if (
                        squares[pattern[0]] === squares[pattern[1]] &&
                        squares[pattern[1]] === squares[pattern[2]] 
                      )
                        {

                          console.log(pattern)
                          setWinner(squares[pattern[0]]);

                    }
                    //   else if
                        
                    
                    //        ( squares[pattern[0]] !== squares[pattern[1]] &&
                    //         squares[pattern[1]] !== squares[pattern[2]] )
                    //     {
                    //         console.log("tiiiii");
                    //     }
                        
                        

                  });
               }
               
            }

            // const checkIftie = () =>{
            //     let filled = true;
            //     cells.forEach((squares)=>{
            //         if (squares === ""){
            //             filled = false;
            //         }
            //     })

            //     if(filled){
            //      setWinner("tie......");
            //     }
            // }

    const Cell = ({num}) => {
            return <td className='text' onClick={() => handleClick(num)}>
                {cells[num]}
            </td>

    }

    const handleClick = (num) =>{


        if (cells[num] !== ""){
            alert("already clicked")
            return;
        }
        let squares = [...cells];

    
        if (turn === "x") {
            squares[num] = "x";
            setTurn ("o");
        }else{
            squares[num] = "o";
            setTurn ("x");

        }



        checkForWinner(squares);
        setCells(squares);
        // checkIftie(squares);
        // console.log(squares);
    } 
    return (
        <div className='container'>
        <table>
            turn : {turn}
            <tbody>
                <tr>
                < Cell num={0}/>
                    < Cell num={1}/>
                    < Cell num={2}/>
                </tr>

                <tr>
                    < Cell num={3}/>
                    < Cell num={4}/>
                    < Cell num={5}/>
                </tr>

                <tr>
                    < Cell num={6}/>
                    < Cell num={7}/>
                    < Cell num={8}/>
                </tr>

            </tbody>
        </table>
        
        {winner &&  (
            
                <h1>
                    {winner} is Winner..
                </h1>
                

            )
            
            }
        </div>
    )
}

export default TicTactoe;
