import React from "react";
import StandardDataTable from "../../_common/components/DataTable/StandardDataTable";
import { useSelector } from 'react-redux';
import { Grid, Button, Paper } from "@material-ui/core";
import ContinuePeriodSearchBox from '../components/ContinuePeriodSearchBox';
import { makeStyles } from "@material-ui/core/styles";
import { useWindowSize } from 'react-use';

const useStyle = makeStyles((theme) => ({
    paperMain: {
        marginTop: theme.spacing(0),
        padding: theme.spacing(2),
        //height: "auto",
        //padding: 20,
        //marginBottom: 10,
        //marginTop: 8
    }
}));

function ContinuePeriodTable() {
    const classes = useStyle();
    const deductionReducer = useSelector(({ deductBankAccount }) => deductBankAccount);
    const { width, height } = useWindowSize();
    const [totalRecords, setTotalRecords] = React.useState(0);
    const [paginated, setPaginated] = React.useState({
        page: 1,
        recordsPerPage: 10,
        orderingField: "",
        ascendingOrder: true,
        searchValues: {
            searchWord: ""
        },
    });

    const columns = [
        {
            name: "GroupId",
            label: "Id",
            options: {
                display: false
            }
        },
        {
            name: "GroupCode",
            label: "รหัสกลุ่ม",

        },
        {
            name: "BillingItemCount",
            label: "จำนวนรายการ"
        },
        {
            name: "TotalNet",
            label: "เบี้ยรวม"
        },
        {
            name: "CreatedDate",
            label: "วันที่ทำรายการ"
        },
        {
            name: "CreatedById",
            label: "ผู้ทำรายการ"
        },
        {
            name: "BillingStatusDetail",
            label: "สถานะ"
        }


    ];


    const handleUpdateSearch = (values) => {
        let newPaginated = {
            ...paginated,
            page: 1,
            searchValues: {
                searchWord: values.searchWord
            },
        };
        setPaginated(newPaginated);
    };

    return (
        <div>
            <Paper elevation={0} style={{ minHeight: height - 75 }} className={classes.paperMain} >
                <Grid
                    container
                    direction="column"
                    justifyContent="flex-start"
                    alignItems="stretch"
                    spacing={0}
                >
                    <Grid item xs={12} lg={12}>
                        <Paper elevation={3} style={{ padding: 20, marginBottom: 0, marginTop: 8 }}>
                            <ContinuePeriodSearchBox updateSearch={handleUpdateSearch.bind(this)}></ContinuePeriodSearchBox>
                        </Paper>
                    </Grid>
                    <Grid container style={{ marginTop: -10 }}>
                        <Grid item xs={12} lg={12}>
                            <StandardDataTable
                                name="deductFirstPeriodTable"
                                title=""
                                columns={columns}
                                data={deductionReducer.continuePeriodGroup}
                                paginated={paginated}
                                setPaginated={setPaginated}
                                totalRecords={totalRecords}
                                headerbgcolor={"#D5D8DC !important"}
                            ></StandardDataTable>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    )
}

export default ContinuePeriodTable
