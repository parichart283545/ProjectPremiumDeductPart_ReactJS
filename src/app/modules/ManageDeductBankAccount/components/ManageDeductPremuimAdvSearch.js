import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { useFormik } from "formik";
import { Grid, Button, CircularProgress } from "@material-ui/core/";
import FormikTextField from "../../_common/components/CustomFormik/FormikTextField";
import { useDispatch, useSelector } from 'react-redux';
import * as manageDeductRedux from '../_redux/manageDeductRedux';

const useStyle = makeStyles((theme) => ({

    searchButton: {
        color: "#FFFFFF", //font color
        backgroundColor: "primary",
        closeButton: {
            position: 'absolute',
            right: theme.spacing(1),
            top: theme.spacing(1),
            color: theme.palette.grey[500],
        },
    },
}));



function ManageDeductPremuimAdvSearch() {

    const classes = useStyle();
    const dispatch = useDispatch();
    const manageDeductReducer = useSelector(({ manageDeduct }) => manageDeduct)

    //#region Formik
    const formik = useFormik({
        enableReinitialize: true,
        validate: (values) => {
            const errors = {};
            if (!values.searchAdvanceWord) {
                errors.searchAdvanceWord = 'กรุณากรอกคำค้นหา';
            }
            updateSerchPromise(values.searchDeductPremium);
            return errors;
        },
        initialValues: {
            searchDeductPremium: manageDeductReducer.searchDeductPremium
        },
        onSubmit: (values) => {

            updateSerchPromise(values.searchDeductPremium).then(() => {
                formik.setSubmitting(false);
            });
        },
    });
    //#endregion Formik

    //#region  Promise
    const updateSerchPromise = (search) =>
        new Promise((resolve) => {
            dispatch(manageDeductRedux.actions.updateSearchAdvance(search));
            resolve();
        });
    //#endregion Promise

    return (
        <form onSubmit={formik.handleSubmit}>
            <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="flex-start"
                spacing={0}
            //style={{ marginBottom: '25px' }}
            >
                {/* Start search */}
                <Grid item xs={12} lg={5}>
                    <FormikTextField
                        formik={formik}
                        name="searchDeductPremium"
                        label=""
                        placeholder="ระบุคำค้นหา"
                    />
                </Grid>
                <Grid item xs={12} lg={1}>
                    {!formik.isSubmitting && (
                        <Button
                            disabled={formik.isSubmitting}
                            style={{ color: "#FFFFFF" }}
                            className={classes.searchButton}
                            size="small"
                            type="submit"
                            fullWidth
                            color="primary"
                            variant="contained"
                        >
                            ค้นหา
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
        </form>
    )
}

export default ManageDeductPremuimAdvSearch
