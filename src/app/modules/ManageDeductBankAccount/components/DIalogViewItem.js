import React from 'react';
import { Grid, Paper, Typography, Dialog, IconButton } from '@material-ui/core';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import { withStyles } from "@material-ui/core/styles";
import CloseIcon from '@material-ui/icons/Close';
import { useSelector, useDispatch } from 'react-redux';
import * as manageLayoutRedux from '../_redux/manageDeductLayoutRedux';
import StandardDataTable from "../../_common/components/DataTable/StandardDataTable";

const styles = (theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
});



const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(1),
    },
}))(MuiDialogActions);

function DIalogViewItem() {
    const manageDeductReducer = useSelector(({ manageDeduct }) => manageDeduct);
    const dispatch = useDispatch();
    const [totalRecords, setTotalRecords] = React.useState(0);
    const [paginated, setPaginated] = React.useState({
        page: 1,
        recordsPerPage: 10,
        orderingField: "",
        ascendingOrder: true,
    });

    //#region  Promise
    const updateLayoutClosePromise = () =>
        new Promise((resolve) => {
            dispatch(manageLayoutRedux.actions.updateItemClose());
            resolve();
        });
    //#endregion

    const handleClose = () => {
        updateLayoutClosePromise();
    };

    const columns = [
        {
            name: "ItemId",
            label: "Id",
            options: {
                display: false
            }
        },
        {
            name: "ReferenceCode",
            label: "Ref No."
        },
        {
            name: "ApplicationCode",
            label: "เลขที่แอพ"
        },
        {
            name: "PayerFullName",
            label: "ผู้ชำระเบี้ย"
        },
        {
            name: "TotalNet",
            label: "เบี้ย"
        }
    ];

    return (
        <Dialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={manageDeductReducer.itemView.showDialog}
        >
            <DialogTitle id="customized-dialog-title" onClose={handleClose} >

            </DialogTitle>
            <DialogContent>
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
                            data={manageDeductReducer.selectedViewItem}
                            paginated={paginated}
                            setPaginated={setPaginated}
                            totalRecords={totalRecords}
                            headerbgcolor={"#D5D8DC !important"}
                        ></StandardDataTable>
                    </Grid>
                </Grid>
            </DialogContent>
            <DialogActions>
                {/* Action */}
            </DialogActions>
        </Dialog>

    )
}

export default DIalogViewItem
