import React from 'react'
import Attraction from './Attraction'
import PropertyType from './PropertyType'

function BrowseProperties() {
    const propertiesList = {
        header: 'BROWSE BY PROPERTY TYPE',
        title: ['Hotel room', 'Apartment', 'Resort', 'Vilas'],
        img: ['https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2371&q=80',
            'https://images.unsplash.com/photo-1525438160292-a4a860951216?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80',
            'https://images.unsplash.com/photo-1610641818989-c2051b5e2cfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
            'https://images.unsplash.com/photo-1628190036834-f4c490a08c78?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3432&q=80'],
        description: ['6400', '2020', '1700', '2805']
    }
    const explore = {
        header: 'TOP ATTRACTIONS',
        title: ['Adirondacks, New York State', 'Manhattan, New York City', 'Chicago', 'Rocks National Lakeshore, Michigan'],
        img: ['https://deih43ym53wif.cloudfront.net/large_whiteface-mountain-adirondacks-new-york-shutterstock_189286796.jpg_29261f6c38.jpg', 
            'https://deih43ym53wif.cloudfront.net/large_empire-state-building-new-york-usa-shutterstock_139761958_5dc7d40033.jpeg', 
            'https://deih43ym53wif.cloudfront.net/large_chicago-shutterstock_160991363_bc0818a78b.jpeg', 
            'https://deih43ym53wif.cloudfront.net/large_rocks-national-lake-shore-michigan-shutterstock_415643428.jpg_f183efb64a.jpg'],
        description: ['', '', '', '']
    }



    return (
        <div>
            <PropertyType list={propertiesList} />
            <Attraction list={explore}/>
        </div>

    )
}

export default BrowseProperties