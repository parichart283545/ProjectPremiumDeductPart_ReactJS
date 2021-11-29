import React from 'react';
import { Grid, Button, Dialog, CircularProgress, DialogActions, DialogContent } from '@material-ui/core';
import StandardDataTable from "../../_common/components/DataTable/StandardDataTable";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from 'react-redux';
import * as deductLayoutRedux from '../_redux/deductLayoutRedux';
import * as deductBankAccountRedux from '../_redux/deductionBankAccountRedux';
import { useFormik } from 'formik';

//CSS
//#region Style

const useStyle = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(1),
        padding: theme.spacing(2),
        height: "auto",
    },
    saveButton: {
        color: "#FFFFFF", //font color
        marginTop: '5%',
        marginBottom: '5%',
        backgroundColor: "primary",
        '&:hover': {
            backgroundColor: "primary",
        },
        closeButton: {
            position: 'absolute',
            right: theme.spacing(1),
            top: theme.spacing(1),
            color: theme.palette.grey[500],
        },
    },
    closeButton: {
        marginTop: '5%',
        marginBottom: '5%',
    },
}));
//#endregion

function DialogContinuePeriod() {
    const classes = useStyle();
    const deductLayoutReducer = useSelector(({ deductLayout }) => deductLayout);
    const deductBankAccountReducer = useSelector(({ deductBankAccount }) => deductBankAccount)
    const dispatch = useDispatch();
    const [totalRecords, setTotalRecords] = React.useState(0);
    const [paginated, setPaginated] = React.useState({
        page: 1,
        recordsPerPage: 10,
        orderingField: "",
        ascendingOrder: true,
    });


    //#region promise
    const resetLayoutPromise = () =>
        new Promise((resolve) => {
            dispatch(deductLayoutRedux.actions.closeCont());
            resolve();
        });
    //#endregion promise

    //#region Formik
    const formik = useFormik({
        enableReinitialize: true,
        validate: (values) => {
            const errors = {};
            //TODO:Validate
            return errors;
        },
        initialValues: {
            selectedData: deductBankAccountReducer.continuePeriodItem
        },
        onSubmit: (values) => {
            //submit .... 
            //TODO: Save 
            handleClose();
        },
    });

    //#endregion Formik

    //#region Event Handlers
    const handleClose = () => {
        //Reset redux layout then reset form and close
        resetLayoutPromise().then(() => {
            formik.resetForm();//reset ไปค่าเดิมที่โหลดขึ้นมา
            formik.setSubmitting(false);
        });
    };

    //#endregion Event Handlers

    const columns = [
        {
            name: "ItemId",
            label: "id",
            options: {
                display: false,
            }
        },
        {
            name: "StatusPolicyDetail",
            label: "สถานะกรมธรรม์"
        },
        {
            name: "BillingItemCount",
            label: "จำนวนรายการ"
        },
        {
            name: "TotalNet",
            label: "เบี้ยรวม"
        },
    ];

    return (
        <Dialog
            open={deductLayoutReducer.dialogContinue.open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            maxWidth={'md'}
            fullWidth={true}
        >
            <form onSubmit={formik.handleSubmit}>
                <DialogContent>
                    <Grid container>
                        <Grid item xs={12} sm={12} md={12} lg={12}>
                            <Grid
                                container
                                direction="column"
                                justifyContent="center"
                                alignItems="stretch"
                            >
                                <StandardDataTable
                                    name="deductFirstPeriodTable"
                                    title=""
                                    columns={columns}
                                    data={deductBankAccountReducer.continuePeriodItem}
                                    paginated={paginated}
                                    setPaginated={setPaginated}
                                    totalRecords={totalRecords}
                                    headerbgcolor={"#D5D8DC !important"}
                                    fullWidth={true}
                                ></StandardDataTable>
                            </Grid>
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions style={{ marginTop: 25, marginBottom: 25 }}>
                    <Grid
                        container
                        direction="row"
                        justifyContent="space-evenly"
                        alignItems="center"
                    >
                        <Grid item xs={2} sm={2} md={2} lg={2} >
                            <Button
                                className={classes.closeButton}
                                size="small"
                                type="button"
                                fullWidth
                                color="primary"
                                variant="outlined"
                                onClick={() => {
                                    handleClose();
                                }}
                            >
                                ยกเลิก
                            </Button>
                        </Grid>
                        <Grid item xs={2} sm={2} md={2} lg={2} >
                            {!formik.isSubmitting && (
                                <Button
                                    disabled={formik.isSubmitting}
                                    style={{ color: "#FFFFFF" }}
                                    className={classes.saveButton}
                                    size="small"
                                    type="submit"
                                    fullWidth
                                    color="primary"
                                    variant="contained"
                                >
                                    ยืนยัน
                                </Button>
                            )}
                            <Grid
                                container
                                direction="row"
                                justifyContent="center"
                                alignItems="center"
                            >
                                {formik.isSubmitting && <CircularProgress size={24} />}
                            </Grid>
                        </Grid>
                    </Grid>
                </DialogActions>
            </form>
        </Dialog>
    )
}

export default DialogContinuePeriod
