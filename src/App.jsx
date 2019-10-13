import React, { Component } from 'react';
import UploadComponent from './UploadComponent';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    SavePublicImgs=(files)=>{
    
        this.setState({
          PublicPhotesSubmitted: files,
        })
      }
    render() {
        return(
            <div>
                 {/* //note max argument is must */}
                 <UploadComponent max={10} recieveImgs={this.SavePublicImgs} />
                                    
            </div>   
        )
    }
}

export default App;