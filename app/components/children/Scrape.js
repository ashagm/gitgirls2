import React from 'react'
import ReactDOM from 'react-dom'
import Tabs from 'react-simpletabs'
// import {scrapeACS} from '../utils/scrapehelp'
import scrapehelp from '../utils/scrapehelp'
// import axios from 'axios'


class Scrape extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nci: [],
      who: [],
      cruk: []
    }
  }

  componentDidMount(){
    scrapehelp.getNCIscrape()
      .then((data) => {console.log('REACT NCI ' + data); this.setState({
          nci: data
        })
      });
    scrapehelp.getWHOscrape()
      .then((data)=> {console.log('REACT WHO' + data); this.setState({
        who: data
      })
    });
    scrapehelp.getCRUKscrape()
      .then((data)=> {console.log('REACT CRUK' + data); this.setState({
        cruk: data
      })
    });
  }

  render() {
    return (

      <div className="container">

        <div className="row">

          <div className="col-lg-12">

            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title">Scrapes</h3>
              </div>
              <div className="panel-body"> 
                <Tabs>
                  <Tabs.Panel title='NCI'>
                    <h2>National Cancer Institute</h2>
                    <div>
                      {this.state.nci.map((result, i) => {
                        return <p key={i}>{result.title}</p>
                        })
                      }
                    </div>

                  </Tabs.Panel>
                  <Tabs.Panel title='WHO'>
                    <h2>WHO</h2>
                    <div>
                      {this.state.who.map((result, i) => {
                        return <p key={i}>{result.title}</p>
                        })
                      }
                    </div>
                  </Tabs.Panel>
                  <Tabs.Panel title='CRUK'>
                    <h2>Cancer Research UK</h2>
                    <div>
                      {this.state.cruk.map((result, i) => {
                        return <p key={i}>{result.title}</p>
                        })
                      }
                    </div>
                  </Tabs.Panel>
                </Tabs>
              </div>
            </div>

          </div>

        </div>

      </div>
    );
  }
}

export default Scrape;

