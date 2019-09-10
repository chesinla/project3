import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Divider } from 'semantic-ui-react';
import "./style.css"

class Home extends Component {
    constructor(){
        super();

        this.state = {
            username: '',
            password: '',
            email: '',
            currentStock: null,
            stock: '',
            list:[],
            stockToShow: []
        }
    
    }
    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

//     render(){
//         return(
//             <div className="homepage">
//                 <h1>CHART NEST</h1>
//             <div>
//                 <h2> Search for a new stock!!</h2>
//                     <form>
//             </div>


//         </div>

//         )        
//     }      
// }

addItem = async (e) => {
    e.preventDefault()
    const stockSearch = await (await fetch(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${this.state.stock}&apikey=1VMZ0SIMGMJX4FUO`)).json()
    // const symbol = stockSearch.bestMatches[0]['1. symbol']
    // const theStock = await (await fetch(`https://api-v2.intrinio.com/companies/${symbol}?api_key=Ojk4ODRjMmVmNTRiNWIyOTMyZjY3Njg2MzdiNWQ4MTdj `)).json()
    this.setState({stockToShow: [stockSearch.bestMatches[0]]}) 
}

render(){
    return(
//         1. symbol: "NKE"
// 2. name: "NIKE Inc."
// 3. type: "Equity"
// 4. region: "United States"
// 5. marketOpen: "09:30"
// 6. marketClose: "16:00"
// 7. timezone: "UTC-04"
// 8. currency: "USD"
// 9. matchScore: "0.8571"

        <div className="content">
        <div className="container">
            <hr />
            <section className="section">
            <form className="form" id="addItemForm" onSubmit={this.addItem}>
                <input
                type="text"
                className="input"
                name='stock'
                value={this.state.stock}
                id="addInput"
                placeholder="search for stocks here"
                onChange={this.handleChange}
                />
                <button className="button is-info" type='submit'>
                Search Stock
                </button>
            </form>
            </section>
            {/* <section className="section">
            <ul>
            </ul>
            </section> */}
            {/* {
                Object.entries(this.state.stockToShow).map(s =>
                    <div>{s[0]}: {s[1]}</div>
                )
            } */}
            {
                this.state.stockToShow.map(s => 
                    Object.entries(s).map(stock =>
                        <div>{stock[0]}: {stock[1]}</div>
                    )
                )
            }
        </div>
        </div>
    )

}
}














export default withRouter(Home);