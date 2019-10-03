import React from "react";
import { Grid, Typography, Paper } from '@material-ui/core';

export default function myGrid() {
    return (
        <Grid container sm={12} xs="auto">
            <Grid item sm={2}>
                <Typography>
                    Left Pane
                </Typography>
            </Grid>
            <Grid item sm={4}>
                <Typography>
                    Middle Pane
                </Typography>
            </Grid>
            <Grid item sm={6}>
                <Typography>
                    Right Pane
                </Typography>
            </Grid>
        </Grid>
    )
}