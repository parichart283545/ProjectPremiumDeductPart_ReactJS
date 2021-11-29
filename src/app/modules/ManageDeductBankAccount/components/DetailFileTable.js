import React from 'react';
import StandardDataTable from "../../_common/components/DataTable/StandardDataTable";
import { useSelector } from 'react-redux';
import { Grid } from "@material-ui/core";

function DetailFileTable() {
    const manageDeductReducer = useSelector(({ manageDeduct }) => manageDeduct);
    const [totalRecords, setTotalRecords] = React.useState(0);
    const [paginated, setPaginated] = React.useState({
        page: 1,
        recordsPerPage: 10,
        orderingField: "",
        ascendingOrder: true,
        searchValues: {
            selectedGroupCode: manageDeductReducer.selectedGroup.GroupCode
        },
    });

    const columns = [
        {
            name: "ItemId",
            label: "Id",
            options: {
                display: false
            }
        },
        {
            name: "ItemCode",
            label: "รหัสอ้างอิง"
        },
        {
            name: "BankAccountNo",
            label: "เลขที่บัญชี"
        },
        {
            name: "BankAccountName",
            label: "ชื่อบัญชี"
        },
        {
            name: "TotalNet",
            label: "จำนวน"
        },
        {
            name: "StatusDetail",
            label: "สถานะ"
        },
        {
            name: "Remark",
            label: "สาเหตุที่หักไม่ได้"
        },
        {
            name: "Manage",
            label: "จัดการ"
        }
    ];


    return (
        <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="stretch"
            spacing={0}
        >
            <Grid item xs={12} lg={12}>
                <StandardDataTable
                    name="deductFirstPeriodTable"
                    title=""
                    columns={columns}
                    data={manageDeductReducer.groupSelectedData}
                    paginated={paginated}
                    setPaginated={setPaginated}
                    totalRecords={totalRecords}
                    headerbgcolor={"#D5D8DC !important"}
                ></StandardDataTable>
            </Grid>
        </Grid>
    )
}

export default DetailFileTable
