/* eslint-disable react/jsx-key */
import React, { Key, CSSProperties } from 'react'
import { Grid, Divider } from '@mui/material'
interface dataItem {
    label: String;
    value: String;
}
interface RenderItemProps {
    Item: dataItem;
}
interface DetailBlockProps {
    data: dataItem[];
    labelStyle?: CSSProperties;
    valueStyle?: CSSProperties;
    direction?: "row" | "column";
}
const DetailBlock: React.FC<DetailBlockProps> = ({
    data,
    labelStyle,
    valueStyle,
    direction = "row"
}) => {
    const RenderItem: React.FC<RenderItemProps> = ({ Item }) => {
        return (
            <Grid container direction="column" justifyContent="center" alignItems="center">
                <Grid item style={{ fontWeight: 'bold', ...valueStyle }}>
                    {Item.value}
                </Grid>
                <Grid item style={{ fontWeight: 'bold', ...labelStyle }}>
                    {Item.label}
                </Grid>
            </Grid>
        )
    }
    return (
        <Grid
            container
            direction={direction === "column" ? 'column' : 'row'}
            spacing={2}
        >
            {
                data.map((Item, index) => {
                    return (
                        <>
                            <Grid item>
                                <RenderItem Item={Item} key={Item.label as Key} />
                            </Grid>
                            {
                                (index + 1 < data.length) && < Grid item>
                                    <Divider
                                        style={{
                                            width: '100%',
                                            padding: "1rem 0rem"
                                        }}
                                        flexItem
                                        orientation={direction === 'row' ? "vertical" : "horizontal"}
                                    />
                                </Grid>
                            }
                        </>
                    )
                })
            }
        </Grid >
    )
}
export default DetailBlock