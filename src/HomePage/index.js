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
            list:[]
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
    const stockSearch = await (await fetch()).json()
    const symbol = stockSearch.bestMatches[0]['1. symbol']
    const theStock = await (await fetch()).json()
    this.setState({stockToShow: theStock}) 
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
            <section className="section">
            <ul>
                {
                  this.state.list[0]
                   &&
                   <div>
                       <div>{this.state.list[0]['1. symbol']}</div>
                       <div>{this.state.list[0]['2. name']}</div>
                       <div>{this.state.list[0]['3. type']}</div>
                       <div>{this.state.list[0]['4. region']}</div>
                       <div>{this.state.list[0]['5. marketOpen']}</div>
                       <div>{this.state.list[0]['6. marketClose']}</div>
                       <div>{this.state.list[0]['7. timezone']}</div>
                       <div>{this.state.list[0]['8. currency']}</div>
                       <div>{this.state.list[0]['9. matchScore']}</div>
                   </div>  
                }
            </ul>
            </section>
        </div>
        </div>
    )

}
}














export default withRouter(Home);