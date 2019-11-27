import React from 'react';
import BarChart from './BarChart';
import PieChart from './PieChart.jsx';

let x = ''
let languages = ''
let langs = []
const LanguageList = (props) => {
    if (props.langslist) {
        {
            var totalcount = Object.entries(props.langslist).map(([key, eachitem]) =>
                (eachitem)).reduce((pv, cv) => pv + cv, 0)
        }
        return (
            <div>
                <div>
                    {
                        Object.entries(props.langslist).map(([key, eachitem]) =>
                            <div>
                                <div key={key}>
                                  {key} - {Math.round((100 * eachitem) / totalcount)}%
                                </div>
                                <div>
                                  {console.log(x = x + eachitem/totalcount + ',')}
                                  {console.log(languages = languages + key + ",")}
                                </div>
                            </div>)
                    }
                </div>
                <hr></hr>
                {console.log(x)}
                {console.log(languages)}

                <div className='App-header'>
                  <h1 class="font-weight-bold">Language Graph</h1>
                </div>
                <div>
                    <BarChart data={x.split(',')} size={[500, 500]} />
                    {x = ''}

                </div>
                <hr></hr>
                <div className='Chart'>
                    <div>
                      <h1 class="font-weight-bold">Chart Representation of Language Count</h1>

                      <div>
                        <div>
                          <PieChart repoSize={x.split('')} repoNames={languages.split(',')} />
                        </div>
                        {x = ''}
                        {languages = ''}
                     </div>
                   </div>
                </div>

            </div>
        )
    } else { return null; }

};

export default LanguageList;
