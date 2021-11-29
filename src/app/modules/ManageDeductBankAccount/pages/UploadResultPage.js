import React from 'react';
import { Typography, Paper, Grid } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import { useWindowSize } from 'react-use';
import FormikDropdown from "../../_common/components/CustomFormik/FormikDropdown";
import { useSelector } from 'react-redux';
import { useFormik } from 'formik';
import FormikUploader from '../../_common/components/CustomFormik/FormikUploader';

const useStyle = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
    headerTextStyle: {
        marginBottom: 20
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'left',
        //color: theme.palette.text.secondary,
        minWidth: theme.spacing(100),
    },
    paperDetail: {
        padding: theme.spacing(1),
        textAlign: 'left',
        //color: theme.palette.text.secondary,
        minWidth: theme.spacing(100),
    },
    text: {
        color: theme.palette.text.secondary,
    },
}));



function UploadResultPage() {
    const { height, width } = useWindowSize();
    const manageReducer = useSelector(({ manageDeduct }) => manageDeduct);
    const classes = useStyle();
    const [state] = React.useState({
        imageFile: null,
    });

    //#region Formik
    const formik = useFormik({
        enableReinitialize: true,
        validate: (values) => {
            const errors = {};
            if (!values.bankId) {
                errors.bankId = 'เลือกธนาคาร';
            }
            if (!values.rbId) {
                errors.rbId = 'เลือกรหัสรายการ';
            }

            return errors;
        },
        initialValues: {
            bankId: 0,
            rbId: 0,
            imageFile: state.imageFile,
        },
        onSubmit: (values) => {
            //props.updateSearch(values); //ส่งคำค้นหาออกจากformik ผ่าน props
            formik.setSubmitting(false);
        }
    });
    //#endregion Formik


    return (
        <form onSubmit={formik.handleSubmit}>
            <Paper elevation={0} style={{ padding: 20, minHeight: height - 73 }}>
                <div className={classes.headerTextStyle}>
                    <Typography variant={'h6'}>อัพโหลดไฟล์ผลหักบัญชี</Typography>
                </div>
                <Grid
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <Paper elevation={0} className={classes.paper} >
                            <Grid
                                container
                                direction="row"
                                justifyContent="center"
                                alignItems="center"
                            >
                                <Grid item xs={12} sm={12} md={4} lg={4}>
                                    <Typography variant={'subtitle1'}>ธนาคาร*:</Typography>
                                </Grid>
                                <Grid item xs={12} sm={12} md={8} lg={8}>
                                    <div style={{ marginTop: -17 }}>
                                        <FormikDropdown
                                            formik={formik}
                                            name="bankId"
                                            label=""
                                            data={manageReducer.bank}
                                            firstItemText="เลือกธนาคาร"
                                            valueFieldName="id"
                                            displayFieldName="name"
                                            placeholder="เลือกธนาคาร"
                                            selectedCallback={(id) => {
                                                //TODO: Something
                                            }}
                                            required
                                        />
                                    </div>

                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <Paper elevation={0} className={classes.paper} >
                            <Grid
                                container
                                direction="row"
                                justifyContent="center"
                                alignItems="center"
                            >
                                <Grid item xs={12} sm={12} md={4} lg={4}>
                                    <Typography variant={'subtitle1'}>รหัสรายการ (RB)*:</Typography>
                                </Grid>
                                <Grid item xs={12} sm={12} md={8} lg={8}>
                                    <div style={{ marginTop: -17 }}>
                                        <FormikDropdown
                                            formik={formik}
                                            name="rbId"
                                            label=""
                                            data={manageReducer.rbDemo}
                                            firstItemText="เลือกรหัสรายการ"
                                            valueFieldName="id"
                                            displayFieldName="name"
                                            placeholder="เลือกรหัสรายการ"
                                            selectedCallback={(id) => {
                                                //TODO: Something
                                            }}
                                            required
                                        />
                                    </div>

                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <Paper elevation={0} className={classes.paper} >
                            <Grid
                                container
                                direction="row"
                                justifyContent="center"
                                alignItems="center"
                            >
                                <Grid item xs={12} sm={12} md={4} lg={4}>
                                    <Typography variant={'subtitle1'}>ไฟล์*:</Typography>
                                </Grid>
                                <Grid item xs={12} sm={12} md={8} lg={8}>
                                    <FormikUploader
                                        formik={formik}
                                        name="imageFile"
                                        label="ลาก/วางไฟล์ที่นี่ หรือ คลิกที่นี่เพื่อเลือก"
                                        required
                                        acceptedFiles={[".txt", ".csv", ".xlsx"]}
                                    />
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <Paper elevation={0} className={classes.paper} >
                            <Grid
                                container
                                direction="row"
                                justifyContent="center"
                                alignItems="center"
                            >
                                <Grid item xs={12} sm={12} md={4} lg={4}>
                                    {/* <Typography variant={'subtitle1'}>ไฟล์*:</Typography> */}
                                </Grid>
                                <Grid item xs={12} sm={12} md={8} lg={8}>
                                    <Typography variant={'subtitle2'}>
                                        หมายเหตุ : โปรดทราบว่าไม่สามารถอัพโหลดไฟล์มากกว่าหนึ่งครั้ง
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <Paper elevation={0} className={classes.paperDetail} >
                            <Grid
                                container
                                direction="row"
                                justifyContent="center"
                                alignItems="center"
                            >
                                <Grid item xs={12} sm={12} md={4} lg={4}>
                                    <Typography variant={'subtitle1'}>รายละเอียดไฟล์*:</Typography>
                                </Grid>
                                <Grid item xs={12} sm={12} md={3} lg={3}>
                                    <Typography className={classes.text} variant={'subtitle1'}>จำนวนรายการทั้งหมด:</Typography>
                                </Grid>
                                <Grid item xs={12} sm={12} md={1} lg={1}>
                                    <Typography variant={'subtitle1'}>XXXX</Typography>
                                </Grid>
                                <Grid item xs={12} sm={12} md={3} lg={3}>
                                    <Typography className={classes.text} variant={'subtitle1'}>เบี้ยทั้งหมด:</Typography>
                                </Grid>
                                <Grid item xs={12} sm={12} md={1} lg={1}>
                                    <Typography variant={'subtitle1'}>XXXX</Typography>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <Paper elevation={0} className={classes.paperDetail} >
                            <Grid
                                container
                                direction="row"
                                justifyContent="center"
                                alignItems="center"
                            >
                                <Grid item xs={12} sm={12} md={4} lg={4}>
                                    {/* <Typography variant={'subtitle1'}>รายละเอียดไฟล์*:</Typography> */}
                                </Grid>
                                <Grid item xs={12} sm={12} md={3} lg={3}>
                                    <Typography className={classes.text} variant={'subtitle1'}>จำนวนรายการหักได้:</Typography>
                                </Grid>
                                <Grid item xs={12} sm={12} md={1} lg={1}>
                                    <Typography variant={'subtitle1'}>XXXX</Typography>
                                </Grid>
                                <Grid item xs={12} sm={12} md={3} lg={3}>
                                    <Typography className={classes.text} variant={'subtitle1'}>เบี้ยหักได้:</Typography>
                                </Grid>
                                <Grid item xs={12} sm={12} md={1} lg={1}>
                                    <Typography variant={'subtitle1'}>XXXX</Typography>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <Paper elevation={0} className={classes.paperDetail} >
                            <Grid
                                container
                                direction="row"
                                justifyContent="center"
                                alignItems="center"
                            >
                                <Grid item xs={12} sm={12} md={4} lg={4}>
                                    {/* <Typography variant={'subtitle1'}>รายละเอียดไฟล์*:</Typography> */}
                                </Grid>
                                <Grid item xs={12} sm={12} md={3} lg={3}>
                                    <Typography className={classes.text} variant={'subtitle1'} >จำนวนรายการหักไม่ได้:</Typography>
                                </Grid>
                                <Grid item xs={12} sm={12} md={1} lg={1}>
                                    <Typography variant={'subtitle1'}>XXXX</Typography>
                                </Grid>
                                <Grid item xs={12} sm={12} md={3} lg={3}>
                                    <Typography className={classes.text} variant={'subtitle1'}>เบี้ยหักไม่ได้:</Typography>
                                </Grid>
                                <Grid item xs={12} sm={12} md={1} lg={1}>
                                    <Typography variant={'subtitle1'}>XXXX</Typography>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
            </Paper>
        </form>
    )
}

export default UploadResultPage
