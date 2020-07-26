import React from 'react'
import { LineChart, Grid } from 'react-native-svg-charts'

const Graphics = ({route}) => {
    const { value } = route.params

    return (
        <LineChart
            style={{ height: 200 }}
            data={value}
            svg={{ stroke: 'rgb(134, 65, 244)' }}
            contentInset={{ top: 20, bottom: 20 }}
        >
            <Grid />
        </LineChart>
    )
}

export default Graphics
