import React from 'react';
import { Grid, Paper } from '@material-ui/core';
import { useWindowSize } from 'react-use';
import DetailFileTable from '../components/DetailFileTable';
import { Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';



function DetailFileDeductPage() {
    const { height } = useWindowSize();
    const manageDeductReducer = useSelector(({ manageDeduct }) => manageDeduct);
    return (
        <Paper elevation={0} style={{ padding: 20, minHeight: height - 73 }}>
            <div style={{ marginBottom: 20 }}>
                <Typography variant={'h6'}>รายละเอียดไฟล์ส่งหักธนาคาร - {manageDeductReducer.selectedGroup.GroupCode} {manageDeductReducer.selectedGroup.groupMode}</Typography>
            </div>
            <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                style={{ marginBottom: 20, marginTop: 50 }}
            >
                <Grid item xs={12} lg={3}>
                    <Typography>สถานะ</Typography>
                </Grid>
                <Grid item xs={12} lg={5}>
                    <Typography>{manageDeductReducer.selectedGroup.groupStatus}</Typography>
                </Grid>
            </Grid>
            <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                style={{ marginBottom: 30, marginTop: 30 }}
            >
                <Grid item xs={12} lg={3}>
                    <Typography>สาเหตุที่หักไม่ได้</Typography>
                </Grid>
                <Grid item xs={12} lg={5}>
                    <Typography>{manageDeductReducer.selectedGroup.groupRemark}</Typography>
                </Grid>
            </Grid>
            <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="stretch"
            >
                <DetailFileTable />
            </Grid>

        </Paper >
    )
}

export default DetailFileDeductPage
