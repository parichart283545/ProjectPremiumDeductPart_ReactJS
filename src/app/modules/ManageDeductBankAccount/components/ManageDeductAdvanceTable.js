import React from 'react';
import StandardDataTable from "../../_common/components/DataTable/StandardDataTable";
import { useSelector } from 'react-redux';
import { Grid, Paper } from "@material-ui/core";
import ManageDeductSearch from './ManageDeductAdvanceSearch';

function ManageDeductTable() {
    const manageDeductReducer = useSelector(({ manageDeduct }) => manageDeduct);
    const [totalRecords, setTotalRecords] = React.useState(0);
    const [paginated, setPaginated] = React.useState({
        page: 1,
        recordsPerPage: 10,
        orderingField: "",
        ascendingOrder: true,
        searchValues: {
            searchAdvanceWord: manageDeductReducer.searchAdvanceWord
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
            label: "รหัสกลุ่ม"
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
            name: "DateDeductSent",
            label: "วันที่หักเบี้ย"
        },
        {
            name: "BankName",
            label: "ธนาคาร"
        },
        {
            name: "StatusDetail",
            label: "สถานะ"
        },
        {
            name: "SeeMoreDetail",
            label: ""
        },
        {
            name: "Action",
            label: ""
        },


    ];

    return (
        <div>
            {/* <Paper elevation={0} > */}
            <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="stretch"
                spacing={0}
            >
                <Grid item xs={12} lg={12}>
                    <Paper elevation={3} style={{ padding: 20, marginBottom: 10, marginTop: 8, minHeight: 100 }} >
                        <ManageDeductSearch />
                    </Paper>
                </Grid>
                <Grid item xs={12} lg={12}>
                    <StandardDataTable
                        name="deductFirstPeriodTable"
                        title=""
                        columns={columns}
                        data={manageDeductReducer.advanceGroup}
                        paginated={paginated}
                        setPaginated={setPaginated}
                        totalRecords={totalRecords}
                        headerbgcolor={"#D5D8DC !important"}
                    ></StandardDataTable>
                </Grid>
            </Grid>
            {/* </Paper> */}
        </div>
    )
}

export default ManageDeductTable
