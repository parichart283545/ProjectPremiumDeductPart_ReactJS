import React from 'react'
import { Grid, Paper, Divider, Typography } from "@material-ui/core";
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TabPanel from '../../_common/components/TabPanel/TabPanel'
import { useDispatch, useSelector } from "react-redux";
import * as manageDeductLayoutRedux from '../_redux/manageDeductLayoutRedux';
import { makeStyles } from "@material-ui/core/styles";
import { useWindowSize } from 'react-use';
import ManageDeductAdvanceTable from '../components/ManageDeductAdvanceTable';
import ManageDeductRenewalTable from '../components/ManageDeductRenewalTable';

const useStyle = makeStyles((theme) => ({

    dividerFullWidth: {
        height: '3px',
        backgroundColor: "#3f51b5",

    },
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },

}));

function ManageDeductPremiumPage() {
    const classes = useStyle();
    const dispatch = useDispatch();
    const layoutReducer = useSelector(({ manageDeductLayout }) => manageDeductLayout);
    const [value, setValue] = React.useState(0);
    const { height } = useWindowSize();

    const handleChange = (event, newValue) => {
        dispatch(manageDeductLayoutRedux.actions.updateTabIndex(newValue));
        setValue(newValue);
    };
    return (
        <React.Fragment>

            <Paper elevation={0} style={{ padding: 20, minHeight: height - 73 }}>
                <div style={{ marginBottom: 20 }}>
                    <Typography variant={'h6'}>จัดการรายการส่งหักบัญชีธนาคาร</Typography>
                </div>
                <Grid container>
                    <Grid item xs={12} lg={12}>
                        {/*Start Tab component */}
                        <div className={classes.root}>
                            <AppBar position="static" color="transparent">
                                <Tabs
                                    value={value}
                                    onChange={handleChange}
                                    indicatorColor="primary"
                                    textColor="primary"
                                    aria-label="full width tabs example"
                                >
                                    <Tab label="หักส่งล่วงหน้า" tabIndex={0} />
                                    <Tab label="ต่ออายุ" tabIndex={1} />
                                </Tabs>

                            </AppBar>
                            <Divider
                                className={classes.dividerFullWidth}
                            />
                        </div>

                        <Paper variant="outlined" square style={{ minHeight: height - 220 }}>
                            {layoutReducer.tabIndex === 0 &&
                                <TabPanel value={value} index={0}>
                                    {/* Component หักล่วงหน้า */}
                                    <ManageDeductAdvanceTable />
                                </TabPanel>
                            }

                            {layoutReducer.tabIndex === 1 &&
                                <TabPanel value={value} index={1}>
                                    {/* Component ต่ออายุ */}
                                    <ManageDeductRenewalTable />
                                </TabPanel>
                            }
                        </Paper>
                        {/*End Tab component */}
                    </Grid>
                </Grid>
            </Paper>
        </React.Fragment>
    )
}

export default ManageDeductPremiumPage
