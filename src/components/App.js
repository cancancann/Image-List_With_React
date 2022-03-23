import React from "react";
import axios from "axios";
import SearchInput from "./SearhInput";
import ImageLıst from "./ImageList";


class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = { images : [] }

    }
    
    onSearchSubmit =  async (entry) => {
       const response = await axios.get(`https://pixabay.com/api/?key=<PİXABAY_APIKEY>&q=${entry}&image_type=photo`)
       console.log(this)
       console.log(response.data.hits)
       this.setState({images: response.data.hits}) 
    }

    render() {
        return(
            <div className="ui container" style={{marginTop: '30 px'}}>
                <SearchInput  onSearchSubmit= {this.onSearchSubmit}/>
                <div className="ui segment">
                    <ImageLıst  images={this.state.images} />    
                </div>
            </div>
        )
    }

}



export default App;