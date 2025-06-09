import React, { Component } from 'react'
import Coin from './Coin'
import { choice } from './helpers';

export default class CoinContainer extends Component {
    static defaultProps = {
        coins: [
            { side: "heads", imgSrc: "https://tinyurl.com/react-coin-heads-jpg" },
            { side: "tails", imgSrc: "https://images-na.ssl-images-amazon.com/images/I/71u0yTCC0gL._SX355_.jpg" },
        ],
    };
    constructor(props) {
        super(props)
        this.state = {
            currCoin: null,
            nFLips: 0,
            nHeads: 0,
            nTails: 0,
        }
        this.handleClick = this.handleClick.bind(this);
    }
    flipCoin() {
        const newCoin = choice(this.props.coins);
        this.setState((st) => {
            return {
                currCoin: newCoin,
                nFLips: st.nFLips + 1,
                nHeads: st.nHeads + (newCoin.side === "heads" ? 1 : 0),
                nTails: st.nTails + (newCoin.side === "tails" ? 1 : 0),

            };
        });
    }
    handleClick() {
        this.flipCoin();
    }
    render() {
        // console.log(this.state.currCoin);
        return (
            <div className='App'>
                <div className='CoinContainer'>
                    <h2 className='text-center'>Let's Flip A Coin!</h2>
                    {this.state.currCoin && <Coin info={this.state.currCoin} />}
                    <div className='text-center'><button onClick={this.handleClick}>Flip Me!</button></div>
                    <p className='text-center'>
                        Out of {this.state.nFLips} flips, there have been {this.state.nHeads}{" "} heads and {this.state.nTails} tails.
                    </p>
                </div>
            </div>
        )
    }
}