import React from 'react';
import { useFormik } from "formik";
import { Grid, Button, CircularProgress, Divider, Typography } from "@material-ui/core/";
import FormikTextField from "../../_common/components/CustomFormik/FormikTextField";
import { makeStyles } from "@material-ui/core/styles";
import { Add } from '@material-ui/icons';
import { useDispatch } from 'react-redux';
import * as deductLayoutRedux from '../_redux/deductLayoutRedux'

const useStyle = makeStyles((theme) => ({

    searchButton: {
        color: "#FFFFFF", //font color
        // marginTop: '5%',
        // marginBottom: '5%',
        backgroundColor: "primary",
        // '&:hover': {
        //     backgroundColor: "primary",
        // },
        closeButton: {
            position: 'absolute',
            right: theme.spacing(1),
            top: theme.spacing(1),
            color: theme.palette.grey[500],
        },
    },
    sendButton: {
        color: "primary", //font color
        //outlineColor: "#4695E7",
        //backgroundColor: "#4695E7",
        closeButton: {
            position: 'absolute',
            right: theme.spacing(1),
            top: theme.spacing(1),
            color: theme.palette.grey[500],
        },
    },
    dividerFullWidth: {
        margin: `0 0 20px ${theme.spacing(0)}px`,
        height: '3px',
        backgroundColor: "#3f51b5",

    },

}));


function FirstPeriodSearchBox(props) {
    const dispatch = useDispatch();
    const classes = useStyle();
    const formik = useFormik({
        enableReinitialize: true,
        validate: (values) => {
            const errors = {};
            if (!values.searchWord) {
                errors.searchWord = 'กรุณากรอกคำค้นหา'
            }
            return errors;
        },
        initialValues: {
            searchWord: ''
        },
        onSubmit: (values) => {
            //alert(JSON.stringify(values, null, 2));
            props.updateSearch(values); //ส่งคำค้นหาออกจากformik ผ่าน props
            formik.setSubmitting(false);
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <Grid
                container
                direction="row"
                justifyContent="flex-end"
                alignItems="center"
            >
                <Grid item xs={12} lg={2}>
                    <Button
                        className={classes.sendButton}
                        fullWidth
                        size="small"
                        type="button"
                        variant="outlined"
                        color="primary"
                        startIcon={<Add />}
                        onClick={() => {
                            dispatch(deductLayoutRedux.actions.openFirst())
                        }}
                    >
                        ยืนยันส่ง
                    </Button>
                </Grid>
            </Grid>
            <Divider
                className={classes.dividerFullWidth}
            />
            <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="flex-start"
                spacing={0}
            //style={{ marginBottom: '25px' }}
            >
                {/* Start search */}
                <Grid item xs={12} lg={4}>
                    <FormikTextField
                        formik={formik}
                        name="searchWord"
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

export default FirstPeriodSearchBox
